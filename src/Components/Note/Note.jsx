import btn_delete from '../../assets/btn_delete.svg'
import checkbox from '../../assets/checkbox.svg'
import checkbox_active from '../../assets/checkbox_active.svg'
import './Note.css'
import { useState } from 'react'

export default function Note({note, setNotes}){
    const [thisNote, setThisNote] = useState(note) 
    return (
        <div className="note">
            <div className="note__todo">
                <div className="note__checkbox">
                    {thisNote.isChecked && <img src={checkbox_active} alt="" onClick={()=>(setThisNote(prev=>{
                        return {
                            ...prev, 
                            isChecked: false
                            }}))}/>}
                    {!thisNote.isChecked && <img src={checkbox} alt="" onClick={()=>(setThisNote(prev=>{
                        return {
                            ...prev, 
                            isChecked: true
                            }}))}/>}
                </div>
                <div className={thisNote.isChecked ? "note__todo-title active" : "note__todo-title"}>{thisNote.text}</div>
            </div>
            <button 
            className="note__delete" 
            >
                <img src={btn_delete} alt="" />
            </button>
        </div>
    )
}