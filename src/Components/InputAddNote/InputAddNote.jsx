import './InputAddNote.css'
import btn_add from '../../assets/btn_add.svg'
import { useState } from 'react'

export default function InputAddNote({onClick}){
    const [inputText, setInputText] = useState('')
    return (
        <div className="add-note">
            <input 
            type="text" 
            placeholder="Enter task here..." 
            className="add-note__input" 
            value={inputText}
            onChange={(event)=>setInputText(event.target.value)}
            />
            <button 
            className="add-note__btn"
            onClick={()=>onClick((prev)=>{
                if(inputText.trim().length!==0){
                    setInputText('')

                    return [...prev, {
                    id: new Date(),
                    text: inputText,
                    isChecked: false
            }]}})}
            >
                <img src={btn_add} alt="" />
            </button>
        </div>
    )
}

