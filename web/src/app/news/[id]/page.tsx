// app/news/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { NewsItem } from "@/types/news.types";
import DOMPurify from "dompurify";
import { useParams } from "next/navigation";
import { getNewsById } from "@/http/news";

export default function NewsDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const router = useRouter();
  const [news, setNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await getNewsById(Number(id));
      setNews(response);
    };

    getData();
  }, [id]);

  if (!news) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <button
            type="button"
            className="flex items-center mb-6 text-[#6B7280] hover:text-gray-900 transition-colors"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </button>

          <h1 className="text-[32px] font-bold text-gray-900 mb-4">
            {news.titulo}
          </h1>

          <div className="flex items-center text-[#6B7280] text-sm mb-8">
            <Clock className="w-4 h-4 mr-2" />
            {new Date(news.data_hora_publicacao).toLocaleDateString("pt-BR")}
          </div>

          <div
            className="text-[#6B7280] text-lg leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(news.conteudo),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
