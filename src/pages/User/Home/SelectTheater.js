/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState} from "react";
import "./Home.css";
import TheaterServices from "../../../services/TheaterServices";

function SelectTheater({setTheaterId}) {
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
      <select className="form-select" onChange={(e)=>{
        setTheaterId(e.target.value)
      }}>
          {theaters &&
            theaters.map((theater) => (
              <option key={theater.id} value={`${theater.id}`}>{theater.name}</option>
            ))}
        </select>
    </div>
  );
}

export default SelectTheater;
