import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8080"
  baseURL: "https://medaf-backend.herokuapp.com/"
});

export default instance;

const HeroURL = "https://medaf-backend.herokuapp.com/products/query";
const localURL = "http://localhost:8080/products/query";

export const fetchProducts = async (query) => {
  const { data } = await axios.post(HeroURL, {
    query
  });

  return data;
};
