import { useState, useRef, useEffect } from 'react'
import Btn_add from '../Btn_add/Btn_add'
import classes from './InputAddNote.module.css'

export default function InputAddNote({onClick}){
    function addNote(prev){
        setInputText('')
        inputRef.current.style.height = initionalHeightInput + 'px'
        if(inputText.trim().length!==0){
            
            return [...prev, {
            id: new Date(),
            text: inputText,
            }]
        }
        
        return prev
    }

    function inputChangeValue(event){
        setInputText(event.target.value)
        if(inputRef.current.scrollHeight!=initionalHeightInput){
            inputRef.current.style.height = 'auto'
            inputRef.current.style.height = inputRef.current.scrollHeight + 'px'
        }
        if(event.target.value.trim()==''){
            inputRef.current.style.height = initionalHeightInput + 'px'
        }
        
        
    }
    function onKeyEnter(event){
        if(event.key === 'Enter'){
            event.preventDefault()
            onClick(addNote)
        }
    }
    
    const inputRef = useRef(null)
    const [inputText, setInputText] = useState('')
    const [initionalHeightInput, setInitionalHeightInput] = useState(null)
    useEffect(()=>{
        setInitionalHeightInput(inputRef.current.scrollHeight);
    }, [])
    
   
    return (
            <div className={classes.add}>
                <textarea 
                placeholder='Enter note here...' 
                className={classes.add__input} 
                value={inputText}
                onChange={inputChangeValue}
                onKeyDown={onKeyEnter}
                ref={inputRef}
                />
                <Btn_add
                className={classes.add__btn}
                onClick={()=>onClick(addNote)}
                />
            </div>
    )
}

