'use client'

import "./globals.css";
import { useState } from "react";
import {colors} from "@mui/material";

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
            <ul>
                {
                    todos.map(todo => <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onClick={() => check(todo.id)}/>
                        <span>{todo.text}</span>
                        <span className={"delete"} onClick={() => removeTodo(todo.id)} >&times;</span>
                    </li>)

                }
            </ul>
        </>
    );
}
