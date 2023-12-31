import React, { useEffect } from "react";
import Header from "../../Components/Box/Header";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <Header pagename={"pricing"} />
      <div className="text-center">
        <div
          data-aos="fade-right"
          className="text-white inline-block w-/12 lg:w-3/12 m-10 rounded-lg cursor-pointer bg-slate-800 py-10 px-15 text-center"
        >
          <h1 className="text-2xl">500$</h1>
          <p className="text-slate-500 py-2">Use Monthly free delivery.</p>
          <p className="text-blue-500 font-bold p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sequi.
            Accusamus consectetur aliquam autem quae facilis dolorem soluta
            iusto officia rem pariatur, doloribus optio in atque corrupti eaque
            corporis nisi?
          </p>
          <Link
            href="/"
            className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
          >
            Enroll
          </Link>
        </div>

        <div
          data-aos="fade-right"
          className="text-white inline-block w-/12 lg:w-3/12 m-10 rounded-lg cursor-pointer bg-slate-800 py-10 px-15 text-center"
        >
          <h1 className="text-2xl">1000$</h1>
          <p className="text-slate-500 py-2">Use three months free delivery.</p>
          <p className="text-blue-500 font-bold p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sequi.
            Accusamus consectetur aliquam autem quae facilis dolorem soluta
            iusto officia rem pariatur, doloribus optio in atque corrupti eaque
            corporis nisi?
          </p>
          <Link
            href="/"
            className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
          >
            Enroll
          </Link>
        </div>

        <div
          data-aos="fade-right"
          className="text-white inline-block w-/12 lg:w-3/12 m-10 rounded-lg cursor-pointer bg-slate-800 py-10 px-15 text-center"
        >
          <h1 className="text-2xl">600$</h1>
          <p className="text-slate-500 py-2">Use 6 months free delivery.</p>
          <p className="text-blue-500 font-bold p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sequi.
            Accusamus consectetur aliquam autem quae facilis dolorem soluta
            iusto officia rem pariatur, doloribus optio in atque corrupti eaque
            corporis nisi?
          </p>
          <Link
            href="/"
            className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
          >
            Enroll
          </Link>
        </div>

        <div
          data-aos="fade-right"
          className="text-white inline-block w-/12 lg:w-3/12 m-10 rounded-lg cursor-pointer bg-slate-800 py-10 px-15 text-center"
        >
          <h1 className="text-2xl">1000$</h1>
          <p className="text-slate-500 py-2">Use one year free delivery.</p>
          <p className="text-blue-500 font-bold p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sequi.
            Accusamus consectetur aliquam autem quae facilis dolorem soluta
            iusto officia rem pariatur, doloribus optio in atque corrupti eaque
            corporis nisi?
          </p>
          <Link
            href="/"
            className="bg-slate-500 hover:text-black hover:bg-slate-300 p-2 px-6 rounded-xl inline-block font-bold"
          >
            Enroll
          </Link>
        </div>
      </div>
    </>
  );
}
