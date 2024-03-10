import React from "react";
import Equipments from "../components/Equipments";

export default function Accessories() {
  return (
    <div className="container mx-auto mt-8 overflow-y-auto h-[600px]">
      <h1 className="text-3xl font-bold mb-4">Accessories</h1>
        {/* Accessories will be inserted here */}
        <Equipments/>
    </div>
  );
}