import TodoItem from "@/app/components/TodoItem";

const TodoList = ({todos, removeTodo, check}) => {
    return(
        <ul>
            {
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        removeTodo={removeTodo}
                        check={check}
                        {...todo}/>)

                )
                    }
        </ul>
    )
}
export default TodoList