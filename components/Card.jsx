import Image from "next/image";
import { FaStar, FaHeart } from "react-icons/fa";

const Card = ({ hotel, btntext }) => {
  const {
    name,
    img,
    location,
    price,
    oldPrice,
    reviews,
    roomsLeft,
    features = [],
  } = hotel;

  return (
    <div className="bg-gray-100 rounded-4xl shadow-md overflow-hidden p-2 text-left h-auto">
      {/* Image */}
      <div className="relative w-full h-80">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover rounded-[10%]"
        />
      </div>

      {/* Content */}
      <div className="py-3 px-2">
        {/* Title + Reviews */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold md:text-xl text-black">{name}</h3>

          {reviews && (
            <div className="flex items-center text-sm text-gray-500">
              <FaStar className="text-yellow-500 mr-1" />
              <span>({reviews} reviews)</span>
            </div>
          )}
        </div>

        {/* Location */}
        {location && <p className="text-gray-500 mt-1">{location}</p>}

        {/* Price */}
        {price && (
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center">
              <h2 className="text-2xl text-black font-bold">${price}</h2>
              <p className="text-gray-400 text-md ml-2">
                ${oldPrice}
                <span className="text-gray-500"> /night</span>
              </p>
            </div>
            <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
              <span className="w-2 h-2 bg-green-600 rounded-full inline-block"></span>
              {roomsLeft} rooms left
            </div>
          </div>
        )}

        {/* Features */}
        {features.length > 0 && (
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm border-t border-gray-300 pt-5">
            {features.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-md ${item.bg}`}
                >
                  <item.icon className={`${item.color} text-lg`} />
                </div>
                <span className="text-gray-600">{item.name}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Buttons */}
        <div className="flex items-center justify-between mt-5">
          <button className="px-4 py-2 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition w-[70%]">
            {btntext}
          </button>
          <div className="h-8 w-8 flex items-center justify-center bg-gray-400 rounded-full shadow-md">
            <FaHeart className="cursor-pointer text-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
