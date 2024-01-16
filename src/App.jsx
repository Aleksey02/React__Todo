import { useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import './index.css'

export default function App() {
const [isThemeNote, setIsThemeNote] = useState(localStorage.getItem('isThemeNote')?JSON.parse(localStorage.getItem('isThemeNote')):false)
useEffect(()=>{
localStorage.setItem('isThemeNote', JSON.stringify(isThemeNote))
},[isThemeNote])
return (
    <>
      <Header isThemeNote={isThemeNote} setIsThemeNote={setIsThemeNote}/>
      <Main isThemeNote={isThemeNote}/>
    </>
  )
}