import React, { useState, useEffect } from "react";
import axios from "axios";

const GroceryList = () => {
  const [groceries, setGroceries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchGroceries = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/groceries/getAll"
        );
        setGroceries(response.data);
      } catch (error) {
        console.error("Error fetching groceries:", error);
      }
    };

    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/groceries/getAllStates"
        );
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchGroceries();
    fetchStates();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/groceries/delete/${id}`);
      setGroceries(groceries.filter((grocery) => grocery.id !== id));
    } catch (error) {
      console.error("Error deleting grocery:", error);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-center text-xl my-4">Grocery List</h1>
      <div className="w-full max-w-xs mx-auto">
        {groceries.map((grocery) => (
          <div
            key={grocery.id}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <p>
              <strong>Name:</strong> {grocery.name}
            </p>
            <p>
              <strong>Quantity:</strong> {grocery.quantity}
            </p>
            <p>
              <strong>Source:</strong>{" "}
              {
                states.find((state) => state.source_id === grocery.source_id)
                  ?.state
              }
            </p>
            <p>
              <strong>Cost Per Item:</strong> {grocery.cost}
            </p>
            <p>
              <strong>Total Cost:</strong> {grocery.totalCost}
            </p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleDelete(grocery.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryList;
