function Cart(prop) {
  console.log("prop value is", prop.orders);
  let order = prop.orders;
  let xyz = prop.setorder;
  let showCart = () => {
    return (
      <div className="cart">
        <h2 className="head"> YOUR CART</h2>
        {order.map((data) => {
          function remove(cart) {
            xyz(order.filter((product) => product !== cart));
          }
          return (
            <>
              <div className="cartt">
                <div className="imgdiv">
                  <img
                    src="https://thumbs.dreamstime.com/b/masala-dosa-21646814.jpg"
                    alt=""
                  />
                </div>
                <div className="desc">
                  <h2>{data.FoodName}</h2>
                  <h2>{data.discription}</h2>
                  <h2>{data.price}</h2>
                </div>
                <div className="btn">
                  <button className="btnrem" onClick={() => remove(data)}>
                    Remove
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {order.length > 0 ? (
        showCart()
      ) : (
        <div className="no_itmes_div">
          <h2>YOU HAVE 0 ITEMS IN THE CART</h2>
        </div>
      )}
    </>
  );
}

export default Cart;
