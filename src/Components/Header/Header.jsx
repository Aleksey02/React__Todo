import Calendar from '../Calendar/Calendar'
import Toggle from '../Toggle/Toggle'
import './Header.css'
export default function Header(){
    return (
        <header className='header'>
            <div className="container header__box">
                <Calendar/>
                <Toggle/>
            </div>
            
        </header>
    )
}