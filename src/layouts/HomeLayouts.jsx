import React from "react";
import Navigation from "../partials/Navigation";
import { Outlet } from "react-router-dom";

function HomeLayouts() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default HomeLayouts;
