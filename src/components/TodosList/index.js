import React, {useContext} from 'react' // Don't forget to import React
import TodoItem from '../TodoItem'
import './index.css'
import Context from '../Context'

const TodosList = () => {
  const {todosList, active, filter} = useContext(Context)

  return (
    <ul className="todo-items-container">
      {filter
        ? 
         active.map(todo => <TodoItem todo={todo} key={todo.uniqueNo} />):todosList.map(todo => <TodoItem todo={todo} key={todo.uniqueNo} />)
        }
    </ul>
  )
}

export default TodosList
