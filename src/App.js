import React, { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from './data/FeedbackData'
const App = () => {
    const [feedback,setFeedback]=useState(FeedbackData)
const handleDelete=(id)=>{
    setFeedback(
        feedback.filter((item)=>item.id!==id)
    )
}
  return (
    <>
      <Header />
      <div className="container">
          <FeedbackStats feedback={feedback}/>
        <FeedbackList  feedback={feedback} onDelete={handleDelete}/>
      </div>
    </>
  );
};

export default App;
