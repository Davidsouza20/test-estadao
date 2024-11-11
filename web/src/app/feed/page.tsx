"use client";

import { Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getNews } from "@/http/news";
import { useQuery } from "@tanstack/react-query";

export default function NewsFeed() {
  const { data: news } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6">
          {news?.map((item) => (
            <article
              key={item.id}
              className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6 flex flex-col md:flex-row">
                <div className="md:w-1/2 mr-6">
                  <Image
                    src={item.thumbnail}
                    alt={item.titulo}
                    width={400}
                    height={200}
                    className="rounded-lg h-[200px] w-[350px]"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center mb-2">
                    <span className="bg-gray-200 text-blue-600 font-semibold text-xs px-2 py-1 rounded-full uppercase mr-3">
                      {item.chapeu}
                    </span>
                    <Clock className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-gray-500 text-sm">
                      {new Date(item.data_hora_publicacao).toLocaleDateString(
                        "pt-BR"
                      )}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    <Link
                      href={`/news/${item.id}`}
                      className="hover:text-blue-600"
                    >
                      {item.titulo}
                    </Link>
                  </h2>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
