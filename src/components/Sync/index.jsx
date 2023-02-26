import React from 'react';
import Header from '../Header';
import {useNavigate} from "react-router-dom"
import {HOME_ROUTE} from '../../constants/routes';
import './Sync.css';
const Sync = () => {
    const navigate = useNavigate();
    const handleSync = () => {
        navigate(`${HOME_ROUTE}`);
    }


    return (
        <>
        <Header/>
        <div className='body-padding'>
        <h1 >:((</h1>
        <h2 className="text"> seems a bit empty in here...</h2>

        <button className='button' onClick={handleSync}>Sync</button>
        </div>
        </>
      
        
    );
    }

// export the component
export default Sync;

