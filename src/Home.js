import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="123356"
          title="The Lean Startup: How Constant Innovation Creates Radically Succesfull Bussiness Paperback"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="123656"
          title="Sonos Move - Battery-powered Smart Speaker, Wi-Fi and Bluetooth with Alexa built-in - Black​​​​​​​"
          price={371.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81lIVPzBtRL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="129556"
          title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory..."
          price={231.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SL1301_.jpg"
        />
        <Product
          id="189056"
          title="PlayStation 4 Slim 1TB Console"
          price={280.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71PGvPXpk5L._AC_SL1500_.jpg"
        />
        <Product
          id="0974356"
          title="Apple iPhone 11 Pro Max, 512GB, Space Gray - Fully Unlocked (Renewed)"
          price={1079.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41wDuEW9iZL._AC_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="19043356"
          title='AOC CU34G2X 34" Curved Frameless Immersive Gaming Monitor, UltraWide QHD 3440x1440'
          price={579.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61-ke7Qp%2BxL._AC_SL1000_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
