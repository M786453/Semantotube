import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import AI_IMAGE from "../../assets/ai.png";
import "./hero.css";
const Hero = () => {
  return (
    <div className="section hero__section">
      <div className="text__container">
        <h1>
          <AiFillYoutube /> Semanto<span>Tube</span>
        </h1>
        <p>
          "SemantoTube makes it easy to find the information you need in YouTube
          video transcripts, with advanced semantic search capabilities."
        </p>
        <div className="btn__container">
          <button className="btn btn__primary">Get Started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="img__container">
        <img src={AI_IMAGE} alt="AI Image" />
      </div>
    </div>
  );
};

export default Hero;
