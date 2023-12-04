import axios from "axios";

export const getCarsData = async () => {
  const options = {
    method: "GET",
    url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    params: { model: "corolla" },
    headers: {
      "X-RapidAPI-Key": "b7963e9039msh74f5e85123676c3p1549b7jsn3fbc7a6a5abf",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  return axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
