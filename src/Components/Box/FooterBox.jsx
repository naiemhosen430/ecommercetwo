"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FooterBox({ options, boxName }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  const [option, setOptions] = useState([]);

  useEffect(() => {
    setOptions(options);
  }, [options]);
  return (
    <>
      <div
        className="lg:w-3/12 w-10/12 m-auto text-center lg:text-left"
        data-aos="flip-up"
      >
        <ul>
          <h4 className="text-lg text-white font-bold p-1 py-2">{boxName}</h4>
          {option.map((item) => (
            <Link
              className="text-slate-400 block hover:text-white p-1"
              key={item}
              to={`/${item}`}
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
