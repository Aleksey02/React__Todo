import { useState } from 'react'
import Btn_add from '../Btn_add/Btn_add'
import './InputAddNote.css'

export default function InputAddNote({onClick, placeholder}){
    function addNote(prev){
        
            if(inputText.trim().length!==0){
                setInputText('')

                return [...prev, {
                id: new Date(),
                text: inputText,
                }]
            }else{
                setInputText('')
                return prev
            }
    }


    const [inputText, setInputText] = useState('')
    return (
        <div className="add-note">
            <input 
            type="text" 
            placeholder={`Enter ${placeholder} here...`} 
            className="add-note__input" 
            value={inputText}
            onChange={(event)=>setInputText(event.target.value)}
            onKeyDown={event=>event.key=='Enter' && onClick(addNote)}
            />
            <Btn_add
            className="add-note__btn"
            onClick={()=>onClick(addNote)}
            />
        </div>
    )
}

