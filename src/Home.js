import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB.CB428684220_.jpg"
        alt=""
      />

      <Product
        id="123356"
        title="The Lean Startup: How Constant Innovation Creates"
        price={11.96}
        rating={5}
        image="https://images-eu.ssl-images-amazon/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
      />
    </div>
  );
}

export default Home;
