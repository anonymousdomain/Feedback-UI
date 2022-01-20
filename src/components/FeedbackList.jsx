import React from 'react';
import FeedbackItem from './FeedbackItem';
import {motion,AnimatePresence}from 'framer-motion'
const FeedbackList = ({feedback,onDelete}) => {




    return (
        <div>
            <AnimatePresence>
            {feedback.map((item)=>(
                <motion.div key={item.id}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}>
                <FeedbackItem item={item} key={item.id} handleDelete={(id)=>onDelete(id)}/>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )
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
