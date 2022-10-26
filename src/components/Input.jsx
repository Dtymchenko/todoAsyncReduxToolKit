import React from 'react'

export default function Input({ input, setInput, addTodo }) {
  return (
    <label>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={addTodo}>Add Todo</button>
      </label>
  )
}
