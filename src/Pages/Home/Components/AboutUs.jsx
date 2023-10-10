import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <div className="lg:flex" data-aos="fade-right">
        <div className="lg:w-8/12 w-12/12 text-center lg:text-right lg:p-10 lg:m-10 mr-0 pr-0">
          <h1 className="text-2xl lg:text-right font-bold">About Us</h1>
          <p className="text-lg lg:text-right">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ea
            esse itaque, odio vero mollitia atque voluptas repellendus
            consequuntur deserunt tempore, doloremque placeat voluptatem commodi
            nesciunt tempora illum maiores quam!
          </p>
          <button className="bg-slate-400 block py-2 px-4 my-10 rounded-md text-yellow-950 lg:mr-0 w-5/12 m-auto lg:w-3/12">
            Learn More
          </button>
        </div>

        <div className="lg:w-4/12 lg:p-10 lg:m-10 ms-2 ps-2">
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQnqxDbMfxoLLjiTKU19Cw-bBltxbCcqzxVA&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
