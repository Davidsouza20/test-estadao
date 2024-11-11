import { NewsItem } from "@/types/news.types";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getNews = async (): Promise<NewsItem[]> => {
  const response = await apiClient.get<NewsItem[]>("/news");
  return response.data;
};

export const getNewsById = async (id: number): Promise<NewsItem> => {
  const response = await apiClient.get<NewsItem>(`/news/${id}`);
  return response.data;
};

export const createNews = async (news: NewsItem): Promise<NewsItem> => {
  const response = await apiClient.post<NewsItem>("/news", news);
  return response.data;
};

export const updateNews = async (
  id: number,
  news: NewsItem
): Promise<NewsItem> => {
  const response = await apiClient.patch<NewsItem>(`/news/${id}`, news);
  return response.data;
};

export const deleteNews = async (id: number): Promise<void> => {
  await apiClient.delete(`/news/${id}`);
};
