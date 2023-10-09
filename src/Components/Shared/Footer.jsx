import React, { useEffect, useState } from "react";
import FooterBox from "../Box/FooterBox";

export default function Footer() {
  const [footerOption, setFooterOption] = useState([]);

  useEffect(() => {
    setFooterOption(["option1", "option1", "option1", "option1", "option1"]);
  }, []);

  return (
    <>
      <div className="p-4 bg-slate-900 rounded-sm">
        <div className="flex">
          <h1 className="text-3xl text-white font-bold lg:w-3/12">
            Naiem E-Commerce
          </h1>
        </div>
        <div className="lg:flex lg:justify-center lg:items-start py-10">
          <FooterBox options={footerOption} boxName={"Box name 1"} />
          <FooterBox options={footerOption} boxName={"Box name 2"} />
          <FooterBox options={footerOption} boxName={"Box name 3"} />
        </div>
      </div>
    </>
  );
}
