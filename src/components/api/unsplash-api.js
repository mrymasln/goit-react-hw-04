const BASE_URL = "https://api.unsplash.com";
const ACCESS_KEY = "6tB9y27kMlBuMfK2PCuecXm1MbqBLYLxOXzeQ0SssXw"; // ← Senin gerçek key'in

export const fetchPhotosByQuery = async (query, page = 1, perPage = 12) => {
  const response = await fetch(
    `${BASE_URL}/search/photos?query=${query}&page=${page}&per_page=${perPage}`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Veri alınamadı");
  }

  const data = await response.json();
  return data;
};
