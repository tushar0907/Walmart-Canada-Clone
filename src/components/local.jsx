import React from "react";
import MenuArea from "../Pages/home/MenuArea";
import Banner from "../Pages/home/Banner";
import TrendingItems from "../Pages/home/TrendingItems";
import ShopDepartment from "../Pages/home/ShopDepartment";
import OtherProducts from "../Pages/home/OtherProducts";
import Footer from "../Pages/home/Footer";
import BestSellers from "../Pages/home/BestSellers";
import Grocery from "../Pages/home/Grocery";
import RollbackItem from "../Pages/home/RollbackItem";
import PrimaryProducts from "../Pages/home/PrimaryProducts";

const local=() => {
  return (
    <div>
      <MenuArea />
      <Banner />
      <PrimaryProducts />
      <ShopDepartment />
      <Grocery />
      <OtherProducts />
      <BestSellers />
      <TrendingItems />
      <RollbackItem />
      <Footer />
    </div>
  );
};

export default local;
