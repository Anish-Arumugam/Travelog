import React from "react";
import Navbar from "./Components/Helper/Navbar";
import Hero from "./Components/Helper/Hero";
import TopDestination from "./Components/TopDestination";
import Hotel from "./Components/Hotel";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";
  


export default function Home() {
  return (
  <>
  <Navbar />
  <Hero />
  <TopDestination />
  <Hotel />
  <Reviews />
  <Contact />
  <Footer />
  </>
  )
}  
