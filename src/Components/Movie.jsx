import { React, useEffect, useState } from "react";
import axios from "axios";
import "../css/navbar.css";
import logo from "../assets/logo.jpg";
import "../css/main.css";
import Listing from "./Listing.jsx";
import Loading from "./Loading.jsx";

const Movie = () => {
  const apikey = "17814d0f4bfbf39c9feba62ffc0008dd";
  const url = "https://api.themoviedb.org/3";
  const upcoming = "upcoming";
  const nowPlaying = "now_playing";
  const popular = "popular";
  const topRated = "top_rated";
  const img_url = "https://image.tmdb.org/t/p/original";

  const [movie, setMovie] = useState([]);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchMovie, setSearchMovie] = useState([]);
  useEffect(() => {
    const fetchTopRated = async () => {
      setLoading(true);
      try {
        const {
          data: { results },
        } = await axios.get(`${url}/movie/${topRated}?api_key=${apikey}`);
        setLoading(false);
        setMovie(results);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchTopRated();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();

    setLoading(true);

    const originalString = search;
    const stringWithPlus = originalString.replace(/ /g, "+");

    try {
      const {
        data: { results },
      } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${stringWithPlus}&api_key=17814d0f4bfbf39c9feba62ffc0008dd`
      );
      setLoading(false);
      setSearchMovie(results);
      console.log("The movie swarched");
      console.log(searchMovie);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <div className="rapper">
        <div className="navbar">
          <div className="l-d">
            <div className="img-container d-f-a">
              <img src={logo} className="logo-img" alt="logo image" />
            </div>
            <div className="w-name">
              <h3>The Movie DB</h3>
            </div>
          </div>
          <div className="search-box-container">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search any movie here.."
            />
            <button onClick={handleSearch} className="button-24">
              Search
            </button>
          </div>
        </div>
        {searchMovie.length === 0 ? (
          <Listing data={movie} />
        ) : (
          <Listing data={searchMovie} />
        )}
      </div>
    </>
  );
};

export default Movie;
