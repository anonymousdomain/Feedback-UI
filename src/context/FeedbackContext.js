
import { async } from "q";
import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  useEffect(() => {
    fetchFeedback();
  });
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [editFeedback, setEditFeedback] = useState({
    itme: {},
    edit: false,
  });
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };
  const handleDelete = async(id) => {
    await fetch(`/feedback/${id}`,{
      method: "DELETE", })
    if (window.confirm("Are you Sure You Want To Delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = async (newFeedBack) => {
    const res = await fetch(`/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedBack),
    });

    const data = await res.json();
    setFeedback([data, ...feedback]);
  };
  const handleEdit = (item) => {
    setEditFeedback({
      item,
      edit: true,
    });
  };

  const updateFeedback = async(id, updateItem) => {

    const res=await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        'content-type':'application/json',
      },
      body:JSON.stringify(updateItem),
    })

    const data=await res.json()
    console.log(data);
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...data } : item
      )
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        isLoading,
        feedback,
        handleDelete,
        addFeedback,
        handleEdit,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
