import {React,useState,useEffect} from 'react'
import Person from './Person'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import {Avatar, ListItem, ListItemAvatar, ListItemText  ,Divider, List, TextField, Typography } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import { io } from "socket.io-client";
import queryString from 'query-string';



const Chat = (props) => {

    useEffect(() => {
        // const socket = io("http://127.0.0.1:5000");
        // const parsed = queryString.parse(location.search);
        // console.log(parsed);
        console.log(window.location.pathname);
    }, [])

    

    
    
    return (
        <div>
            <Grid container alignItems="flex-start">
                <Grid item xs={12}>
                    <Typography>Chat</Typography>
                </Grid>
            </Grid>
            <Grid  container>
                <Grid item md={3} sm={3}>
                    <Paper style={{height:'90vh'}} >
                        <Grid container>
                            <Grid sm={12} md={12} item>
                                <List>
                                    <Person/> 
                                </List>
                                <Divider />
                                <Grid style={{padding: '4px 8px 6px 8px'}} item>
                                    <TextField margin="dense" variant="outlined" fullWidth/>
                                </Grid>
                                <Divider />
                                <List>
                                    <Person/> 
                                    <Person/> 
                                    <Person/> 
                                    <Person/> 
                                    <Person/> 
                                </List>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                
                <Grid item md={9} sm={9}>
                    <Paper style={{height:'90vh'}}>
                        <Grid md={12} style={{height:'80vh'}} item>
                            <List>
                                <ListItem>
                                    <Grid  container>
                                        <Grid xs={12} md={12} item>
                                            <ListItemText primary="Photos"></ListItemText>
                                        </Grid>
                                        <Grid xs={12} md={12} item>
                                            <ListItemText secondary="Jan 9, 2014"/>
                                        </Grid>
                                    </Grid>
                                </ListItem>

                                <ListItem>
                                    <Grid container>
                                        <Grid xs={12} md={12} item>
                                            <ListItemText align="right" primary="Photos"></ListItemText>
                                        </Grid>
                                        <Grid xs={12} md={12} item>
                                            <ListItemText align="right" secondary="Jan 9, 2014"/>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem>
                                    <Grid  container>
                                        <Grid xs={12} md={12} item>
                                            <ListItemText primary="Photos"></ListItemText>
                                        </Grid>
                                        <Grid xs={12} md={12} item>
                                            <ListItemText secondary="Jan 9, 2014"/>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            </List>
                        </Grid>
                        <Divider/>
                        <Grid container>
                                <Grid style={{padding:'4px 8px 6px 8px'}} md={11} item>
                                    <TextField margin="dense" variant="outlined" fullWidth/>
                                </Grid>
                                <Grid style={{padding:'4px 8px 6px 8px'}} md={1} item>
                                    <IconButton>
                                        <SendIcon />
                                    </IconButton>
                                </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Chat
