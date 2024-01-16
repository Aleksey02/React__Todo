import Note from '../Note/Note'
import Todo from '../Todo/Todo'
import InputAddNote from '../InputAddNote/InputAddNote'
import { useState,  useEffect } from 'react'
import './Main.css'

export default function Main({isThemeNote}){
    const [todos, setTodos] = useState(localStorage.getItem('todos')==null?[]:JSON.parse(localStorage.getItem('todos')))
    const [notes, setNotes] = useState(localStorage.getItem('notes')==null?[]:JSON.parse(localStorage.getItem('notes')))
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    useEffect(()=>{
        localStorage.setItem('notes', JSON.stringify(todos))
    }, [notes])
   
    return (
        <main className='main'>
            <div className="container">
                {!isThemeNote && 
                <>
                    <InputAddNote onClick={setTodos} placeholder="task"/>
                    <div className="notes__box">
                        { todos.map(todo=><Todo key={todo.id} todo={todo} setTodos={setTodos}/>)}
                    </div>
                </>}
                {isThemeNote && 
                <>
                    <InputAddNote onClick={setNotes} placeholder="note"/>
                    <div className="notes__box">
                        { notes.map(note=><Note key={note.id} note={note} setNotes={setNotes}/>)}
                    </div>
                </>}
                
            </div>
        </main>
    )
}