import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { Navigate } from 'react-router-dom';
function Navbar() {
    const[token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

function goLogout(){
    setToken('')
    alert('usuario deslogado com sucesso')
    navigate('/login')
}


    return (
        <>
            <AppBar className='AppBar' position="static">
                <Toolbar className='Toolbar' variant="dense">
                    <Box className='Box'>
                        <Typography className='Typography Typography:hover' variant="h5" color="inherit">
                            <Link to='/home' >BlogPessoal</Link> 
                        </Typography>
                    </Box>

                    <Box className='Box' display="flex" justifyContent="start">
                        <Box className='Box' mx={1}>
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                            <Link to='/home' >Home</Link> 
                            </Typography>
                        </Box>
                        <Box className='Box' mx={1} >
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                            <Link to='/posts' >Postagens</Link>
                            </Typography>
                        </Box>
                        <Box className='Box' mx={1} >
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                            <Link to='/temas' >Temas</Link>
                            </Typography>
                        </Box>
                        <Box className='Box' mx={1} >
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                            <Link to='/formularioTema' >Cadastrar Tema</Link>
                            </Typography>
                        </Box>
                        <Box className='Box' mx={1} onClick = {goLogout} >
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                            Logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;