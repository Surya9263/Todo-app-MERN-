import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { signUp } from '../../store/auth/auth.actions'
import {Navigate} from "react-router-dom"

const formStyle={
    margin:"0px auto",
    padding:"30px",
    borderRadius:"10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
}

const Signup = () => {
    const [user,setUser]=useState({name:"",email:"",password:""})
    const dispatch=useDispatch()
    const auth=useSelector((store)=>store.auth)

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(signUp(user));
        setUser({name:"",email:"",password:""})
    }
    if(auth._id) return <Navigate to={"/"} />

    return (
        <>
        <form onSubmit={handleSubmit} style={formStyle} noValidate autoComplete='off'>
            <Typography variant='h5'>
                Sign Up
            </Typography>
            <TextField value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})} style={{marginTop:"20px"}} id='enter-name' label="Enter name" fullWidth />
            <TextField value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} style={{marginTop:"20px"}} id='enter-email' label="Enter email" fullWidth />
            <TextField value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} style={{marginTop:"20px"}} id='enter-paswword' label="Create paswword" type="password" fullWidth/>
            <Button style={{marginTop:"20px"}} variant='contained' type='submit'>Sign up</Button>
        </form>
        </>
      )
}

export default Signup