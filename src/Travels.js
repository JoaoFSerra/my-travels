import React from "react"



const travels = [
  {
  
      destination:"Desert",
    country: "Marroco",
    distance:"3235km",
    image:"https://cdn.pixabay.com/photo/2016/09/08/13/58/desert-1654439__340.jpg"
      
  },
  {
    destination: "Glaciar",
    country: "Icelanda",
    distance:"1333km",
    image:
      "https://cdn.pixabay.com/photo/2015/12/08/00/54/glacier-1082163__340.jpg"
  },
  {
    destination: "City",
    country: "Dubai",
    distance:"1700km",
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/15/03/buildings-1839726__340.jpg"
  },
  {
    destination:
      "Countryside",
    country: "Romania",
    distance:"100km",
    image:
      "https://cdn.pixabay.com/photo/2019/09/08/19/51/harburg-4461752__340.jpg"
  }
];

const Travels = () => (
<div>
        {travels.map(travel => (
          <div> <img src={travel.image} alt={travel.destination} /><blockquote>{travel.destination}</blockquote><blockquote>{travel.country}</blockquote><blockquote> {travel.distance}</blockquote>
</div>
        
        ))}
    </div>
);

export default Travels;
