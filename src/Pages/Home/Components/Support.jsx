import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Support() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <div className="lg:flex" data-aos="fade-left">
        <div className="lg:w-4/12 w-12/12 lg:p-10 lg:m-10 mr-0 pr-0">
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4tYYlWqMfzru-e4xD1OkpykkVudEOKPZuqg&usqp=CAU"
            alt=""
          />
        </div>

        <div className="lg:w-8/12 p-10 text-center lg:text-left m-12/12 ms-2 ps-2">
          <h1 className="text-2xl font-bold">Our support is 24/7</h1>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ea
            esse itaque, odio vero mollitia atque voluptas repellendus
            consequuntur deserunt tempore, doloremque placeat voluptatem commodi
            nesciunt tempora illum maiores quam!
          </p>
          <button className="bg-slate-400 m-auto py-2 px-4 my-10 rounded-md text-yellow-950 block w-5/12 lg:w-3/12">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
