import React, { useEffect } from "react";
import "./Card.css";
// import image from '../../assets/genre-bollywood.png'
import heart from "../../assets/heart-red.svg";
import heart_grey from "../../assets/heart-gray.svg";
import makeRequest from "../../utils/makeRequest";
const Card = ({ data, cnt }) => {
  const { name, imageUrl, artist, genre } = data;
  const [isLiked, setIsLiked] = React.useState(false);
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    makeRequest("GET", `http://localhost:8080/api/records/${data.id}/likes`)
      .then((res) => {
        setIsLiked(res.data.data.like);
        setCount(res.data.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let image;
  

  const likeHandler = () => {
    if (isLiked) {
      makeRequest("PATCH", `http://localhost:8080/api/records/${data.id}/likes`,count,false)
        .then((res) => {
          setIsLiked(!isLiked);
          setCount(count - 1);
          // console.log("get request is made");
          // console.log(data.id);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      makeRequest(
        "PATCH",
        `http://localhost:8080/api/records/${data.id}/likes`,
        count,
        true
      )
        .then((res) => {
          setIsLiked(!isLiked);
          setCount(count + 1);
          //  console.log("patch request is made");
          // // console.log(data.id);
        })
        .catch((err) => {
          console.log(err);
        });

      // setIsLiked(!isLiked);
      // setCount(count + 1);
    }
  };
  if (!isLiked) {
    image = heart_grey;
  }
  if (isLiked) {
    image = heart;
  }
  const color = cnt % 2 === 0 ? 'dark' : 'light';

  return (
    <div className={`card-body-${color}`}>
      <div className="image">
        <img className="song-image" src={imageUrl} alt="here is song image" />
      </div>
      <div className="lower-section">
        <div className="song-left">
          <h1 className="song-name">{name}</h1>
          <p>{artist.name}</p>
        </div>
        <div className="song-right">
          <img
            src={image}
            alt="this is heart image"
            className="heart"
            // onClick={likeHandler}
          />
          <p className="count" onClick={likeHandler}>{count}</p>
        </div>
      </div>
    </div>
  );
};

// export the component
export default Card;
