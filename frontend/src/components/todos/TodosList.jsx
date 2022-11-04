import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import {Typography} from "@mui/material"
import Todo from './Todo'
import { useEffect } from 'react'
import { getTodos } from '../../store/todo/todo.actions'

const todoStyle={
    margin:"20px auto",
    padding:"20px",
    borderRadius:"10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
}

const TodosList = ({setTodo}) => {
  const dispatch=useDispatch();
  const todos=useSelector((store)=>store.todos);
  // console.log(todos);

  useEffect(()=>{
   dispatch(getTodos())
  },[])

  return (
    <div style={todoStyle}>
        <Typography variant='h5'>
            {todos.length>0?"All Todos":"No Todos"}
        </Typography>
        {todos && todos.map((todo)=><Todo todo={todo} key={todo._id} setTodo={setTodo} />)}
    </div>
  )
}

export default TodosList