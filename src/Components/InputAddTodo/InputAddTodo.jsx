import { useState } from 'react'
import Btn_add from '../Btn_add/Btn_add'
import classes from './InputAddTodo.module.css'

export default function InputAddTodo({onClick}){
    function inputChangeValue(event){
        if(event.target.value.trim().length<=40){
            setInputText(event.target.value)
        }
    }

    function addTodo(prev){
        if(inputText.trim().length!==0){
            if(inputText.trim().length<40){
                setInputText('')
                return [...prev, {
                        id: new Date(),
                        text: inputText,
                        isChecked: false
                        }]
            }else{
                return prev
            }
        }else{
            setInputText('')
            return prev
        }
    }


    const [inputText, setInputText] = useState('')
    return (
        <>
            <div className={classes.add}>
                <input 
                type="text" 
                placeholder='Enter task here...'
                className={classes.add__input} 
                value={inputText}
                onChange={inputChangeValue}
                onKeyDown={event=>event.key=='Enter' && onClick(addTodo)}
                />
                <Btn_add
                className={classes.add__btn}
                onClick={()=>onClick(addTodo)}
                />
            </div>
            {inputText.trim().length>=40 && <p className={classes.add__warning}>Todo should be less than 40 characters</p>}
        </>
        
    )
}

