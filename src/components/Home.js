import React from "react";
import { Link } from "react-router-dom";

import GooglePlaces from "./GooglePlaces";

function Home() {
  return (
    <div>
      <Link to={`/weather`}>
        <div className="home">
          <h1 className="text">
            CHECK OUT THE WATHER FOR SELECTED CITY <br /> AND FIND A LOVELY
            PLACE TO HAVE A MEAL
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default Home;
