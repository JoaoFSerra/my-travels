import React from "react";

const Travel = ({image,destination,country,distance}) =>(
  <figure>
    <img src= {image} alt={destination}/>
    <figcaption>
      <blockquote>{destination}
      </blockquote>
      <blockquote>{country}</blockquote>
      <cite>{distance}</cite>
    </figcaption>
  </figure>
);

export default Travel;