import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import AddTodo from './AddTodo'
import TodosList from './TodosList'

const Todos = () => {
  const [todo,setTodo]=useState({title:"",isComplete:false})
  const auth=useSelector((store)=>store.auth)
  if(!auth._id){
    return <Navigate to={"/signin"} />
  }
  return (
    <>
    <AddTodo todo={todo} setTodo={setTodo}/>
    <TodosList setTodo={setTodo} />
    </>
  )
}

export default Todos