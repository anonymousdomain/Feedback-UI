import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedBackStat from "./components/FeedBackStat";
import Header from "./components/Header";
import FeedbackData from './data/FeedbackData'
function App() {

  const [feedback,setFeedback]=useState(FeedbackData)
const handleDelete=(id)=>{
  if(window.confirm('Are you Sure You Want To Delete?')){
    setFeedback(feedback.filter(item=>item.id!==id))
  }
}
  return (
    <>
      <Header />
      <FeedBackStat feedback={feedback}/>
      <FeedbackList feedback={feedback} handleDelete={handleDelete}/>
    </>
  );
}

export default App;
