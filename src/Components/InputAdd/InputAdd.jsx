import { useState } from 'react'
import Btn_add from '../Btn_add/Btn_add'
import './InputAdd.css'

export default function InputAdd({onClick, placeholder}){
    function inputChangeValue(event){
        if(placeholder=='task' && event.target.value.trim().length<=40){
            setInputText(event.target.value)
        }else if(placeholder=='note'){
            setInputText(event.target.value)
        }
    }

    function addNote(prev){
            if(inputText.trim().length!==0){
                if(placeholder=='task'){
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
                    
                }else if(placeholder=='note'){
                    setInputText('')

                    return [...prev, {
                    id: new Date(),
                    text: inputText,
                    }]
                }

            }else{
                setInputText('')
                return prev
            }
    }


    const [inputText, setInputText] = useState('')
    return (
        <>
            <div className="add">
                <input 
                type="text" 
                placeholder={`Enter ${placeholder} here...`} 
                className={'add__input' + (placeholder=='note'?' add__input_note': '')} 
                value={inputText}
                onChange={inputChangeValue}
                onKeyDown={event=>event.key=='Enter' && onClick(addNote)}
                />
                <Btn_add
                className="add__btn"
                onClick={()=>onClick(addNote)}
                />
            </div>
            {inputText.trim().length>=40 && placeholder=='task' && <p className="add__warning">Todo should be less than 40 characters</p>}
        </>
        
    )
}

