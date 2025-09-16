

import { Data } from "@/utils/static/chosse.Data";
import Image from "next/image";



const   WhyUs=() => {
  return (
    <section className="py-16 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#1D4ED8]">
        Why Choose Us
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12">
        Experience world-class comfort and unmatched <br /> hospitality — all in
        the heart of paradise.
      </p>

      {/* Feature Cards */}
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {Data.map((item) => (
          <div
            key={item.id}
            className="relative bg-[#1D4ED8] text-left rounded-2xl p-6 shadow-lg flex flex-col justify-between overflow-hidden"
          >
            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-2 z-10 relative">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-200 text-md mb-6 z-10 relative w-[80%]">
              {item.description}
            </p>

            {/* Button */}
            <button className="bg-white text-[#1D4ED8] font-medium rounded-full px-4 py-2 hover:bg-gray-100 transition w-fit z-10 relative">
              {item.buttonText}
            </button>

            {/* Background Image at bottom-right */}
            <div className="absolute -bottom-10 -right-9 w-40 h-40 opacity-90">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default  WhyUs