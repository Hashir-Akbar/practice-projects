"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { Star } from "lucide-react";
import { BsStarFill } from "react-icons/bs";
import { Testimonial } from "@/types/types";

export default function TestimonialSlider({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <>
      <Swiper
        spaceBetween={90}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active !bg-black",
          bulletClass: "swiper-pagination-bullet !bg-green-600",
        }}
        autoHeight={true}
        wrapperClass="!items-stretch"
        modules={[Pagination]}
        className="mySwiper !py-16  "
        // slidesPerView={3}
        
        slidesPerGroup={1}
        grabCursor={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
      >
        {testimonials.map((items, key) => {
          return (
            <SwiperSlide  className="h-full" key={key}>
              <div className="max-w-96 h-full mx-auto px-8 py-12 text-center bg-white flex flex-col items-center gap-3 justify-center">
                <div>
                  <Image
                    src={items.imgSrc}
                    width={250}
                    height={250}
                    className="rounded-full"
                    alt={items.clientName}
                  />
                </div>
                <h3 className="font-bold text-[#535353] font-poppins">
                  {items.clientName}
                </h3>
                <span className="italic text-[#9F9F9F] text-sm">
                  {items.clientTitle}
                </span>
                <div className="flex gap-2 text-sm">
                  {[...Array(items.stars)].map((_, index) => (
                    <BsStarFill key={index} color="#feb513" />
                  ))}
                </div>
                <p className="text-base text-[#787878] mt-auto">
                  {items.clientTestimonial}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
