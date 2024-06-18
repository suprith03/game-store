import { useContext, useEffect, useState } from "react";
import { CartContext } from "../pages/Favourite";
import { IconX } from "@tabler/icons-react";

function CartItem() {
  
  const { cartItem, setCartItem } = useContext(CartContext);
  const [deleteItem, setDeleteItem] = useState(cartItem);

  const removeFromCart = (id) => {
    const updateCart = cartItem.filter((item) => item.id !== id);
    setDeleteItem(updateCart);
    const json = JSON.stringify(cartItem.id);
    localStorage.removeItem("cartItem", json);
  };

  useEffect(() => {
    setCartItem(deleteItem);
  }, [deleteItem, setCartItem]);

  return (
    <>
      {cartItem.map((item, id) => (
        <div key={id} className="cart-item">
          <div className="cart-img">
            <img src={item.img} alt="product" />
          </div>
          <div className="cart-middle">
            <p className="cart-name">{item.description}</p>
          </div>
            <IconX onClick={() => removeFromCart(item.id)} />
          </div>
      ))}
    </>
  );
}

export default CartItem;

