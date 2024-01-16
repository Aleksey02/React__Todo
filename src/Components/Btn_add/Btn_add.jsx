import { useState } from "react"

export default function Btn_add(props){
    const [bgColor, setBgColor] = useState('#B9FF98')
    return (
        <button 
        {...props}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none" onMouseEnter={() => setBgColor('#7AD61F')} onMouseLeave={() => setBgColor('#B9FF98')}>
                <rect width="47" height="47" rx="23.5" fill={bgColor}/>
                <rect x="9" y="20" width="30" height="6" rx="3" fill="white"/>
                <rect x="21" y="38" width="30" height="6" rx="3" transform="rotate(-90 21 38)" fill="white"/>
            </svg>
        </button>
    )
}

                