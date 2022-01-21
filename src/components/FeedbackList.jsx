import React from "react";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./Shared/Spinner";
const FeedbackList = () => {
    const {feedback,isLodaing} =useContext(FeedbackContext)
  if (!isLodaing&&(!feedback || feedback.length === 0)) {
    return <p>Feedback Yet</p>;
  }

  return isLodaing?(<Spinner/>):(
    <div>
    <AnimatePresence>
      {feedback.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FeedbackItem
            item={item}
            key={item.id}
          />
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
  )
 
      }
export default FeedbackList;
