import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  timeout: 10000,
  headers: { "x-api-key": "852886f0-0fcc-4f79-b3c1-349222191579" },
});

export const getBreeds = async () => {
  const result = await axiosClient.get("/breeds");
  return result.data;
};

export const getCats = async (page, breedId) => {
  const result = await axiosClient.get("/images/search", {
    params: {
      page: page,
      limit: 10,
      breed_id: breedId,
    },
  });
  return result.data;
};

export const getCat = async (id) => {
  const result = await axiosClient.get(`/images/${id}`);
  return result.data;
};
