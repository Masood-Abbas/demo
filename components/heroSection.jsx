// components/Hero.jsx
import { FaSearch, FaCalendarAlt, FaUser } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="h-[600px]  bg-cover bg-no-repeat flex justify-center items-center bg-[url('/images/bgHero.jpeg')]">
    <div className="w-[95%] mx-auto">
      {/* Content */}
      <div className="relative z-10 text-center text-black ">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Discover the <br /> World&apos;s Hidden Treasures
        </h1>

        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-lg p-6 w-[80%] mx-auto">
          <div className="flex flex-col item-center w-full gap-4">
            {/* Destination */}
            <div className="flex flex-col  ">
              <label className="text-sm text-gray-500 mb-1 text-start">Where to?</label>
              <div className="flex items-center border border-gray-400 rounded-lg px-3 py-2">
                <FaSearch className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="outline-none w-full text-gray-700 "
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Check-in */}
              <div className="flex flex-col w-full md:w-1/4">
                <label className="text-sm text-gray-500 mb-1 text-start">Check-in</label>
                <div className="flex items-center border border-gray-400  rounded-lg px-3 py-2">
                  <FaCalendarAlt className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="07/07/2024"
                    className="outline-none w-full text-gray-700"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div className="flex flex-col w-full md:w-1/4">
                <label className="text-sm text-gray-500 mb-1 text-start">Check-out</label>
                <div className="flex items-center border border-gray-400  rounded-lg px-3 py-2">
                  <FaCalendarAlt className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="07/07/2024"
                    className="outline-none w-full text-gray-700"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="flex flex-col w-full md:w-1/4">
                <label className="text-sm text-gray-500 mb-1 text-start">Guests</label>
                <div className="flex items-center border border-gray-400  rounded-lg px-3 py-2">
                  <FaUser className="text-gray-400 mr-2" />
                  <select className="outline-none w-full text-gray-700">
                    <option>2 Guests, 1 Room</option>
                    <option>1 Guest, 1 Room</option>
                    <option>4 Guests, 2 Rooms</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <div className="flex flex-col justify-end w-full md:w-1/4">
                <label className="invisible mb-1">Search</label>
                <button className="bg-blue-800 text-white px-3 py-2 rounded-lg hover:bg-blue-900 flex items-center justify-center">
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
