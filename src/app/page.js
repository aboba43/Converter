'use client'

import "./globals.css";
import { useState } from "react";
import TodoList from "@/app/components/TodoList";

export default function Home() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");
    const removeTodo = (todoId) =>{
        setTodos(todos.filter(todo => todo.id !== todoId))
    }
    const check = (todoId) => {
        setTodos(
            todos.map(
                todo => {
                    if (todo.id !== todoId) return todo;


                    return {
                        ...todo,
                        completed: !todo.completed,

                    }
                }
            )


        )
    }
    const addTodo = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false,
                }
            ]);
            setText("");
        }
    };

    return (
        <>
            <label>
                <input value={text} onChange={e => setText(e.target.value)} />
                <button onClick={addTodo}>Add Todo</button>
            </label>
            <TodoList todoes={todos}
            removeTodo = {removeTodo}
            check={check}/>
        </>
    );
}
