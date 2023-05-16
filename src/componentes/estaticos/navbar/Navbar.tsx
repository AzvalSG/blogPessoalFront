import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css';
function Navbar() {
    return (
        <>
            <AppBar className='AppBar' position="static">
                <Toolbar className='Toolbar' variant="dense">
                    <Box className='Box'>
                        <Typography className='Typography Typography:hover' variant="h5" color="inherit">
                            <a href="http://localhost:5173/">BlogPessoal</a>
                        </Typography>
                    </Box>

                    <Box className='Box' display="flex" justifyContent="start">
                        <Box className='Box' mx={1}>
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                                <a href="http://localhost:5173/home">Home</a>
                            </Typography>
                        </Box>
                        <Box className='Box' mx={1} >
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box className='Box' mx={1} >
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box className='Box' mx={1} >
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        <Box className='Box' mx={1} >
                            <Typography className='Typography Typography:hover' variant="h6" color="inherit">
                                <a href="http://localhost:5173/">Logout</a>
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;