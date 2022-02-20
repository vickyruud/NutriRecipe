import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './newRatings.css'
import axios from 'axios'

const NewRatings = (props) => {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const submitRating = (rating) => {
    axios.post("/ratings", rating)
      .then(resp => {
        console.log(resp.data);
        setRating(rating);
    })
  }

  const changeRating = (value) => {
    const rating = {
      user_id: props.user.id,
      recipe_id: props.list.id,
      rating: value
    }
    submitRating(rating);
  }

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
              onClick={() => changeRating(ratingValue)}
              
                
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