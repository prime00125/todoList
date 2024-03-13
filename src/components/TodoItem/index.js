import {RiDeleteBinLine} from 'react-icons/ri'
import Context from '../Context'
import {useContext} from 'react'
import './index.css'

const TodoItem = props => {
  const {todo} = props
  const {done} = useContext(Context)

  const mark = () => done(todo.uniqueNo)

  return (
    <li key={todo.uniqueNo} className="todo-item-container">
      <input
        type="checkbox"
        checked={todo.completed}
        className="task-checkbox"
        onClick={mark}
      />
      <div className="task-content">
        <span className={todo.completed ? 'task-text-completed' : ''}>
          {todo.text}
        </span>
        <button className="delete-task-btn">
          <RiDeleteBinLine />
        </button>
      </div>
    </li>
  )
}

export default TodoItem
