import React from "react";

import Footer from "../../Components/Footer";
import MainContainer from "./../../Components/LandingPage/MainContainer";

import { data, images } from "../../Components/StaticData";

function LandingPage() {
  return (
    <>
      <MainContainer data={data.landingPage} logo={images.logo} />
      <Footer />
    </>
  );
}

export default LandingPage;
