import React from "react";

const Banner=() => {
  return (
    <div className="flex flex-col h-96 justify-center items-center w-auto bg-blue-50 overflow-x-hidden">
      <div className="flex flex-1 w-80 mt-6 items-center justify-center">
        DISPLAY IMAGE HERE
      </div>
      <div className="flex flex-1 flex-col w-80 justify-center items-center">
        <div className="flex flex-1 font-bold text-xl">Sips of Summer</div>
        <div className="flex flex-1 font-light">
          Soft drinks at refreshingly low prices.
        </div>
        <div className="flex flex-1">
          <button className="border-2 border-black w-24 rounded-full h-12">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
