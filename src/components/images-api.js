import axios from "axios";

const ClientId = "uEG0e6e2wKmXMPjUqYyMs4y_tJrckSdn6hkGUjhM5SE";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-Id ${ClientId}`;

export const fetchImages = async (query, page) => {
  const response = await axios.get("/search/photos/", {
    params: {
      client_id: ClientId,
      query: query,
      orientation: "landscape",
      page: page,
      per_page: 12,
    },
  });

  return response.data;
};
