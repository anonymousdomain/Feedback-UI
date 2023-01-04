import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from ".//../data/FeedbackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const [editFeedback, setEditFeedback] = useState({
    itme: {},
    edit: false,
  });
  const handleDelete = (id) => {
    if (window.confirm("Are you Sure You Want To Delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedBack) => {
    newFeedBack.id = uuidv4();
    setFeedback([newFeedBack, ...feedback]);
  };
  const handleEdit = (item) => {
    setEditFeedback({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, updateItem) => {
    setFeedback(feedback.map((item)=>item.id===id?{...item,...updateItem}:item))
  };
  return (
    <FeedbackContext.Provider
      value={{ feedback, handleDelete, addFeedback, handleEdit, editFeedback ,updateFeedback}}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
