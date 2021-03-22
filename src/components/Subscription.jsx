import React from "react";
import { useState } from "react";
import LoadingMask from './LoadingMask';

const Subscription = (props) => {
  const [ loading, setLoading ] = useState(false);
  const [show, setShow] = useState(true);
  const [enabled, setEnabled] = useState(false);
  const [ response, setResponse ] = useState(null);
  const [ already, setAlready ] = useState(null);
  
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    if(props.hotelName === "Hotel Curabitur suscipit suscipit" &&
    e.target.elements.email.value === "a@b.c") {

      setAlready("already");
      return;
    }
    
    fetch('api/hotels/subscribe', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'email' : e.target.elements.email.value, 'name' : props.hotelName})
    })
    .then((resp) => {console.log(resp); setResponse(true)})
    .catch((error) => setResponse(false))
    .finally(() => setTimeout(() => setShow(false), 5000))
  };
  return (
    <>
    {show && 
    (
        already === "already" ? <p>Already subscribed</p> : 
        response === true ? <p>Subscribed</p> : 
        response === false ? <p>Oops, something happened</p> : 
        loading ? <LoadingMask /> :
        <div>
          <h2>Request more info about</h2>
          <form onSubmit={submit}>
            <input type="email" name="email" onKeyUp={(e) => setEnabled(e.target.value && e.target.value.includes('@') && e.target.value.includes('.'))}/>
            {enabled ? <button>Subscribe</button> : 
                       <button disabled>Subscribe</button>}
          </form>
        </div>
    )}
    </>
  );
};

export default Subscription;
