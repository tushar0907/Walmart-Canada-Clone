import React from "react";

const ShopDepartment=() => {
  return (
    <div className=" bg-[#ffffff] flex-col">
      <div className="flex justify-center my-8 text-2xl font-bold">
        Shop Departments
      </div>
      <div className="flex justify-center items-center">
        <div className="flex h-32 my-6 mx-2 w-24 flex-col">
          <div className="flex justify-center items-center flex-1 h-32 rounded-full bg-green-50">
            Image Here
          </div>
          <div className="flex h-4 items-center font-medium text-sm text-blue-600 justify-center my-3">
            Grocery
          </div>
        </div>
        <div className="flex">
          <div className="flex h-32 mx-2 w-24 flex-col">
            <div className="flex justify-center items-center flex-1 h-32 rounded-full bg-green-50">
              Image Here
            </div>
            <div className="flex h-4 items-center font-medium text-sm text-blue-600  justify-center my-3">
              Outdoor Living
            </div>{" "}

          </div>
        </div>
        <div className="flex">
          <div className="flex h-32 mx-2 w-24 flex-col">
            <div className="flex justify-center items-center flex-1 h-32 rounded-full bg-green-50">
              Image Here
            </div>
            <div className="flex h-4 items-center font-medium text-sm text-blue-600  justify-center my-3">
              Electronics
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex h-32 my-6 mx-2 w-24 flex-col">
          <div className="flex justify-center items-center flex-1 h-32 rounded-full bg-green-50">
            Image Here
          </div>
          <div className="flex h-4 items-center font-medium text-sm text-blue-600  justify-center my-3">
            Home
          </div>
        </div>
        <div className="flex">
          <div className="flex h-32 mx-2 w-24 flex-col">
            <div className="flex justify-center items-center flex-1 h-32 rounded-full bg-green-50">
              Image Here
            </div>
            <div className="flex h-4 items-center font-medium text-sm text-blue-600  justify-center my-3">
              Furniture
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex h-32 mx-2 w-24 flex-col">
            <div className="flex justify-center items-center flex-1 h-32 rounded-full bg-green-50">
              Image Here
            </div>
            <div className="flex h-4 items-center font-medium text-sm text-blue-600  justify-center my-3">
              Toys
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex h-32 my-6 mx-2 w-24 flex-col">
          <div className="flex justify-center items-center flex-1 h-32 rounded-full bg-green-50">
            Image Here
          </div>
          <div className="flex h-4 items-center font-medium text-sm text-blue-600  justify-center my-3">
            Sports
          </div>
        </div>
        <div className="flex">
          <div className="flex h-32 mx-2 w-24 flex-col">
            <div className="flex justify-center items-center flex-1 h-32 rounded-full bg-green-50">
              Image Here
            </div>
            <div className="flex h-4 items-center font-medium text-sm text-blue-600  justify-center my-3">
              Appliances
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex h-32 mx-2 w-24 flex-col">
            <div className="flex justify-center items-center flex-1 h-32 rounded-full bg-green-50">
              Image Here
            </div>
            <div className="flex h-4 items-center font-medium text-sm text-blue-600  justify-center my-3">
              Pets
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDepartment;
