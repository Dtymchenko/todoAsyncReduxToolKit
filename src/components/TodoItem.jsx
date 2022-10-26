import React from 'react';
import { useDispatch } from 'react-redux';
import {deleteTodo, toggleStatus } from '../store/todoSlice';

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch()
    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleStatus(id))}
            ></input>
            <span>{title}</span>
            <span className="delete" onClick={() => dispatch(deleteTodo(id))}>
                &times;
            </span>
        </li>
    );
}

export default TodoItem;