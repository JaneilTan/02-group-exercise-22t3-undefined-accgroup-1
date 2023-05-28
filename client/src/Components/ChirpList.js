import "./ChirpList.css";
import React, { useEffect, useState } from "react";

function ChirpList() {
  // State for the list of chirps
  const [chirps, setChirps] = useState([]);

  // Create effect for running our async call so that its not infintiely run
  useEffect(
    () => {
      // Async function for loading the chirps
      async function loadChirps() {
        // Make the fetch request to the chirps endpoint
        const response = await fetch("http://localhost:5001/chirps"); 
        // Convert the response into json
        const json = await response.json(); 
        // Update the state
        setChirps(json);
      }

      // Call the async load function
      loadChirps();
    },
    // Empty dependencies so it doesn't loop
    []
  );

  return (
    <>
      {chirps.map((chirp, index) => (
        <div key={index}>
          <img src={chirp.avatar} alt={chirp.username} />
          <p>{chirp.username}</p>
          <p>{chirp.text}</p>
          <p>{chirp.date}</p> 
        </div>
      ))}
    </>
  );
}

export default ChirpList;
