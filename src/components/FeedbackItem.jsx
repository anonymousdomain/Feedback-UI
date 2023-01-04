import Card from "./shared/Card"
import {FaTimes} from 'react-icons/fa'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
function FeedbackItem({item}) {
const {handleDelete}=useContext(FeedbackContext)
  return (
    <Card reverse={true}>
    <div className='num-display'>{item.rating}</div>
    <button onClick={()=>handleDelete(item.id)} className="close">
        <FaTimes color="purple"/>
    </button>
    <div>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem