import React from "react";
import MenuArea from "../Pages/home/MenuArea";
import Banner from "../Pages/home/Banner";
import TrendingItems from "../Pages/home/TrendingItems";
import ShopDepartment from "../Pages/home/ShopDepartment";
import OtherServices from "../Pages/home/OtherServices";
import Footer from "../Pages/home/Footer";
import BestSellers from "../Pages/home/BestSellers";
import Grocery from "../Pages/home/Grocery";
import RollbackItem from "../Pages/home/RollbackItem";
import PrimaryProducts from "../Pages/home/PrimaryProducts";

const local = () => {
  return (
    <div>
      <MenuArea />
      <Banner />
      <PrimaryProducts />
      <ShopDepartment />
      <Grocery />
      <OtherServices />
      <BestSellers />
      <TrendingItems />
      <RollbackItem />
      <Footer />
    </div>
  );
};

export default local;
