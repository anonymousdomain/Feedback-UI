import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./Shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { handleDelete,editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button onClick={()=>editFeedback(item)} className="edit">
        <FaEdit color="purple"  />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
