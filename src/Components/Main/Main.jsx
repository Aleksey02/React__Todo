import Note from '../Note/Note'
import InputAddNote from '../InputAddNote/InputAddNote'
import './Main.css'
import { useState } from 'react'

export default function Main(){
    const [notes, setNotes] = useState([])
    return (
        <main className='main'>
            <div className="container">
                <InputAddNote onClick={setNotes}/>
                <div className="notes__box">
                    { notes.map(note=><Note key={note.id} note={note} setNotes={setNotes}/>)}
                </div>
            </div>
        </main>
    )
}