import "./App.css";
import { products } from "./MockData";
import React, { useState } from "react";
import Items from "./components/Items";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  const [items, setItems] = useState(products);
  const [chosenItems, setChosenItems] = useState([]);

  const addProduct = (e, id) => {
    const chosenItem = items.filter((item) => item.id === id)[0];
    chosenItems.push(chosenItem);
    console.log(chosenItems);
    setChosenItems(chosenItems);
  };

  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route
          path="/"
          element={<Items items={items} addProduct={addProduct} />}
        ></Route>
        <Route path="/cart" element={<Items items={chosenItems} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
