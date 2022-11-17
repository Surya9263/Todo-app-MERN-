import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { signIn } from '../../store/auth/auth.actions'

const formStyle={
    margin:"0px auto",
    padding:"30px",
    borderRadius:"10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
}

const Signin = () => {
  const [creds,setCreds]=useState({email:"",password:""})
  const dispatch=useDispatch()
  const auth=useSelector((store)=>store.auth)

  const handleSignIn=(e)=>{
    e.preventDefault();
    dispatch(signIn(creds))
    setCreds({email:"",password:""})
  }

  if(auth._id){
    return <Navigate to={"/"} />
  }

  return (
    <>
    <form onSubmit={handleSignIn} style={formStyle} noValidate autoComplete='off'>
        <Typography variant='h5'>
            Sign In
        </Typography>
        <TextField value={creds.email} onChange={(e)=>setCreds({...creds,email:e.target.value})} style={{marginTop:"20px"}} id='enter-email' label="Enter email" fullWidth />
        <TextField value={creds.password} onChange={(e)=>setCreds({...creds,password:e.target.value})} style={{marginTop:"20px"}} id='enter-paswword' label="Enter paswword" type="password" fullWidth/>
        <Button style={{marginTop:"20px"}} variant='contained' type='submit'>Sign in</Button>
    </form>
    </>
  )
}

export default Signin