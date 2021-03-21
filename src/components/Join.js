import { Grid,Button, Typography } from '@material-ui/core';
import {React,useState} from 'react'
import {BrowserRouter as Router, Link } from "react-router-dom";


import TextField from '@material-ui/core/TextField';
const Join = () => {
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const handleSubmit = (e) =>{
        if(!room || !name){
            e.preventDefault();
        }
        console.log(`Name:${name} Room:${room}`);
    }
    return (
            <Grid container justify="center" alignItems="center" direction="column">
                <Grid item>
                    <Typography>
                        Chatty
                    </Typography>
                </Grid>
                <Grid md={6} item>
                            <TextField
                                id="standard-full-width"
                                label="Name"
                                style={{ margin: 8 }}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                onChange={(e)=>setName(e.target.value)}
                            />
                </Grid>
                <Grid md={6} item>
                            <TextField
                                id="standard-full-width"
                                label="Room"
                                style={{ margin: 8 }}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                onChange={(e)=>setRoom(e.target.value)}
                            />
                </Grid>
                <Grid md={6} item>
                        <Link onClick={handleSubmit} to={`/chat?name=${name}&room=${room}`}>    
                            <Button variant="contained" color="primary" disableElevation>
                                Create Room
                            </Button>
                        </Link>
                </Grid>
            </Grid>
              
               
            
    )
}

export default Join
