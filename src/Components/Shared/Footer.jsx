import React, { useEffect, useState } from "react";
import FooterBox from "../Box/FooterBox";

export default function Footer() {
  const [footerCetagoryOption, setFooterCetagoryOption] = useState([]);
  const [footerQuickLinkOption, setFooterQuickLinkOption] = useState([]);
  const [footerPricingOption, setFooterPricingOption] = useState([]);

  useEffect(() => {
    setFooterCetagoryOption([
      "Cloth",
      "Electronics",
      "Shoes",
      "Houses",
      "Accesoreses",
    ]);
    setFooterQuickLinkOption([
      "FaceBook",
      "Instragram",
      "Linkedin",
      "Twitter",
      "Youtube",
    ]);
    setFooterPricingOption(["One time", "weekly", "Monthly", "Yearly", ,]);
  }, []);

  return (
    <>
      <div className="p-4 bg-slate-900 rounded-sm">
        <div className="flex">
          <h1 className="text-3xl text-white font-bold lg:w-3/12">ShopNest</h1>
        </div>
        <div className="lg:flex lg:justify-center lg:items-start py-10">
          <FooterBox options={footerCetagoryOption} boxName={"Cetagory"} />
          <FooterBox options={footerPricingOption} boxName={"Box name 2"} />
          <FooterBox options={footerQuickLinkOption} boxName={"Box name 3"} />
        </div>
        <div className="p-5 text-yellow-50">
          <div className="text-center py-5">
            <h1 className="font-bold">+8801920679575</h1>
            <h1 className="font-bold">naiemhosen430@gmail.com</h1>
            <p className="p-5">
              ShopNest is your one-stop destination for all your online shopping
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
