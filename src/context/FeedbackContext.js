import { createContext, useState, useEffect } from "react";
const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading]=useState(true)
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  //fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(
      `/feedback?_sorted=id&_order=desc`
    );
    const data = await response.json();
    setFeedback(data)
    setIsLoading(false)
  };
  //add feedback 
  const addFeedback =async (newFeedback) => {
    const res=await fetch(`/feedback`,{
      method:'POST',
      headers:{
        'content-Type':'application/json',
      },
      body:JSON.stringify(newFeedback)
    })
    const data=res.json();
    setFeedback([data, ...feedback]);
  };

  //delete feedback
  const handleDelete =async (id) => {
    await fetch(`/feedback/${id}`,{method:'DELETE'})
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
  const updateFeedbackItem = async(id, updItem) => {

    // await fetch(`/feedback/${id}`,{method:'PATCH'})
    const res=await fetch(`/feedback/${id}`,{
      method:'Put',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(updItem)
    })
    const data=res.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        handleDelete,
        addFeedback,
        editFeedback,
        updateFeedbackItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
