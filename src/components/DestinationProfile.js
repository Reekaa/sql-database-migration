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
import { useNavigate } from 'react-router-dom';
// import connectionProfile from '../connection_profile.json'


export default function DestinationProfile() {
    const [response, setResponse] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [database, setDatabase] = useState('');
    const [form, setForm] = useState({
        database: 'cloudsql',
        databaseVersion: '',
        onpremDatabaseProfile: '',
        password: '',
    });
    const navigate = useNavigate();

    function handleDatabaseChange(e) {
        console.log(database);
        e.preventDefault();
        setDatabase(e.target.value)
        // setForm({
        //     ...form,
        //     database: setDatabase(e.target.value),
        // });
    }

    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (event) => {
        console.log(form);
        event.preventDefault();
        console.log('submit migration')
        try {
            const res = await axios.post(
                'http://34.105.242.205/api/v1/migrate/destination-connection-profile',
                form,
                {
                    method: 'POST',
                    withCredentials: false,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            if (res.status === 200) {
                console.log(res.data)
                setResponse(res.data.message);
            }
        } catch (err) {
            setErrorMessage(err.response.data.message);
        }

    }

    return (
        <Container>
            <Box style={{ margin: 50, padding: 20, alignItems: "center", backgroundColor: "#E9E7EF", }}>
                <Typography sx={{ p: 1, color: "red" }}>{errorMessage}</Typography>
                <Typography sx={{ p: 1, color: "green" }}>{response}</Typography>
                <Typography variant="h5" sx={{ p: 1 }}>Create Destination Database Connenction Profile</Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid item xs={12}>
                        <InputLabel id="demo-simple-select-label">Database type</InputLabel>
                        <Select
                            label="Database"
                            value={database}
                            onChange={handleDatabaseChange}
                            fullWidth
                        >
                            <MenuItem value={'cloudsql'}>CloudSQL</MenuItem>
                            <MenuItem value={'cloudspanner'}>Cloud Spanner</MenuItem>
                            <MenuItem value={'postgresql'}>PostgreSQL</MenuItem>
                        </Select>
                    </Grid>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="databaseVersion"
                        label="Database Version"
                        name="databaseVersion"
                        autoFocus
                        onChange={handleInput}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="onpremDatabaseProfile"
                        label="On Prem Database Profile"
                        id="onpremDatabaseProfile"
                        onChange={handleInput}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Root Password"
                        type="password"
                        id="password"
                        autoComplete="password"
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
                        onClick={() => { navigate('/migrationjob') }}
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