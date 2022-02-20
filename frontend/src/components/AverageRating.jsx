import axios from "axios";
import React, {useState, useEffect} from "react";

const AverageRating = (props) => {
  const [ratingsSource, setRatingsSource] = useState('')

  return (
  <div>
    {props.average && "Average Rating:", props.average }
  </div> 
  )
};

export default AverageRating;
