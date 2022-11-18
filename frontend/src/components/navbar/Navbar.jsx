import React from 'react'

import {AppBar,Typography,Toolbar,Button} from "@mui/material"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../store/auth/auth.actions';

const Navbar = () => {

    const navigate=useNavigate();
    const state=useSelector((store)=>store)
    console.log(state);
    const dispatch=useDispatch()

    const handleSignout=()=>{
        //signout the user
        dispatch(signOut())
        navigate("/signin")
    }
  return (
    <>
    <AppBar position='static'>
        <Toolbar>
            <Typography variant='h4' flexGrow={1}>
                <Link style={{color:"white",textDecoration:"none"}} to="/">Todo App</Link>
            </Typography>
            <Typography variant='subtitle2' flexGrow={1}>Logged in as SURYA</Typography>
            <Button onClick={handleSignout} color='inherit'>SIGNOUT</Button>
            <Button color='inherit'><Link style={{color:"white",textDecoration:"none"}} to="/signin">SIGN IN</Link></Button>
            <Button color='inherit'><Link style={{color:"white",textDecoration:"none"}} to="/signup">SIGN UP</Link></Button>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar