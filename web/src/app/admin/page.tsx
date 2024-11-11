"use client";

import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { NewsItem } from "../../types/news.types";
import Image from "next/image";
import { createNews, deleteNews, getNews, updateNews } from "@/http/news";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Dialog from "./components/dialog";

const NewsList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<NewsItem | null>(null);

  const queryClient = useQueryClient();

  const { data: newsItems } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });

  const openCreateModal = () => {
    setCurrentItem(null);
    setIsModalOpen(true);
  };

  const openEditModal = (item: NewsItem) => {
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  const { mutateAsync: updateNewsFn } = useMutation({
    mutationFn: ({ id, news }: { id: number; news: NewsItem }) =>
      updateNews(id, news),
    onSuccess: (_, variables) => {
      const newsData = { ...variables.news };
      queryClient.setQueryData<NewsItem[]>(["news"], (oldData) => {
        return oldData?.map((item) =>
          item.id === variables.id ? { ...newsData, id: item.id } : item
        );
      });
    },
  });

  const { mutateAsync: createNewsFn } = useMutation({
    mutationFn: (news: NewsItem) => createNews(news),
    onSuccess: (newNews) => {
      queryClient.setQueryData<NewsItem[]>(["news"], (oldData) => {
        return oldData ? [...oldData, newNews] : [newNews];
      });
    },
  });

  const { mutateAsync: deleteNewsFn } = useMutation({
    mutationFn: (id: number) => deleteNews(id),
    onSuccess: (_, variables) => {
      queryClient.setQueryData<NewsItem[]>(["news"], (oldData) => {
        return oldData?.filter((item) => item.id !== variables);
      });
    },
  });

  const onSubmit: SubmitHandler<NewsItem> = async (data) => {
    if (currentItem) {
      await updateNewsFn({ id: Number(currentItem.id), news: data });
    } else {
      await createNewsFn(data);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Notícias</h1>
      <button
        onClick={openCreateModal}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
      >
        Nova Notícia
      </button>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {newsItems?.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow-sm">
            <Image
              src={item.thumbnail}
              alt={item.titulo}
              width={300}
              height={200}
              className="rounded h-[200px] w-[350px]"
            />
            <h2 className="text-lg font-semibold mt-2">{item.titulo}</h2>
            <p className="text-sm text-gray-500">{item.chapeu}</p>
            <p className="text-gray-700 mt-2">{item.data_hora_publicacao}</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => openEditModal(item)}
                className="text-blue-500"
              >
                Editar
              </button>
              <button
                onClick={() => deleteNewsFn(Number(item.id))}
                className="text-red-500"
              >
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Dialog
          onSubmit={onSubmit}
          currentItem={currentItem}
          setIsModalOpen={setIsModalOpen}
          setCurrentItem={setCurrentItem}
        />
      )}
    </div>
  );
};

export default NewsList;
