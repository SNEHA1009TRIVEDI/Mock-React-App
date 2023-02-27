// create a component to show the drop down option for genre
//
// Path: my-app/src/components/Genre/index.jsx
import React, { useState } from "react";
import "./Genre.css";
import icon from "../../assets/icon-grid.svg";
import Body from "../Body";
import GenreBollywood from '../../assets/genre-Bollywood.png';
import GenreCountry from '../../assets/genre-Country.png';
import GenrePop from '../../assets/genre-Pop.png';
import GenreRock from '../../assets/genre-Rock.png';
import GenrePage from "../GenrePage/index";


const Genre = ({ data }) => {
  // console.log("hello from genre");
  const [showGenre, setShowGenre] = useState(false);

  const handleGenre = () => {
    setShowGenre(!showGenre);
  };
  if (showGenre) {
    return <Body />;
  }
  const genres = [];

  data.forEach((song) => {
    if (!genres.includes(song.genre.name)) {
      genres.push(song.genre.name);
    }
  });
  //  console.log(genres);

  const songsByGenreList = {};
  genres.forEach((genre) => {
    songsByGenreList[genre] = [];
  });

  data.forEach((song) => {
    songsByGenreList[song.genre.name].push(song);
  });
  //  console.log(songsByGenreList);

  const genreImages = {
    Bollywood: GenreBollywood,
    Country: GenreCountry,
    Pop: GenrePop,
    Rock: GenreRock,
  };
  
  return (

    <>
       <div className="songs-by-genre">
      <div className="genre-header">
        <h2>genres</h2>
        <img src={icon} alt="icon-grid" onClick={handleGenre}/>
      </div>
      <div className="genre-content">
        {genres.map((genre) => (
          <GenrePage
            key={genre}
            genre={genre}
            songs={songsByGenreList[genre]}
            genreImage={genreImages[genre]}
          />
        ))}
      </div>
    </div>
    </>
  );
};

// // export the component
export default Genre;

// create a component to show the drop down option for artist
