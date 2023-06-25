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


export default function MigrationJob() {
    const [response, setResponse] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [migrationType, setMigrationType] = useState('');
    const [form, setForm] = useState({
        migrationType: 'ONE_TIME',
        source: '',
        destination: '',
        sourceDatabase: '',
        destinationDatabase: '',
        vpcConnectivity: '',
    });

    function handleMigrationType(e) {
        e.preventDefault();
        setMigrationType(e.target.value)
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
                'http://34.105.242.205/api/v1/migrate/create-migration-job',
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

    async function startMigrationJob() {
        try {
            const res = await axios.post(
                'http://34.105.242.205/api/v1/migrate/start-migration-job',
                {},
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
                <Typography variant="h5" sx={{ p: 1 }}>Create Database Migration Job</Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid item xs={12}>
                        <InputLabel id="demo-simple-select-label">Database migration type</InputLabel>
                        <Select
                            label="migrationType"
                            value={migrationType}
                            onChange={handleMigrationType}
                            fullWidth
                        >
                            <MenuItem value={'ONE_TIME'}>One time</MenuItem>
                            <MenuItem value={'CONTINUOUS'}>Continuous</MenuItem>
                        </Select>
                    </Grid>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="source"
                        label="Source Database Profile"
                        name="source"
                        autoFocus
                        onChange={handleInput}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="sourceDatabase"
                        label="Source Database Engine"
                        type="sourceDatabase"
                        id="password"
                        autoComplete="password"
                        onChange={handleInput}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="destination"
                        label="Destination Database Profile"
                        id="destination"
                        onChange={handleInput}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="destinationDatabase"
                        label="Destination Database Engine"
                        id="destinationDatabase"
                        onChange={handleInput}
                    />
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="vpcConnectivity"
                        label="Destination Database Engine"
                        id="vpcConnectivity"
                        onChange={handleInput}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mr: 10, mb: 2, bgcolor: '#285430', maxWidth: "30%" }}
                    >
                        Create Migration Job
                    </Button>
                    <Button
                        onClick={() => { startMigrationJob() }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, bgcolor: '#285431', maxWidth: "30%" }}
                    >
                        Start Migration Job
                    </Button>
                </Box>
            </Box>
        </Container>

    )
}