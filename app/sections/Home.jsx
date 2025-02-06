"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const Home = () => {
    const secRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: secRef.current,
        offset: ["start end", "end start"],
    })
    const translateY = useTransform(scrollYProgress, [0, 1], [200, -400]);

  return (
    <div ref={secRef} className="bg-[linear-gradient(to_top,_#85A947,_#fff)] overflow-x-clip">
      <div className="container">
        <div className="page h-[92vh] relative w-full flex">
            <div className="img absolute top-[500px] -left-[100px]">
                <motion.img style={{translateY}} src="/Images/fill1.png" alt="left-img" width={300} height={100} />
            </div>

            <div className="img absolute top-[300px] -right-[100px]">
                <motion.img style={{translateY}} src="/Images/fill2.png" alt="right-img" width={300} height={100} />
            </div>


          <div className="left w-[55%] flex justify-center items-center">
            <h1 className="font-semibold bg-[linear-gradient(to_top,_#3E7B27,#123524)] text-transparent bg-clip-text text-[5vw] leading-[75px]">
              Quick Cart is a fast and reliable eCommerce platform offering a
              wide range of products
            </h1>
          </div>
          <div className="right w-[45%] flex justify-center items-center">
            <Image src="/Images/cart.png" alt="main-img" priority width={550} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
