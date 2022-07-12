import React from "react";

const TrendingItems=() => {
  return (
    <div className="flex flex-col">
      <div className="flex bg-banner bg-contain h-32"></div>
      <p className="font-bold text-xl my-4">Top Items on Walmart.ca</p>
      <div className="flex w-full my-5 overflow-scroll">
        <div className="flex mr-3 mx-3 flex-grow-0 flex-shrink-0 flex-basis-auto w-44 flex-col overflow-x-auto">
          <div className="flex h-32 justify-center items-center bg-red-50">Image</div>
          <div className="flex justify-center">Name</div>
          <div className="flex justify-center">Type</div>
          <div className="flex justify-center">Price</div>
          <div className="flex justify-center">Mode</div>
          <button className="flex text-white bg-[#0096FF] justify-center items-center rounded-lg w-40">Add to cart</button>
        </div>
        <div className="flex mr-3 mx-3 flex-grow-0 flex-shrink-0 flex-basis-auto w-44 flex-col overflow-x-auto">
          <div className="flex h-32 justify-center items-center bg-red-50">Image</div>
          <div className="flex justify-center">Name</div>
          <div className="flex justify-center">Type</div>
          <div className="flex justify-center">Price</div>
          <div className="flex justify-center">Mode</div>
          <button className="flex text-white bg-[#0096FF] justify-center items-center rounded-lg w-40">Add to cart</button>
        </div>
        <div className="flex mr-3 mx-3 flex-grow-0 flex-shrink-0 flex-basis-auto w-44 flex-col overflow-x-auto">
          <div className="flex h-32 justify-center items-center bg-red-50">Image</div>
          <div className="flex justify-center">Name</div>
          <div className="flex justify-center">Type</div>
          <div className="flex justify-center">Price</div>
          <div className="flex justify-center">Mode</div>
          <button className="flex bg-[#0096FF] justify-center items-center rounded-lg w-40">Add to cart</button>
        </div>
        <div className="flex mr-3 mx-3 flex-grow-0 flex-shrink-0 flex-basis-auto w-44 flex-col overflow-x-auto">
          <div className="flex h-32 justify-center items-center bg-red-50">Image</div>
          <div className="flex justify-center">Name</div>
          <div className="flex justify-center">Type</div>
          <div className="flex justify-center">Price</div>
          <div className="flex justify-center">Mode</div>
          <button className="flex  bg-[#0096FF] justify-center items-center rounded-lg w-40">Add to cart</button>
        </div>
      </div>
    </div>
  )
};

export default TrendingItems;
