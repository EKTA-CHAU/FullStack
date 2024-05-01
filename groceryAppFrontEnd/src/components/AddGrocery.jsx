import React, { useState, useEffect } from "react";
import axios from "axios";

const AddGrocery = () => {
  const [input, setInput] = useState({
    name: "",
    quantity: "",
    source_id: "",
    cost: "",
    totalCost: 0,
  });

  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchStates = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/groceries/getAllStates"
      );
      setStates(response.data);
    };

    fetchStates();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: name === "source_id" ? parseInt(value) : value,
    });
  };

  const calculateTotalCost = () => {
    const parsedQuantity = parseFloat(input.quantity) || 0;
    const parsedCost = parseFloat(input.cost) || 0;
    setInput({ ...input, totalCost: parsedQuantity * parsedCost });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateTotalCost();

    axios
      .post("http://localhost:8080/api/groceries/addGrocery", input)
      .then((response) => {
        alert("Grocery Added Successfully", response.data);

        setInput({
          name: "",
          quantity: "",
          source_id: "",
          cost: "",
          totalCost: 0,
        });
      })
      .catch((error) => {
        alert("Error Adding Grocery", error);
      });
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <h1 className="font-bold text-center text-xl my-4">
        Add Your Grocery Here
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={input.quantity}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Source:</label>
          <select
            name="source_id"
            value={input.source_id}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Source</option>
            {states.map((state) => (
              <option key={state.source_id} value={state.source_id}>
                {state.state}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Cost Per Item:</label>
          <input
            type="number"
            name="cost"
            value={input.cost}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Total Cost:</label>
          <input
            type="text"
            name="totalCost"
            value={input.totalCost}
            disabled
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Grocery
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGrocery;
