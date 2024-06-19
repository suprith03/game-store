import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/Categories-pages/All";
import Action from "./components/Categories-pages/Action";
import Horror from "./components/Categories-pages/Horror";
import Adventure from "./components/Categories-pages/Adventure";
import Simulation from "./components/Categories-pages/Simulation";
import Favourite, { CartContext } from "./pages/Popular";
import { useEffect, useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };

  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="action" element={<Action />} />
          <Route path="adventure" element={<Adventure />} />
          <Route path="horror" element={<Horror />} />
          <Route path="simulation" element={<Simulation />} />
        </Route>
        <Route path="categories/product/:id" element={<Favourite />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default App;