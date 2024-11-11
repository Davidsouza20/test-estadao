import { NewsItem } from "@/types/news.types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface DialogProps {
  currentItem: NewsItem | null;
  setCurrentItem: (item: NewsItem | null) => void;
  setIsModalOpen: (isOpen: boolean) => void;
  onSubmit: (data: NewsItem) => void;
}

const Dialog: React.FC<DialogProps> = ({
  currentItem,
  setCurrentItem,
  setIsModalOpen,
  onSubmit,
}) => {
  const newsSchema = z.object({
    titulo: z.string().min(1, "Título é obrigatório"),
    chapeu: z.string().min(1, "Chapéu é obrigatório"),
    url: z.string().url("URL inválida"),
    data_hora_publicacao: z
      .string()
      .min(1, "Data e hora de publicação são obrigatórias"),
    imagem: z.string().url("URL da imagem inválida"),
    thumbnail: z.string().url("URL do thumbnail inválida"),
    conteudo: z.string().min(1, "Conteúdo é obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsItem>({
    resolver: zodResolver(newsSchema),
  });

  useEffect(() => {
    if (currentItem) {
      reset(currentItem);
    }
  }, [currentItem, reset]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">
          {currentItem ? "Editar Notícia" : "Nova Notícia"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("titulo")}
            placeholder="Título"
            className="w-full p-2 border rounded"
          />
          <div className="text-red-500 text-sm">{errors.titulo?.message}</div>
          <input
            {...register("chapeu")}
            placeholder="Chapéu"
            className="w-full p-2 border rounded"
          />
          <div className="text-red-500 text-sm">{errors.chapeu?.message}</div>
          <input
            {...register("url")}
            placeholder="URL"
            className="w-full p-2 border rounded"
          />
          <div className="text-red-500 text-sm">{errors.url?.message}</div>
          <input
            {...register("data_hora_publicacao")}
            type="datetime-local"
            className="w-full p-2 border rounded"
            defaultValue={new Date().toISOString().slice(0, 16)}
          />
          <div className="text-red-500 text-sm">
            {errors.data_hora_publicacao?.message}
          </div>
          <input
            {...register("imagem")}
            placeholder="URL da Imagem"
            className="w-full p-2 border rounded"
          />
          <div className="text-red-500 text-sm">{errors.imagem?.message}</div>
          <input
            {...register("thumbnail")}
            placeholder="URL do Thumbnail"
            className="w-full p-2 border rounded"
          />
          <div className="text-red-500 text-sm">
            {errors.thumbnail?.message}
          </div>
          <textarea
            {...register("conteudo")}
            placeholder="Conteúdo"
            className="w-full p-2 border rounded"
            rows={4}
          />
          <div className="text-red-500 text-sm">{errors.conteudo?.message}</div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => {
                setCurrentItem(null);
                reset({});
                setIsModalOpen(false);
              }}
              className="text-gray-500"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              {currentItem ? "Salvar Alterações" : "Adicionar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dialog;
