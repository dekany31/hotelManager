import React from "react";
import { useState, useEffect } from "react";
import LoadingMask from './components/LoadingMask';
import Hotel from './components/Hotel';
import './App.css';

const App = () => {

  const [ isLoadingHotels, setIsLoadingHotels ] = useState(false);
  const [hotels, setHotels] = useState([]);
  
  useEffect(() => {
    let mounted = true;
    setIsLoadingHotels(true);
    
    fetch('api/hotels')
    .then(response => response.json())
    .then(data => {if(mounted) setHotels(data);})
    .catch(err => setHotels(null))
    .finally(() => setIsLoadingHotels(false))
    return () => mounted = false;
  },[]);

  return (
    <div className="App">
      <h1>Hotels</h1>
      {isLoadingHotels && <LoadingMask />}
    {hotels ? hotels.map((x, ix) => <Hotel key={ix.toString()} hotel={x}/>) : <p>Oops, something happened</p>}
    </div>
  )
}

export default App
