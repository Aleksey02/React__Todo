import Calendar from '../Calendar/Calendar'
import Toggle from '../Toggle/Toggle'
import './Header.css'
export default function Header(props){
    return (
        <header className='header'>
            <Calendar/>
            <Toggle {...props}/>
        </header>
    )
}