import React, { useState, useEffect } from "react";
import "./GenrePage.css";
import makeRequest from "../../utils/makeRequest";
import Card from "../Card/index";
import icon2 from "../../assets/icon-grid.svg";
// import GenrePage from "../../pages/GenrePage/index";
const GenrePage = (props) => {
// console.log(props.songs[0].artist);

let buttonList = document.querySelectorAll("button");
let genre;
buttonList.forEach(function(i){
  i.addEventListener("click", function(e){
    genre = e.target.innerHTML;
    console.log(genre);
  })

})

// props.song.filter((song) => {
//   if (song.genre.name === genre) {
//     return song;
//   }
// });
// console.log(props.song);
const handleGenre = () => {

       return ( props.songs.map((song, index) => (
          <Card key={index} data={song} index={index} />
          // console.log("hii from genrePage")
        )))
      
// console.log(genre);
};
console.log("--------------------");
console.log(props.song);
  return (
    <>
      <div className="songs-genre">
      <div className="genre-details">
        <img src={props.genreImage} alt={props.genre} onClick={handleGenre}/>
        {/* <ButtonGenre genre={props.genre} /> */}
        <button > {props.genre}</button>
      </div>
      
    </div>
    </>
  );
};

// export the component
export default GenrePage;
