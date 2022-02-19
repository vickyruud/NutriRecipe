import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './newRatings.css'

const NewRatings = () => {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);


  return (
    <div>
      {[...Array(5)].map((heart, i) => {
        const ratingValue = i + 1
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              
                
            /> 
            <FaStar
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              className='heart'
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} size={25} />
          </label>);
      })}      
    </div>
  )
}

export default NewRatings