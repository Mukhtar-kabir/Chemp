import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarsData } from "../../api/Api";
import { setCars } from "../../redux/chempSlice";

import "../Cars/Cars.scss";

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.chemp.cars);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        // dispatch(setLoading(true));

        const response = await getCarsData();
        dispatch(setCars(response));

        // dispatch(setLoading(false));
      } catch (error) {
        console.error("Error fetching car data:", error);
        // dispatch(setLoading(false));
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
