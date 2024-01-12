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

export const generateCarImageUrl = async () => {
  const api_key = "hrjavascript-mastery";
  let url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", api_key);
  url.searchParams.append("make", "audi");
  url.searchParams.append("modelFamily", "A4");
  url.searchParams.append("modelYear", 2023);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("angle", 90);

  return url;
};

// export const fetchCars = async () => {
//   const headers = {
//     "X-RapidAPI-Key": "b7963e9039msh74f5e85123676c3p1549b7jsn3fbc7a6a5abf",
//     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//   };

//   const url = `https://cars-by-api-ninjas.p.r/com/v1/cars`;
//   // const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=“audi”`;
//   const response = await fetch(url, { headers: headers });
//   const result = await response.json();
//   return result;
// };
