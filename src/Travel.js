import React from "react";

const Travel = props =>(
  <figure>
    <img src= {props.image}/>
    <figcaption>
      <blockquote>{props.Destination}
      </blockquote>
      <blockquote>{props.Country}</blockquote>
      <cite>{props.distance}</cite>
    </figcaption>
  </figure>
);

export default Travel;