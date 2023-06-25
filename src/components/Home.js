import React, { useState } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
// import connectionProfile from '../connection_profile.json'


export default function Home() {
    const [errorMessage, setErrorMessage] = useState('');
    const [form, setForm] = useState({
        username: '',
        password: '',
        confirm: '',
    });

    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function handleChange(e) {
        e.preventDefault();
        setForm({
            ...form,
            host: e.explicitOriginalTarget.outerText
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('submit migration')
        try {
            const res = await axios.get(
                "http://34.105.242.205/api/v1/migrate/ping",
                // 'http://34.105.242.205/api/v1/migrate/connection-profile',
                // connectionProfile,
                {
                    method: 'GET',
                    withCredentials: false,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            if (res.status === 200) {
                // console.log(res.data)
                console.log('success');
            }
        } catch (err) {
            setErrorMessage(err.response.data.message);
        }

    }

    return (
        <Container>
            <Box style={{ margin: 50, padding: 20, alignItems: "center", backgroundColor: "#E9E7EF", }}>
                <Typography sx={{ p: 1, color: "red" }}>{errorMessage}</Typography>
                <Typography variant="h5" sx={{ p: 1 }}>Create Source Database Connenction Profile</Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid item xs={8}>
                        <InputLabel id="demo-simple-select-label">Host</InputLabel>
                        <Select
                            label="Host"
                            onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value={10}>GCP</MenuItem>
                            <MenuItem value={20}>AWS</MenuItem>
                            <MenuItem value={30}>Azure</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel id="demo-simple-select-label">Database type</InputLabel>
                        <Select
                            label="Host"
                            onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value={10}>SQL</MenuItem>
                            <MenuItem value={20}>MongoDB</MenuItem>
                        </Select>
                    </Grid>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Source IP Address"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        onChange={handleInput}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="port"
                        label="Port"
                        id="port"
                        autoComplete="port"
                        onChange={handleInput}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="username"
                        label="Username"
                        type="username"
                        id="username"
                        autoComplete="username"
                        onChange={handleInput}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleInput}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mr: 10, mb: 2, bgcolor: '#285430', maxWidth: "20%" }}
                    >
                        Create
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, bgcolor: '#285430', maxWidth: "20%" }}
                    >
                        Continue
                    </Button>
                </Box>
            </Box>
        </Container>

    )
}