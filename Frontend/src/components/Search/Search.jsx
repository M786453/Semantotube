import React from "react";
import "./search.css";
import SEARCH_IMAGE from "../../assets/search.svg";
const Search = () => {
  return (
    <div className="section search__section" id="search">
      <h2>Search</h2>
      <p>
        "Find exactly what you're looking for in YouTube videos with Semantube's
        advanced search."
      </p>
      <div className="searcher__portion">
        <div className="form__portion">
          <form>
            <input type="text" placeholder="Enter the url " />
            <button className="btn btn__primary">Search</button>
          </form>
        </div>
        <div className="player__portion">
          <img src={SEARCH_IMAGE} alt="" />
        </div>
      </div>
      <div className="transcripts__section">
        <div className="card trans">
          <h3>12:03</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius
            vel ex temporibus cupiditate at, id quas accusamus molestias
            laboriosam non corrupti? Nostrum illum nam nulla asperiores, odio
            quam est?
          </p>
        </div>
        <div className="card trans">
          <h3>12:03</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius
            vel ex temporibus cupiditate at, id quas accusamus molestias
            laboriosam non corrupti? Nostrum illum nam nulla asperiores, odio
            quam est?
          </p>
        </div>
        <div className="card trans">
          <h3>12:03</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius
            vel ex temporibus cupiditate at, id quas accusamus molestias
            laboriosam non corrupti? Nostrum illum nam nulla asperiores, odio
            quam est?
          </p>
        </div>
        <div className="card trans">
          <h3>12:03</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius
            vel ex temporibus cupiditate at, id quas accusamus molestias
            laboriosam non corrupti? Nostrum illum nam nulla asperiores, odio
            quam est?
          </p>
        </div>
        <div className="card trans">
          <h3>12:03</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eius
            vel ex temporibus cupiditate at, id quas accusamus molestias
            laboriosam non corrupti? Nostrum illum nam nulla asperiores, odio
            quam est?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Search;
