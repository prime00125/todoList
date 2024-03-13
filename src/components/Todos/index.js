// import useState
import {useState, useContext} from 'react'
import Context from '../Context'
import TodosList from '../TodosList'
import './index.css'

const Todos = () => {
  const [input, setInput] = useState('')
  const {note, todosList, onCompleted, onGoing, everything} =
    useContext(Context)

  const handleInputChange = event => {
    setInput(event.target.value)
  }

  const addNote = () => {
    if (input !== '') note(input)
  }

  const hogaya = () => {
    onCompleted()
  }
  const chaluhye = () => {
    onGoing()
  }

  const showEverthing = () => {
    everything()
  }

  return (
    <div className="todos-bg-container">
      <h1 className="todos-heading">Todos</h1>
      <h1 className="create-task-heading">
        Create <span className="create-task-heading-subpart">Task</span>
      </h1>

      <input
        type="text"
        className="todo-user-input"
        placeholder="Enter a new task"
        value={input}
        onChange={handleInputChange}
      />
      <button className="add-todo-button" onClick={addNote}>
        Add
      </button>

      <div className="heading-filters">
        <h1 className="todo-items-heading">
          My <span className="todo-items-heading-subpart">Tasks</span>
        </h1>
        {/* Buttons for displaying completed and active tasks */}
        <div>
          <button className="filter-button" onClick={showEverthing}>
            All
          </button>
          <button className="filter-button" onClick={chaluhye}>
            Active
          </button>
          <button className="filter-button" onClick={hogaya}>
            Completed
          </button>
        </div>
      </div>

      <TodosList />
    </div>
  )
}

export default Todos
