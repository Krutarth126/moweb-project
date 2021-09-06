import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Restraunt() {
  const [hotels, setHotel] = useState([]);
  useEffect(async () => {
    let orders = await axios.get(
      "http://localhost:7000/api/get-all-restraunts"
    );
    setHotel(orders.data);
  }, []);
  console.log(hotels);
  return (
    <>
      <div className="items">
        {hotels.map((data, index) => {
          return (
            <div>
              <h3>{data.restuarant_name}</h3>
              <img src={data.photo} />
              <p>
                <p>Status: {data.status === "active" ? "Open" : "Closed"}</p>
                <p>Opening Time : {data.opening_time}</p>
                <p>Closing Time : {data.closing_time}</p>
              </p>
              <Link to={`/restraunts/${data._id}`}>
                <button>Check Menu</button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Restraunt;
