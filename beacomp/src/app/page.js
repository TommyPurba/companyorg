"use client";

import React from "react";
import { Navbar } from "../components/navigation/Navbar";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-full py-10">
        <h2 className="text-red-500 text-2xl font-medium ">lorem tips</h2>
        <h1 className="md:text-5xl text-3xl text-cyan-700 font-semibold py-5">
          loremsdasdad
        </h1>
        <div className="text-xl"></div>
      </div>
    </div>
  );
}
