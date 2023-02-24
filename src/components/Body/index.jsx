import React ,{useState ,useEffect} from 'react';
import './Body.css';
import makeRequest from '../../utils/makeRequest';
const Body = () => {
  const [ allRecordData, setAllRecordData ] = useState(null);

  useEffect(() => {
    makeRequest("GET", "http://localhost:8080/api/records")
    .then((res) => {
        // console.log(res);
        setAllRecordData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
//   console.log("_____________________________");
//   console.log(allRecordData);
    return (
        
         <div className='body'>
            <div>
            <h1>all songs</h1>
            <span>image</span>
            </div>
            <div>
            <div>
            <h1>all songs lists</h1>
        </div>
            </div>
         </div>
        
    );
    }

// export the component
export default Body;

