/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./Home.css";
import TheaterServices from "../../../services/TheaterServices";

function SelectTheater({ setTheaterId }) {
  const [theaters, setTheaters] = useState();
  const [adds, setAdds] = useState("test");

  useEffect(() => {
    getAllTheaters();
  }, []);

  const getAllTheaters = () => {
    TheaterServices.getAll().then((res) => {
      setTheaters(res.data);
    });
  };
  function handleClick(a){
    setAdds(a);
  };
  return (
    <div className="col-md-3">
      <div className="row">
        <div class="col-md-6">
          <div class="list-group list-group-flush list">
            <a
              href="#"
              class="list-group-item list-group-item-action disabled bg-light"
            >
              Khu vực
            </a>
            {theaters &&
              theaters.map((theater) => (
                <a
                  href="#"
                  class="list-group-item list-group-item-action d-flex justify-content-between align-items-center btn-choose-region"
                  data-region="1"
                  onClick={() =>handleClick(theater.address)}
                >
                  <span> {theater.address}</span>
                  {/* <span class="badge badge-primary badge-pill">6</span> */}
                </a>
              ))}
          </div>
        </div>
        <div class="col-md-6">
          <div class="list-group list-group-flush list">
            <div>
              <a
                href="#"
                class="list-group-item list-group-item-action disabled bg-light"
              >
                Rạp
              </a>
              {theaters &&
                theaters.map(
                  (theater) =>
                    theater.address === adds && (
                      <a
                        href="#"
                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center btn-choose-region"
                        data-region="1"
                        onClick={() => {
                          setTheaterId(theater.id);
                        }}
                      >
                        {theater.name}
                      </a>
                    )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectTheater;
