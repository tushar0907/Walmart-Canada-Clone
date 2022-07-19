import React from "react";


const OtherProducts=() => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="flex bg-banner bg-cover bg-no-repeat h-32 "></div>
      <p className="flex w-full justify-center font-medium text-3xl my-5">Shop Essentails</p>
      <div className="flex w-full items-center justify-center my-5 overflow-scroll">
        <div className="flex mr-3 ml-72 md:mx-3 flex-grow-0 flex-shrink-0 flex-basis-auto w-44 flex-col overflow-x-auto md:w-64 md:h-72 md:ml-16">
          <div className="flex h-32 justify-center items-center bg-red-50 md:h-52">Image</div>
          <div className="flex justify-center">Type</div>
          <div className="flex justify-center">Name</div>
          <div className="flex justify-center">Ratings</div>
          <div className="flex justify-center">Price</div>
        </div>
        <div className="flex mr-3 flex-grow-0 flex-shrink-0 flex-basis-auto w-44 flex-col overflow-x-auto md:w-64 md:h-72">
          <div className="flex h-32 justify-center items-center bg-red-50 md:h-52">Image</div>
          <div className="flex justify-center">Type</div>
          <div className="flex justify-center">Name</div>
          <div className="flex justify-center">Ratings</div>
          <div className="flex justify-center">Price</div>
        </div>
        <div className="flex mr-3 flex-grow-0 flex-shrink-0 flex-basis-auto w-44 flex-col overflow-x-auto md:w-64 md:h-72">
          <div className="flex h-32 justify-center items-center bg-red-50 md:h-52">Image</div>
          <div className="flex justify-center">Type</div>
          <div className="flex justify-center">Name</div>
          <div className="flex justify-center">Ratings</div>
          <div className="flex justify-center">Price</div>
        </div>
        <div className="flex mr-3 flex-grow-0 flex-shrink-0 flex-basis-auto w-44 flex-col overflow-x-auto md:w-64 md:h-72">
          <div className="flex h-32 justify-center items-center bg-red-50 md:h-52">Image</div>
          <div className="flex justify-center">Type</div>
          <div className="flex justify-center">Name</div>
          <div className="flex justify-center">Ratings</div>
          <div className="flex justify-center">Price</div>
        </div>
      </div>
    </div>
  );

};

export default OtherProducts;
