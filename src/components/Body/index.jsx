import React, { useState, useEffect } from "react";
import "./Body.css";
import makeRequest from "../../utils/makeRequest";
import Card from "../Card/index";
import icon from "../../assets/icon-genre.svg";
import Genre from "../Genre/index";
const Body = () => {
  const [allRecordData, setAllRecordData] = useState([]);
  const [showGenre, setShowGenre] = useState(false);


  useEffect(() => {
    makeRequest("GET", "http://localhost:8080/api/records")
      .then((res) => {
        // console.log(res);
        setAllRecordData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);
  const handleGenre = () => {
    setShowGenre(!showGenre); 

  };
  if(showGenre){
    //songs by genre
    return <Genre data={allRecordData}/> 
    
  }
  

  return (
    <div className="body">
      <div className="body-header">
        <h1 className="all-songs">all songs</h1>
        <div>
          <img
            src={icon}
            alt="icon-genre"
            className="icon"
            onClick={handleGenre}
          />
        </div>
      </div>
      
        <div className="card-content">
          {allRecordData ? (
            allRecordData.map((post, idx) => <Card key={idx} data={post} cnt={idx} index={idx}/>)
          ) : (
            <div className="loading-screen">Loading!!!</div>
          )}
        
      </div>
    </div>
  );
};

// export the component
export default Body;
