import React from "react";
import Hero from "./Components/Hero";
import TopItem from "./Components/TopItem";
import Pricing from "./Components/Pricing";
import Support from "./Components/Support";
import AboutUs from "./Components/AboutUs";
import OurPartner from "./Components/OurPartner";

export default function Home() {
  return (
    <>
      <Hero />
      <TopItem />
      <Pricing />
      <Support />
      <AboutUs />
      <OurPartner />
    </>
  );
}
