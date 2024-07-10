"use server";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes/?page=${page}&limit=8&order=popularity`
  );
  const data = response.json();
  return data;
};
