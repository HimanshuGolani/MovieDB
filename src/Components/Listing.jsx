import React from "react";
import "../css/Listing.css";
import Card from "./Card";

const img_url = "https://image.tmdb.org/t/p/original";

const Listing = ({ data }) => {
  if (data.length === 0) {
    return (
      <h1
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        The movies are not present
      </h1>
    );
  }

  return (
    <>
      {data.length === 0}
      <div className="w">
        {data.map((item, id) => (
          <Card
            key={id}
            name={item.original_title}
            url={`${img_url}/${item.poster_path}`}
            imdb={item.popularity}
            overview={item.overview}
          />
        ))}
        )
      </div>
    </>
  );
};

export default Listing;
