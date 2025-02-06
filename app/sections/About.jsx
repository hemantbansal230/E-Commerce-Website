import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 min-h-screen ">
      <div className="container">
        <div>
          <div className="div">
            <h1 className="text-6xl font-bold">ABOUT US</h1>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="left w-[55%] h-[700px] rounded-lg  flex justify-center items-center">
            <p className="text-4xl font-semibold text-justify pr-10">
              Our team is a group of passionate professionals with expertise in
              e-commerce, technology, and customer satisfaction. We are
              dedicated to building innovative solutions that make online
              shopping more convenient for everyone. From developers to
              designers, we are united by a common goal: improving the online
              shopping experience. At Quick Cart, our mission is simple: make
              shopping faster, easier, and more enjoyable.
            </p>
          </div>
          <div className="right w-[45%] h-[700px] bg-red-300 rounded-lg overflow-hidden shadow-lg">
            <Image src="/Images/shop.jpg" alt="shopping" width={100} height={100} className="w-full shadow-lg h-full grayscale" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
