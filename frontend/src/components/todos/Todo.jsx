import React from 'react'
import { Typography,Button,ButtonGroup } from '@mui/material'
import { Create,Delete,CheckCircle } from '@mui/icons-material'
import moment from "moment"
import { useDispatch } from 'react-redux'
import { checkTodo } from '../../store/todo/todo.actions'
const todoStyle={
    margin:"20px auto",
    padding:"20px",
    border:"2px solid gray",
    borderRadius:"10px",
    display:"flex",
    justifyContent:"space-between"
}

const Todo = ({todo,setTodo}) => {
    const dispatch=useDispatch();
    const handleUpdate=()=>{
        setTodo(todo);
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }

    const handleCheck=(id)=>{
        dispatch(checkTodo(id))
    }

  return (
    <div style={todoStyle}>
        <div>
            {todo.isComplete?(<Typography variant='subtitle1' style={{textDecoration:"line-through"}}>
                {todo.title}
            </Typography>):(<Typography variant='subtitle1'>
                {todo.title}
            </Typography>)}
            
            <Typography color="gray" variant='body2'>
                Author:SURYA
            </Typography>
            <Typography color="gray" variant='body2'>
                Added:{moment(todo.date).fromNow()}
            </Typography>
        </div>
        <div>
            <ButtonGroup size="small" aria-label="outlined primary button group">
                <Button onClick={()=>handleCheck(todo._id)}>
                    {todo.isComplete?(
                        <CheckCircle style={{color:"green"}}/>
                    ):
                        <CheckCircle color='action'/>
                    }
                </Button>
                
                <Button onClick={handleUpdate}>
                    <Create/>
                </Button>
                <Button>
                    <Delete style={{color:"#ba000d"}}/>
                </Button>
            </ButtonGroup>
        </div>
    </div>
  )
}

export default Todo