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

    return (
        <div className="todo">
            <div className="todo__todo">
                <div className="todo__checkbox">
                    {todo.isChecked &&  <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none" onClick={()=>changeIsChecked(false)}>
                                                <path d="M31.2045 17.6705C31.3382 17.804 31.4442 17.9625 31.5166 18.137C31.5889 18.3115 31.6261 18.4986 31.6261 18.6875C31.6261 18.8764 31.5889 19.0635 31.5166 19.238C31.4442 19.4125 31.3382 19.571 31.2045 19.7045L21.142 29.767C21.0085 29.9007 20.85 30.0067 20.6755 30.0791C20.501 30.1514 20.3139 30.1886 20.125 30.1886C19.9361 30.1886 19.749 30.1514 19.5745 30.0791C19.4 30.0067 19.2415 29.9007 19.108 29.767L14.7955 25.4545C14.5257 25.1848 14.3742 24.819 14.3742 24.4375C14.3742 24.056 14.5257 23.6902 14.7955 23.4205C15.0652 23.1507 15.431 22.9992 15.8125 22.9992C16.194 22.9992 16.5598 23.1507 16.8295 23.4205L20.125 26.7177L29.1705 17.6705C29.304 17.5368 29.4625 17.4308 29.637 17.3584C29.8115 17.2861 29.9986 17.2489 30.1875 17.2489C30.3764 17.2489 30.5635 17.2861 30.738 17.3584C30.9125 17.4308 31.071 17.5368 31.2045 17.6705ZM40.25 8.625V37.375C40.25 38.1375 39.9471 38.8688 39.4079 39.4079C38.8688 39.9471 38.1375 40.25 37.375 40.25H8.625C7.8625 40.25 7.13123 39.9471 6.59207 39.4079C6.0529 38.8688 5.75 38.1375 5.75 37.375V8.625C5.75 7.8625 6.0529 7.13123 6.59207 6.59207C7.13123 6.0529 7.8625 5.75 8.625 5.75H37.375C38.1375 5.75 38.8688 6.0529 39.4079 6.59207C39.9471 7.13123 40.25 7.8625 40.25 8.625ZM37.375 37.375V8.625H8.625V37.375H37.375Z" fill="#343330"/>
                                            </svg>
                                        </>}
                    {!todo.isChecked &&  <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none" onClick={()=>changeIsChecked(true)}>
                                                <path d="M36.0687 7.1875H9.93133C9.20391 7.18845 8.50656 7.47784 7.9922 7.9922C7.47784 8.50656 7.18845 9.20391 7.1875 9.93133V36.0687C7.18845 36.7961 7.47784 37.4934 7.9922 38.0078C8.50656 38.5222 9.20391 38.8115 9.93133 38.8125H36.0687C36.7961 38.8115 37.4934 38.5222 38.0078 38.0078C38.5222 37.4934 38.8115 36.7961 38.8125 36.0687V9.93133C38.8115 9.20391 38.5222 8.50656 38.0078 7.9922C37.4934 7.47784 36.7961 7.18845 36.0687 7.1875ZM35.9375 35.9375H10.0625V10.0625H35.9375V35.9375Z" fill="#343330"/>
                                            </svg>
                                        </>}
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
