import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const formStyle={
    margin:"0px auto",
    padding:"30px",
    borderRadius:"10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
}

const Signup = () => {
    return (
        <>
        <form style={formStyle} noValidate autoComplete='off'>
            <Typography variant='h5'>
                Sign Up
            </Typography>
            <TextField style={{marginTop:"20px"}} id='enter-name' label="Enter name" fullWidth />
            <TextField style={{marginTop:"20px"}} id='enter-email' label="Enter email" fullWidth />
            <TextField style={{marginTop:"20px"}} id='enter-paswword' label="Create paswword" type="password" fullWidth/>
            <Button style={{marginTop:"20px"}} variant='contained' type='submit'>Sign up</Button>
        </form>
        </>
      )
}

export default Signup