import React, { useState } from 'react'

function FeedbackItem() {
    const [rating ,setRating]=useState(7)
  return (
    <div className='card'>
    <div className='num-display'>{rating}</div>
    <div>Lorem ipsum dolor sit amet consectetur.</div>
    </div>
  )
}

export default FeedbackItem