import React from "react";

const UpperProducts = () => {
  return (
    <div className="flex bg-[#ffffff] flex-col">
      <div className="flex font-medium text-2xl my-7 justify-center items-center">
        BBQ MVPs
      </div>
      <div className="flex my-6">
        <div className="flex justify-center  mx-2 h-52 flex-1 flex-col">
          <div className="flex bg-green-100 text-lg flex-1 items-center justify-center">
            IMAGE HERE
          </div>
          <div className="flex items-center mt-1 h-10 justify-center">
            Steak,Chicken &amp; ribs
          </div>
        </div>
        <div className="flex flex-1 flex-col  justify-center  mx-2 h-52">
          <div className="flex bg-green-100 flex-1 items-center justify-center">
            IMAGE HERE
          </div>
          <div className="flex items-center mt-1 h-10 justify-center">
            Salads &amp; Sides
          </div>
        </div>
      </div>
      <div className="flex my-6 h-60">
        <div className="flex flex-1 flex-col  justify-center  mx-2 h-52">
          <div className="flex bg-green-100 flex-1 items-center justify-center">
            IMAGE HERE
          </div>
          <div className="flex items-center h-10 pt-3 justify-center">
            Burgers,Hotdogs &amp; Sausages
          </div>
        </div>
        <div className="flex flex-1 flex-col  justify-center  mx-2 h-52">
          <div className="flex bg-green-100 flex-1 items-center justify-center">
            IMAGE HERE
          </div>
          <div className="flex items-center mt-1 justify-center h-10">
            Shop all BBQ
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperProducts;
