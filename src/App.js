import './App.css'
import Context from './components/Context'
import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import Todos from './components/Todos'

function App() {
  const [filter, setShowFilter] = useState(false)
  const [todosList, setTodosList] = useState([
    {
      text: 'Learn HTML',
      uniqueNo: 1,
      completed: false,
    },
    {
      text: 'Learn CSS',
      uniqueNo: 2,
      completed: false,
    },
    {
      text: 'Learn JavaScript',
      uniqueNo: 3,
      completed: false,
    },
  ])
  const [active, setActive] = useState([...todosList])
  const note = newNote => {
    setTodosList([
      ...todosList,
      {text: newNote, uniqueNo: uuidv4(), completed: false},
    ])
    setShowFilter(false)
  }
  const done = id => {
    const updatedTodos = todosList.map(eachTodo => {
      if (eachTodo.uniqueNo === id) {
        return {...eachTodo, completed: !eachTodo.completed}
      }
      return eachTodo
    })
    setTodosList(updatedTodos)
    setShowFilter(false)
  }

  const onCompleted = () => {
    const updatedTodos = todosList.filter(eachTodo => {
      if (eachTodo.completed === true) return {...eachTodo}
    })
    setActive(updatedTodos)
    setShowFilter(true)
  }
  const onGoing = () => {
    const updatedTodos = todosList.filter(eachTodo => {
      if (eachTodo.completed === false) return {...eachTodo}
    })
    setActive(updatedTodos)
    setShowFilter(true)
  }

  const everything = () => {
    setShowFilter(false)
    return [...todosList]
  }

  return (
    <Context.Provider
      value={{
        todosList,
        note,
        done,
        onCompleted,
        onGoing,
        everything,
        active,
        filter,
      }}
    >
      <div className="App">
        <Todos />
      </div>
    </Context.Provider>
  )
}

export default App
