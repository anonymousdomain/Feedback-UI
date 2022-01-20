import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFfeedback = (newFeedback) => {
    newFeedback.id=uuidv4()
    setFeedback([newFeedback,...feedback])
  };
  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFfeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} onDelete={handleDelete} />
      </div>
    </>
  );
};

export default App;
