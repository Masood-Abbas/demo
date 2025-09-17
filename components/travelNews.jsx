'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa'; 

const  TravelNews=() =>{
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-8 w-[95%] mx-auto text-black">
      <div className="w-full md:w-1/2 overflow-hidden">
        <Image
          src="/images/hotels/image2.jpeg"
          alt="Travel Waterfall"
          width={600}
          height={400}
          className="w-full h-auto object-cover rounded-tl-[30px] rounded-tr-[40px] rounded-br-[30px] rounded-bl-[80px]"
        />
      </div>
      <div className="w-full md:w-1/2">
        <span className="text-sm bg-gray-200 px-3 py-1 rounded-md">Newsletter</span>
        <h2 className="text-3xl font-extrabold mt-4 mb-2 text-[#0d1a3a]">
          Your Travel <br /> Journey Starts Here
        </h2>
        <p className="text-gray-600 mb-6 w-[90%]">
          Begin your adventure with handpicked stays, exclusive deals, and effortless booking — 
          everything you need for a perfect getaway, all in one place.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative flex-1">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </section>
  );
}
export default  TravelNews