import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GroceryList = () => {
  const [groceries, setGroceries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const groceriesResponse = await axios.get(
          "http://localhost:8080/api/groceries/getAll"
        );
        setGroceries(groceriesResponse.data);

        const statesResponse = await axios.get(
          "http://localhost:8080/api/groceries/getAllStates"
        );
        setStates(statesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
    <div className="max-w-screen-lg mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-4">Grocery List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {groceries.map((grocery) => (
          <div key={grocery.id} className="bg-white shadow-md rounded-lg p-4">
            <p className="font-semibold">Name: {grocery.name}</p>
            <p>Quantity: {grocery.quantity}</p>
            <p>
              Source:{" "}
              {states.find((state) => state.source_id === grocery.source_id)
                ?.state || "Unknown"}
            </p>

            <p>Cost Per Item: {grocery.cost}</p>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handleDelete(grocery.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
              <Link to={`/update/${grocery.id}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Update
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryList;
