import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'

const Person = () => {
    return (
        <div>
            <ListItem button>
                    <ListItemAvatar>
                        <Avatar>
                            S
                        </Avatar>
                    </ListItemAvatar>
                <ListItemText primary="Saikat" />
            </ListItem>
        </div>
    )
}

export default Person
