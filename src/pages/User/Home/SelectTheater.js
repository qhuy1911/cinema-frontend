/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState} from "react";
import "./Home.css";
import TheaterServices from "../../../services/TheaterServices";

function SelectTheater() {
  const [theaters, setTheaters] = useState();

  useEffect(() => {
    getAllTheaters();
  }, []);

  const getAllTheaters = () => {
    TheaterServices.getAll().then((res) => {
      setTheaters(res.data);
    });
  };

  return (
    <div>
      <select className="form-select">
          {theaters &&
            theaters.map((theater) => (
              <option key={theater.id} value="{theater.name}">{theater.name}</option>
            ))}
        </select>
    </div>
  );
}

export default SelectTheater;
