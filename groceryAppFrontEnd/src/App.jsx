import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AddGrocery from "./components/AddGrocery";
import UpdateGrocery from "./components/UpdateGrocery";
import GroceryList from "./components/GroceryList";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <div className="max-w-screen-lg mx-auto px-4">
          <Routes>
            <Route index path="/" element={<GroceryList />} />
            <Route path="/add" element={<AddGrocery />} />
            <Route path="/update/:id" element={<UpdateGrocery />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
