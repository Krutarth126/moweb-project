import "../App.css";
import { Link } from "react-router-dom";

function Navbar(prop) {
  return (
      
    <h1>
    <Link to= "/">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </Link>
      FOOD JUNCTION{" "}
      <Link to="/cart">
      <i className="fa fa-shopping-cart" aria-hidden="true"> {"    "}
        {prop.orders.length}</i>
      </Link> 
    </h1>
   
  );
}

export default Navbar;
