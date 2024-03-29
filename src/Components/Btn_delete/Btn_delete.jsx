import { useState } from "react"

export default function Btn_delete({isNote, ...props}) {
    const [bgColor, setBgColor] = useState('#FF9595')
    return (
        <button 
        {...props}
        >
            {!isNote && 
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" onMouseEnter={() => setBgColor('#FF5B5B')} onMouseLeave={() => setBgColor('#FF9595')}>
                    <rect width="36" height="36" rx="8" fill={bgColor}/>
                    <rect x="5" y="26.2132" width="30" height="6" rx="3" transform="rotate(-45 5 26.2132)" fill="white"/>
                    <rect x="9.24261" y="5" width="30" height="6" rx="3" transform="rotate(45 9.24261 5)" fill="white"/>
                </svg>
            </>}
            {isNote && 
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" onMouseEnter={() => setBgColor('#FF5B5B')} onMouseLeave={() => setBgColor('#FF9595')}>
                    <circle cx="16" cy="16" r="16" fill={bgColor}/>
                    <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM27 16C27.0026 18.5719 26.0993 21.0626 24.4488 23.035L8.96501 7.55C10.5713 6.21372 12.5249 5.36255 14.5972 5.0961C16.6696 4.82964 18.775 5.15892 20.667 6.04541C22.5591 6.93189 24.1595 8.33891 25.281 10.1018C26.4026 11.8647 26.9988 13.9106 27 16ZM5.00001 16C4.99745 13.4281 5.90069 10.9374 7.55126 8.965L23.035 24.45C21.4288 25.7863 19.4751 26.6374 17.4028 26.9039C15.3304 27.1704 13.225 26.8411 11.333 25.9546C9.44096 25.0681 7.84053 23.6611 6.71899 21.8982C5.59745 20.1353 5.0012 18.0894 5.00001 16Z" fill="white"/>
                </svg>
            </>}
            
        </button>
    )
}
