import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import { useEffect } from "react";

export default function PartnerBox() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <Swiper
      className="m-10 my-20"
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => {}}
      onSwiper={(swiper) => {}}
    >
      <SwiperSlide
        data-aos="fade-right"
        className="text-black font-bold rounded-xl cursor-pointer bg-slate-400 py-10 px-15 text-center"
      >
        <h1 className="text-2xl">Bkash</h1>
      </SwiperSlide>
      <SwiperSlide
        data-aos="fade-right"
        className="text-black font-bold rounded-xl cursor-pointer bg-slate-400 py-10 px-15 text-center"
      >
        <h1 className="text-2xl">Minister</h1>
      </SwiperSlide>
      <SwiperSlide
        data-aos="fade-right"
        className="text-black font-bold rounded-xl cursor-pointer bg-slate-400 py-10 px-15 text-center"
      >
        <h1 className="text-2xl">Rocket</h1>
      </SwiperSlide>
      <SwiperSlide
        data-aos="fade-right"
        className="text-black font-bold rounded-xl cursor-pointer bg-slate-400 py-10 px-15 text-center"
      >
        <h1 className="text-2xl">Walton</h1>
      </SwiperSlide>
      <SwiperSlide
        data-aos="fade-right"
        className="text-black font-bold rounded-xl cursor-pointer bg-slate-400 py-10 px-15 text-center"
      >
        <h1 className="text-2xl">Daraz</h1>
      </SwiperSlide>
      <SwiperSlide
        data-aos="fade-right"
        className="text-black font-bold rounded-xl cursor-pointer bg-slate-400 py-10 px-15 text-center"
      >
        <h1 className="text-2xl">Ebay</h1>
      </SwiperSlide>
      <SwiperSlide
        data-aos="fade-right"
        className="text-black font-bold rounded-xl cursor-pointer bg-slate-400 py-10 px-15 text-center"
      >
        <h1 className="text-2xl">Upay</h1>
      </SwiperSlide>
      <SwiperSlide
        data-aos="fade-right"
        className="text-black font-bold rounded-xl cursor-pointer bg-slate-400 py-10 px-15 text-center"
      >
        <h1 className="text-2xl">Samsung</h1>
      </SwiperSlide>
    </Swiper>
  );
}
