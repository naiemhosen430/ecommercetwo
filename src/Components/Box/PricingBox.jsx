import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import { useEffect } from "react";

export default function PricingBox() {
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
        className="text-white rounded-xl cursor-pointer bg-slate-800 py-10 px-15 text-center"
      >
        <h1 className="text-2xl">500$</h1>
        <p className="text-slate-500 py-2">Use Monthly free delivery.</p>
        <Link
          href="/"
          className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
        >
          Enroll
        </Link>
      </SwiperSlide>

      <SwiperSlide
        data-aos="fade-right"
        className="text-white rounded-xl cursor-pointer bg-slate-800 py-10 px-15 text-center"
      >
        <h1 className="text-2xl">1000$</h1>
        <p className="text-slate-500 py-2">Use three months free delivery.</p>
        <Link
          href="/"
          className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
        >
          Enroll
        </Link>
      </SwiperSlide>

      <SwiperSlide
        data-aos="fade-right"
        className="text-white rounded-xl cursor-pointer bg-slate-800 py-10 px-15 text-center"
      >
        <h1 className="text-2xl">600$</h1>
        <p className="text-slate-500 py-2">Use 6 months free delivery.</p>
        <Link
          href="/"
          className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
        >
          Enroll
        </Link>
      </SwiperSlide>

      <SwiperSlide
        data-aos="fade-right"
        className="text-white rounded-xl cursor-pointer bg-slate-800 py-10 px-15 text-center"
      >
        <h1 className="text-2xl">1000$</h1>
        <p className="text-slate-500 py-2">Use one year free delivery.</p>
        <Link
          href="/"
          className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
        >
          Enroll
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
