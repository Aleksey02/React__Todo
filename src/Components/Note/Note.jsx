import { useState } from 'react'
import Btn_delete from '../Btn_delete/Btn_delete'
import './Note.css'

export default function Note({note, setNotes}){
    function changeIsChecked(isChecked){
        setThisNote(prev=>{
            return {
                ...prev, 
                isChecked
                }})
    }

    function deleteNote(){
        setNotes((prev)=>prev.filter(note=>note.id!==thisNote.id))
    }

    const [thisNote, setThisNote] = useState(note) 
    return (
        <div className="note">
                <div className='note__title'>{thisNote.text}</div>
            <Btn_delete 
            className="note__delete" 
            onClick={deleteNote}
            isNote={true}
            />
        </div>
    )
}