import React, { useContext, useEffect, useState } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const { addFeedback, editFeedback, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (editFeedback.edit) {
      setBtnDisabled(false);
      setText(editFeedback.item.text);
      setRating(editFeedback.item.rating);
    }
  }, [editFeedback]);
  const handleChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("please write your review with more than 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedBack = {
        text,
        rating,
      };
      if (editFeedback.edit) {
        updateFeedback(editFeedback.item.id, newFeedBack);
      } else {
        addFeedback(newFeedBack);
      }
    }
    setText("");
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us </h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
