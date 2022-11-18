import React from 'react'

import {TextField,Button} from "@mui/material"
import {Send} from "@mui/icons-material"
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../../store/todo/todo.actions'

const style={
    margin:"0px auto",
    padding:"30px",
    borderRadius:"10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    display:"flex",
    justifyContent:"space-between"
}

const AddTodo = ({todo,setTodo}) => {

  

  const dispatch=useDispatch();

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(todo._id){
      const id=todo._id
      const updatedTodo={
        title:todo.title,
        isComplete:todo.isComplete,
        date:todo.date,
        author:todo.author,
        uid:todo.uid
      }
      dispatch(updateTodo(updatedTodo,id));
    }else{
      const newTodo={...todo,date:new Date()}
      dispatch(addTodo(newTodo));
    }


    setTodo({title:"",isComplete:false})
  }

  return (
    <>
    <form style={style} onSubmit={handleSubmit}>
        <TextField id='enter-todo' label="Add Todo" autoFocus fullWidth value={todo.title} onChange={(e)=>setTodo({...todo,title:e.target.value})} />
        <Button style={{marginLeft:"20px"}} variant='contained' type='submit'>
            <Send/>
        </Button>
    </form>
    </>
  )
}

export default AddTodo