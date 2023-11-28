import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carsData } from "../../api/Api";
import { setCars } from "../../redux/chempSlice";

import "../Cars/Cars.scss";

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.chemp.cars);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await carsData();
        console.log(response);
        // dispatch(setCars(response.data));
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCars();
  }, [dispatch]);

  return (
    <div>
      <h2>Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.make} {car.model} - {car.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
