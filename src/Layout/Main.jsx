import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../Components/Shared/Menu";
import Footer from "../Components/Shared/Footer";

export default function Main() {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
}
