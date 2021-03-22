import React from "react";
import { useState } from "react";
import Subscription from "./Subscription";

const Hotel = (props) => {
  const [showMore, setShowMore] = useState(false);
  const [showSubs, setShowSubs] = useState(false);
  return (<div>
    <h1>{props.hotel.name}</h1>
      {showMore && <div>
        <p>Stars: {props.hotel.stars}</p>
        <p>{props.hotel.city}</p>
        {!showSubs && <button onClick={() => setShowSubs(true)}>Request more info</button>}
        { showSubs && <Subscription hotelName={props.hotel.name}/>}
        </div>}
      <button onClick={() => setShowMore(!showMore)}>Show {showMore ? "less" : "more"}</button>
  </div>);
};

export default Hotel;