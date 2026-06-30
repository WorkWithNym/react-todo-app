import { useState } from 'react'

function App() {
  // useState hook holds our list of todos and the text typed in the input box
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React hooks', done: false },
    { id: 2, text: 'Prep for interview', done: true },
  ])
  const [inputText, setInputText] = useState('')

  // Add a new todo when the form is submitted
  function handleAddTodo(e) {
    e.preventDefault() // stop the page from refreshing
    if (inputText.trim() === '') return // ignore empty input

    const newTodo = {
      id: Date.now(), // simple unique id
      text: inputText,
      done: false,
    }

    setTodos([...todos, newTodo]) // add new todo to the list
    setInputText('') // clear the input box
  }

  // Flip a todo between done / not done
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  // Remove a todo from the list
  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const remainingCount = todos.filter((t) => !t.done).length

  return (
    <div className="app">
      <h1>My To-Do List</h1>

      <form onSubmit={handleAddTodo} className="todo-form">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="What do you need to do?"
        />
        <button type="submit">Add</button>
      </form>

      <p className="counter">{remainingCount} task(s) left</p>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? 'done' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              ✕
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p className="empty">No tasks yet — add one above!</p>}
    </div>
  )
}

export default App
