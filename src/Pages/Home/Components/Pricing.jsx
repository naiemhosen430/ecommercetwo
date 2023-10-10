"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PricingBox from "../../../Components/Box/PricingBox";

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <div
        className="lg:m-10 mx-5 rounded-xl lg:px-10 px-5 lg:flex lg:items-center bg-slate-900"
        data-aos="flip-up"
      >
        <div className="lg:w-4/12 p-10 px-0">
          <h1 className="text-xl text-white font-bold" data-aos="fade-up">
            Make your price with a sweetable condition
          </h1>
          <p className="text-slate-500" data-aos="fade-down">
            Pricing is a critical aspect of any business strategy, reflecting
            not only the monetary value of products or services but also the
            perceived worth. Striking the right balance is essential. Offering
            competitive prices can attract customers and foster loyalty, but
            pricing too low may impact profitability. On the other hand, setting
            pricing, and customer expectations. Businesses often employ various
          </p>
        </div>

        <div className="lg:w-8/12 px-4">
          <PricingBox />
        </div>
      </div>
    </>
  );
}
