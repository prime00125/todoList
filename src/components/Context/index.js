import React from 'react'

const Context = React.createContext({
  todosList: [
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
  ],
  filter : false,
  note: () => {},
  done: () => {},
  onCompleted: () => {},
  onGoing: () => {},
  everything: () => {},
  active: [],
  over: [],
})

export default Context
