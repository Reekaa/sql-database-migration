import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <AppBar position="static" sx={{ bgcolor: '#285430' }}>
            <Toolbar sx={{ ml: 10, display: 'flex', justifyContent: 'flex-end' }}>
                <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    Database Migration Tool
                </Typography>
                <Box>
                    <Link to="/mainpage" style={{ padding: 5, color: '#FFFFFF' }}>
                        Home
                    </Link>
                    <Link to="/mainpage" style={{ padding: 5, color: '#FFFFFF' }}>
                        Login
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}