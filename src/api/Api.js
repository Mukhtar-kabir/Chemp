export const getCarsData = async () => {
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";
  const queryParams = new URLSearchParams({ model: "corolla" });

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b7963e9039msh74f5e85123676c3p1549b7jsn3fbc7a6a5abf",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  const response = await fetch(`${url}?${queryParams}`, options);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  console.log(response.status);

  return response.json();
};

export const fetchCars = async () => {
  const headers = {
    "X-RapidAPI-Key": "b7963e9039msh74f5e85123676c3p1549b7jsn3fbc7a6a5abf",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=“corolla”`;
  const response = await fetch(url, { headers: headers });
  const result = await response.json();
  return result;
};
