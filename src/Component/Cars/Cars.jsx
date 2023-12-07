import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarsData } from "../../api/Api";
import { setCars } from "../../redux/chempSlice";

import "../Cars/Cars.scss";

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.chemp.getCarsData);

  useEffect(() => {
    const fetchCarsData = async () => {
      try {
        const data = await getCarsData();
        console.log(data);
        dispatch(setCars(data));
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCarsData();
  }, []);

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
