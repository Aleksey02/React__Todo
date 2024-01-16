import './Toggle.css'

export default function Toggle({isThemeNote, setIsThemeNote}){
    return (
        <div className="toggle">
            <div className="toggle__title">todo {isThemeNote?'note':'list'}</div>
            <div className={"toggle__box" + (isThemeNote?' active':'')} onClick={()=>setIsThemeNote(prev=>!prev)}>
                <div className="toggle__box-round"></div>
            </div>
        </div>
    )
}