"use client";
import React from "react";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
              repeatType: 'loop',
            }}
          >
            <Image
              className="logo-ticker-image"
              src={acmeLogo}
              alt="acme-logo"
            />
            <Image
              className="logo-ticker-image"
              src={quantumLogo}
              alt="quantum-logo"
            />
            <Image
              className="logo-ticker-image"
              src={echoLogo}
              alt="echo-logo"
            />
            <Image
              className="logo-ticker-image"
              src={celestialLogo}
              alt="celestial-logo"
            />
            <Image
              className="logo-ticker-image"
              src={pulseLogo}
              alt="pulse-logo"
            />
            <Image
              className="logo-ticker-image"
              src={apexLogo}
              alt="apex-logo"
            />

            {/* set2 */}

            <Image
              className="logo-ticker-image"
              src={acmeLogo}
              alt="acme-logo"
            />
            <Image
              className="logo-ticker-image"
              src={quantumLogo}
              alt="quantum-logo"
            />
            <Image
              className="logo-ticker-image"
              src={echoLogo}
              alt="echo-logo"
            />
            <Image
              className="logo-ticker-image"
              src={celestialLogo}
              alt="celestial-logo"
            />
            <Image
              className="logo-ticker-image"
              src={pulseLogo}
              alt="pulse-logo"
            />
            <Image
              className="logo-ticker-image"
              src={apexLogo}
              alt="apex-logo"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
