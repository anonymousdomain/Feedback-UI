import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";
const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        handleDelete,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
