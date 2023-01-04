import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 6,
      text: "John Doe",
    },
  ]);
  const handleDelete = (id) => {
    if (window.confirm("Are you Sure You Want To Delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedBack) => {
    newFeedBack.id = uuidv4();
    setFeedback([newFeedBack, ...feedback])
  }
  return (
    <FeedbackContext.Provider value={{ feedback ,handleDelete,addFeedback}}>
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;