import React from "react";
import { useNavigate } from "react-router-dom";
import useGetInputValues from "../hooks/useGetInputValues";

const AddContact = ({ onAddContact }) => {
  const navigate = useNavigate();
  const { inputValues, handleInputChange, resetInputValues } =
    useGetInputValues({
      name: "",
      email: "",
      phone: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(inputValues);
    resetInputValues();
    navigate("/");
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          Add New Contact
        </h2>
        <button
          onClick={handleGoBack}
          className="text-gray-500 text-2xl hover:text-gray-700"
        >
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={inputValues.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 text-gray-700">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={inputValues.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
