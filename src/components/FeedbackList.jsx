import React from 'react';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({feedback,onDelete}) => {
  
  return (
      <div>
          {feedback.map((item)=>(
              <FeedbackItem item={item} key={item.id} handleDelete={(id)=>onDelete(id)}/>
          ))}
      </div>
  )
};

export default FeedbackList;
