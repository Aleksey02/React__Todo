import { useState } from 'react'
import checkbox from '../../assets/checkbox.svg'
import checkbox_active from '../../assets/checkbox_active.svg'
import Btn_delete from '../Btn_delete/Btn_delete'
import './Todo.css'

export default function Todo({todo, setTodos}){
    function changeIsChecked(isChecked){
        setTodos(prev=>{
            return prev.map(current=>{
                if(current.id == todo.id){
                    current.isChecked = isChecked
                }
                return current
            })
        })
    }

    function deleteTodo(){
        setTodos((prev)=>prev.filter(current=>current.id!==todo.id))
    }
    // maxLengthString = useState()
    return (
        <div className="todo">
            <div className="todo__todo">
                <div className="todo__checkbox">
                    {todo.isChecked &&  <img src={checkbox_active} onClick={()=>changeIsChecked(false)}/>}
                    {!todo.isChecked && <img src={checkbox} onClick={()=>changeIsChecked(true)}/>}
                </div>
                <div className={'todo__todo-title '+(todo.isChecked?'active':'')}>{todo.text}</div>
            </div>
            <Btn_delete 
            className="todo__delete" 
            onClick={deleteTodo}
            />
        </div>
    )
}