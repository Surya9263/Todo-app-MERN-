import React, { useState } from 'react'
import AddTodo from './AddTodo'
import TodosList from './TodosList'

const Todos = () => {
  const [todo,setTodo]=useState({title:"",isComplete:false})
  return (
    <>
    <AddTodo todo={todo} setTodo={setTodo}/>
    <TodosList setTodo={setTodo} />
    </>
  )
}

export default Todos