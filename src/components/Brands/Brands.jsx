import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";
const Brands = () => {
  return (
    <>
      <div className="container py-14">
        <div className="flex flex-wrap justify-center  lg:justify-between gap-6  ">
          <motion.img
            variants={SlideLeft(0.2)}
            initial="initial"
            whileInView={"animate"}
            src="brand/1.png"
            alt="brand"
            className="w-[110px] md:w-[200px] "
          />
          <motion.img
            variants={SlideLeft(0.4)}
            initial="initial"
            whileInView={"animate"}
            src="brand/2.png"
            alt="brand"
            className="w-[110px] md:w-[200px]"
          />
          <motion.img
            variants={SlideLeft(0.6)}
            initial="initial"
            whileInView={"animate"}
            src="brand/3.png"
            alt="brand"
            className="w-[110px] md:w-[200px]"
          />
          <motion.img
            variants={SlideLeft(0.8)}
            initial="initial"
            whileInView={"animate"}
            src="brand/4.png"
            alt="brand"
            className="w-[110px] md:w-[200px]"
          />
          <motion.img
            variants={SlideLeft(1.0)}
            initial="initial"
            whileInView={"animate"}
            src="brand/5.png"
            alt="brand"
            className="w-[110px] md:w-[200px]"
          />
        </div>
      </div>
    </>
  );
};

export default Brands;
