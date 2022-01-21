import { createContext, useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  useEffect(()=>{

  },[])
  
  //add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //delete feedback
  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  //edit feedback
  const editFeedback = (item) => {
    setEditFeedback({
      item,
      edit: true,
    });
  };

  //update feedaack item
  const updateFeedbackItem = (id, updItem) => {
setFeedback(feedback.map((item)=>item.id===id?{...item,...updItem}:item))
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        handleDelete,
        addFeedback,
        editFeedback,
       updateFeedbackItem
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
