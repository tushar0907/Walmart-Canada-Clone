import React from "react";

const BestSellers=() => {
  return <div className="flex flex-col">
    <div className="flex items-center justify-center text-xl font-bold my-3"><p>Shopping tips from our Editors</p></div>
    <div className="flex w-full justify-center items-center">
      <div className="flex justify-center">
        <div className="flex flex-col md:w-full">
          <div className="flex w-full mx-3 my-5 justify-center">
            <div className="flex bg-wal-1 w-52 h-52 md:h-72 md:w-96 bg-contain bg-no-repeat flex-col justify-center">
              <p className="flex justify-center md:w-72 text-white font-medium"> Back-to-school ideas</p>
            </div>
            <div className="flex flex-col ml-2 bg-wal-2 w-52 h-52 md:h-72 md:w-96 bg-contain bg-no-repeat justify-center">
              <p className="flex md:w-72 mr-auto justify-center text-white font-medium">Summer camp checklist</p>
            </div>
          </div>
          <div className="flex w-full mx-3 my-5 justify-center">
            <div className="flex flex-col bg-wal-3 w-52 h-52 md:h-72 md:w-96 bg-contain bg-no-repeat justify-center">
              <p className="flex md:w-72 justify-center text-white font-medium">  2022's best laptops</p>
            </div>
            <div className="flex flex-col bg-wal-4 w-52 ml-2 h-52 md:h-72 md:w-96 bg-contain bg-no-repeat justify-center">
              <p className="flex md:w-72 mr-auto justify-center text-white font-medium">  How to camp with dogs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default BestSellers;
