import React from "react";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
const FeedbackList = () => {
    const {feedback} =useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return <p>Feedback Yet</p>;
  }
  return (
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
  );
};

//   return (
//       <div>
//           {feedback.map((item)=>(
//               <FeedbackItem item={item} key={item.id} handleDelete={(id)=>onDelete(id)}/>
//           ))}
//       </div>
//   )
// };

export default FeedbackList;
