import React from "react";
import Footer from "../components/Footer";
import CalltoActionSection2 from "../components/homeComponents/CalltoActionSection2";

import Header from "./../components/Header";

const PlaceOrderScreen = () => {
  window.scrollTo(0, 0);


  return (
  <>
      <Header />
      
   <CalltoActionSection2/>
   <Footer/>
   </>
  );
};

export default PlaceOrderScreen;
