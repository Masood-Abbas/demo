"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "../app/style.css"
import { useState } from "react";
import { ReviewData } from "@/utils/static/ReviewData";



const ReviewSection=()=> {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateEdges = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <div className="w-[95%] mx-auto py-12">
      {/* Section Title */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            What Our <br /> Guests Are Saying
          </h2>
        </div>
        <p className="text-gray-500 max-w-md">
          See why travelers trust us — real reviews of comfort, convenience, and
          unforgettable stays.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={true} 
        spaceBetween={30}
        slidesPerView={1}
        className="!pb-10"
        onSwiper={(swiper) => {
            updateEdges(swiper);
            swiper.on("slideChange", () => updateEdges(swiper)); 
          }}
           breakpoints={{
            768: {
              slidesPerView: 1.5,
            },
      }}
      >
        {ReviewData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-gray-600/5 text-black rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden p-2">
              {/* Left side - Testimonial */}
              <div className="flex-1 p-6 flex flex-col justify-center md:w-1/2">
                <div className="flex flex-col  gap-3 mb-4">
                  <div className="w-15 h-15 relative">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <div className="flex ">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <h5 className="font-semibold mb-2 text-lg">
                  Flawless from start to finish!
                </h5>
                <p className="text-gray-600 text-base font-normal">
                  {item.text}
                </p>
              </div>

              {/* Right side - Room Image */}
              <div className="relative md:w-1/2 h-[300px] md:h-auto">
                <Image
                  src={item.roomImage}
                  alt="room"
                  fill
                  className="object-cover rounded-2xl"
                />
                <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-md">
                  See Room
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default  ReviewSection