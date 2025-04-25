const TodoItem = ({id, text, completed, removeTodo, check}) => {
    return(
        <li>
            <input type="checkbox"
                   checked={completed}
                   onClick={() => check(id)}/>
            <span>{text}</span>
            <span className={"delete"} onClick={() => removeTodo(id)} >&times;</span>
        </li>
    )
}
export default TodoItem