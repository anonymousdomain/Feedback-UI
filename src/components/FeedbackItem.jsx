import Card from "./shared/Card"
import {FaEdit, FaTimes} from 'react-icons/fa'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
function FeedbackItem({item}) {
const {handleDelete ,handleEdit}=useContext(FeedbackContext)
  return (
    <Card reverse={true}>
    <div className='num-display'>{item.rating}</div>
    <button onClick={()=>handleDelete(item.id)} className="close">
        <FaTimes color="purple"/>
    </button>
    <button onClick={()=>handleEdit(item)} className="edit">
      <FaEdit color="purple"/>
    </button>
    <div>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem