import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const addFfeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };
  return (
   <FeedbackProvider>
      <Router>
      <Header />

      <div className="container">
        <Routes>
          <Route 
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFfeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} onDelete={handleDelete}  />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink/>
      </div>
    </Router>
   </FeedbackProvider>
  );
};

export default App;
