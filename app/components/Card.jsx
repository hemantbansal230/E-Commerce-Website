import Image from "next/image";
import React from "react";

const Card = ({ num, name, src }) => {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <h1 className="z-2 top-3 text-white  left-5 text-3xl font-bold absolute">#{num}</h1>
      <h1 className="z-2 top-11 text-white left-5 text-6xl font-bold absolute">{name}</h1>
      <Image
        className="w-full h-full object-cover"
        src={src}
        alt={name}
        height={400}
        width={300}
      />
    </div>
  );
};

export default Card;
