import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";
const App = () => {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
};

export default App;
