import Image from "next/image";
import React from "react";
import Card from "../components/Card";

const Top = () => {
  return (
    <section className="py-8 min-h-screen">
      <div className="container">
        <div>
          <div className="head py-10">
            <h1 className="font-bold tracking-tighter text-9xl">
              TOP SELLING🔥
            </h1>
          </div>
        </div>
        <div className="flex">
          <div className="left w-1/2 h mr-5">
            <div className="rounded-lg overflow-hidden h-[600px] relative">
              <Card name="APPLE" num={1} src="/Images/apple.jpg"/>
            </div>
          </div>
          <div className="right w-1/2">
            <div className="small-cards flex items-center flex-wrap gap-5">
                <div className="w-[220px] h-[290px] rounded-lg bg-green-300">
                    <Card name="SHAKES" num={2} src="/Images/shake.jpg"/>
                </div>
                <div className="w-[220px] h-[290px] rounded-lg bg-green-300">
                    <Card name="PINES" num={3} src="/Images/pine.jpg"/>
                </div>
                <div className="w-[220px] h-[290px] rounded-lg bg-green-300">
                    <Card name="BERRY" num={4} src="/Images/berry.jpg"/>
                </div>
                <div className="w-[220px] h-[290px] rounded-lg bg-green-300">
                    <Card name="MANGO" num={5} src="/Images/mango.jpg"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
