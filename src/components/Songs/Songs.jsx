import React,{useState} from "react";
import "./Songs.css";
import {useNavigate} from "react-router-dom"
import {GENRES_ROUTE} from '../../constants/routes';
import GenrePage from "../GenrePage/index";
import Body from "../Body/index"
const Songs = ({ genre_name, imageUrl }) => {
  const [click,setClick] =useState(false);
  //  imageUrl = "../../assets/"+imageUrl+".png";
  //  console.log(imageUrl)
  const navigate = useNavigate();
  const handleGenre = (click) => {
    console.log(click);
    setClick(!click);
  }
  if(click){
    return <Body/>
  }

  return (
    <div className="Genre-body " onClick={handleGenre}>
      <img src={imageUrl}  alt="genre-image" />
      <h1>{genre_name}</h1>
    </div>
  );
};

// export the component
export default Songs;
