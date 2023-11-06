import React from "react";
import "../css/Card.css";

const Card = ({ url, name, imdb, overview }) => {
  return (
    <>
      <div className="container">
        <div className="card">
          <img className="card-image" src={url} alt="movir-icon" />
          <div className="text-container">
            <h4>
              <b>Name : {name}</b>
            </h4>
            <h4>
              <b>IMDB : {imdb}</b>
            </h4>
            <h4>
              <b>OVERVIEW : {overview}</b>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
