import React, { useState } from "react";
import Button from "./Button";
import Card from "./shared/Card";

const FeedbackForm = () => {
    const [text,setText]=useState()
  const handleChange = (e) => {
    setText(e.target.value)
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us </h2>
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="write a review"
            value={text}
          />
          {/* <button type="submit">send</button> */}
          <Button type='submit' >send</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
