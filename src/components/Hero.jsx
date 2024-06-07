import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto">
      <div className="flex flex-col gap-4">
        <p>IT's TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Fit<span className="text-blue-400 font-medium">Effiecient </span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby believe in my self that I can do exercise and
        <span className="text-blue-400 font-medium"> fit and healthy</span> and
        flexible and
        <span className="text-blue-400 font-medium">get calm and glowing</span>
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      ></Button>
    </div>
  );
}
