"use client";
import React, { useEffect } from "react";
import Home from "./sections/Home";
import LogoTicker from "./components/LogoTicker";
import Top from "./sections/Top";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import About from "./sections/About";
import Contact from "./sections/Contact";
gsap.registerPlugin(ScrollTrigger);

const page = () => {
  useEffect(() => {
    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis();

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);
  }, []);
  return (
    <>
      <Home />
      <LogoTicker />
      <Top />
      <About />
      <Contact />
    </>
  );
};

export default page;
