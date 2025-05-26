import React from "react";
import { assets, cities } from "../assets/assets";

const HotelReg = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-100 flex items-center justify-center bg-black/70 ">
      <form className="flex bg-white rounded-xl max-w-4xl max-md:mx-2">
        <img
          src={assets.regImage}
          alt="regImage"
          className="w-1/2 rounded-xl hidden md:block"
        />
        <div className="relative flex flex-col items-center md:p-10 md:w-1/2 p-8">
          <img
            src={assets.closeIcon}
            alt="close-icon"
            className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
          />
          <p className="text-2xl font-semibold mt-6">Register Your Hotel</p>
          {/* Hotel Name  */}
          <div className="w-full mt-4">
            <label htmlFor="name" className="font-medium text-gray-500">
              Hotel Name
            </label>
            <input
            id="name"
              type="text"
              placeholder="Type Here"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-2 outline-indigo-400 font-light "
              required
            />
          </div>
          {/* contact Number */}
           <div className="w-full mt-4">
            <label htmlFor="contact" className="font-medium text-gray-500">
             Phone
            </label>
            <input
            id="contact"
              type="text"
              placeholder="Type Here"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-2 outline-indigo-400 font-light "
              required
            />
          </div>
          {/* address */}
          <div className="w-full mt-4">
            <label htmlFor="address" className="font-medium text-gray-500">
             Address
            </label>
            <input
            id="address"
              type="text"
              placeholder="Type Here"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-2 outline-indigo-400 font-light "
              required
            />
          </div>
{/* select city dropdown */}
<div className="w-full mt-4 max-w-60 mr-auto"> 
    <label htmlFor="city" className="font-medium text-gray-500">City</label>
    <select  className="border w-full border-gray-300 rounded px-3 py-2 mt-2 outline-indigo-400 font-light" id="city" required>
        <option value="">Select City</option>
        {
            cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
            ))
        }
    </select>
</div>
<button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded mt-6 transition-all mr-auto cursor-pointer ">
    Register
</button>

        </div>
      </form>
    </div>
  );
};

export default HotelReg;
