import React, { useState, useEffect } from "react";
import "./GenrePage.css";
import makeRequest from "../../utils/makeRequest";
import Card from "../Card/index";
import icon2 from "../../assets/icon-grid.svg";
// import GenrePage from "../../pages/GenrePage/index";
const GenrePage = (props) => {
const { genre, songs, genreImage} = props;
console.log(genre);
  return (
    <>
      <div className="songs-genre">
      <div className="genre-details">
        <img src={props.genreImage} alt={props.genre}  />
        <button className="genre-button"> {props.genre}</button>
      </div>
      <div className="songs-genre-content">
        {props.songs.map((song, index) => (
          <Card key={index} data={song} index={index} />
        ))}
      </div>
      
    </div>
    </>
  );
};

// export the component
export default GenrePage;
