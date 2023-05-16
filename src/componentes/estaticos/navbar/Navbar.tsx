import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
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
                            <Link to='/' >Postagens</Link>
                            </Typography>
                        </Box>
                        <Box className='Box' mx={1} >
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                            <Link to='/' >Temas</Link>
                            </Typography>
                        </Box>
                        <Box className='Box' mx={1} >
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                            <Link to='/' >Cadastrar Tema</Link>
                            </Typography>
                        </Box>
                        <Box className='Box' mx={1} >
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                            <Link to='/' >Logout</Link>
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;