import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import items from "./orders";

function FoodItemPage(prop) {
  let { id } = useParams();
  const [hotel, setHotels] = useState([]);
  useEffect(async () => {
    // async function data() {
    let order = await axios.get("http://localhost:7000/api/get-all-restraunts");
    let newOrder = order.data.filter((hotel) => {
      return hotel._id === id;
    });
    console.log(newOrder);
    setHotels(newOrder[0].foodItems.Types);
    // }
    // data();
  }, []);
  console.log(hotel);
  function clickhandler(food) {
    let temp = prop.orders;
    prop.setorder([...temp, food]);
  }

  return (
    <>
      <div className="items">
        {hotel.map((data, index) => {
          return (
            <>
              <div key={index}>
                <h3>{data.food_name}</h3>
                <img src="https://thumbs.dreamstime.com/b/masala-dosa-21646814.jpg" />
                <h4>{data.price}</h4>
                <p>get the best pizza of the city at an affordable price</p>
                <button onClick={() => clickhandler(data)}>Order Now</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default FoodItemPage;
