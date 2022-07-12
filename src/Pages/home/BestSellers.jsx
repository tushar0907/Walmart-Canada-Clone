import React from "react";

const BestSellers=() => {
  return <div className="flex flex-col">
    <div className="flex items-center justify-center text-xl font-bold my-3"><p>Shopping tips from our Editors</p></div>
    <div className="flex flex-col">
      <div className="flex w-full mx-3 my-5 justify-center ">
        <div className="flex flex-col flex-1 justify-center">
          <img src="https://i5.walmartimages.com/dfw/8822aef6-211b/k2-_12745a89-7dc0-4eb3-8eb1-47571774a9ce.v1.png" width="166" alt="" />
          <p className="flex justify-center w-44"> Back-to-school ideas</p>
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <img src="https://i5.walmartimages.com/dfw/8822aef6-cd88/k2-_ae400a6f-0684-4189-9285-f41380230132.v1.png" width="166" alt="" />
          <p className="flex w-44 mr-auto justify-center">Summer camp checklist</p>
        </div>
      </div>
      <div className="flex w-full mx-3 my-5 justify-center">
        <div className="flex flex-col flex-1 justify-center">
          <img src="https://i5.walmartimages.com/dfw/8822aef6-67b8/k2-_b0ad48df-2bfe-4887-baca-28a116458b68.v1.png" width="166" alt="" />
          <p className="flex w-44 justify-center">  2022's best laptops</p>
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <img src="https://i5.walmartimages.com/dfw/8822aef6-c0ab/k2-_00b9ce34-df97-47b7-8c52-884da18b43c3.v1.png" width="166" alt="" />
          <p className="flex w-44 mr-auto justify-center">  How to camp with dogs</p>
        </div>
      </div>
    </div>
  </div>;
};

export default BestSellers;
