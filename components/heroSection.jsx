'use client';
import { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaUser } from 'react-icons/fa';

const HeroSection=()=> {
  const [formData, setFormData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests, 1 Room',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    console.log('Searching with data:', formData);
    
  };

  return (
    <section className="h-[600px] bg-cover bg-no-repeat flex justify-center items-center bg-[url('/images/bgHero.jpeg')]">
      <div className="w-[95%] mx-auto ">
        <div className="relative z-10  text-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-8 text-white">
            Discover the <br /> World&apos;s Hidden Treasures
          </h1>
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] md:w-[80%] mx-auto">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-500 mb-1 text-start">
                  Where to?
                </label>
                <div className="flex items-center border border-gray-400 rounded-lg px-3 py-2">
                  <FaSearch className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Search destinations..."
                    className="outline-none w-full text-gray-700"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full md:w-1/4">
                  <label className="text-sm text-gray-500 mb-1 text-start">
                    Check-in
                  </label>
                  <div className="flex items-center border border-gray-400 rounded-lg px-3 py-2">
                    <FaCalendarAlt className="text-gray-400 mr-2" />
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="outline-none w-full text-gray-700"
                    />
                  </div>
                </div>

                {/* Check-out */}
                <div className="flex flex-col w-full md:w-1/4">
                  <label className="text-sm text-gray-500 mb-1 text-start">
                    Check-out
                  </label>
                  <div className="flex items-center border border-gray-400 rounded-lg px-3 py-2">
                    <FaCalendarAlt className="text-gray-400 mr-2" />
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="outline-none w-full text-gray-700"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="flex flex-col w-full md:w-1/4">
                  <label className="text-sm text-gray-500 mb-1 text-start">
                    Guests
                  </label>
                  <div className="flex items-center border border-gray-400 rounded-lg px-3 py-2">
                    <FaUser className="text-gray-400 mr-2" />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="outline-none w-full text-gray-700"
                    >
                      <option>2 Guests, 1 Room</option>
                      <option>1 Guest, 1 Room</option>
                      <option>4 Guests, 2 Rooms</option>
                      <option>6 Guests, 3 Rooms</option>
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex flex-col justify-end w-full md:w-1/4">
                  <label className="invisible mb-1">Search</label>
                  <button
                    type="button"
                    onClick={handleSearch}
                    className="bg-blue-800 text-white px-3 py-2 rounded-lg hover:bg-blue-900 flex items-center justify-center"
                  >
                    <FaSearch className="mr-2" /> Search Homes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default  HeroSection