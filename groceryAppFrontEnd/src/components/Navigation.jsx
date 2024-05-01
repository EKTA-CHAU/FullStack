import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const divert = useNavigate();

  const handleAddGroceryClick = () => {
    divert("/add");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">
          <Link to="/">Grocery Store</Link>
        </h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddGroceryClick}
        >
          Add Grocery
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
