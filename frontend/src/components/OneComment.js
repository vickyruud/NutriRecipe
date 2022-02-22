import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import TimeAgo from 'timeago-react';
import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from './Avatars';


const OneComment = (props) => {

  const userName = props.users.map(user => {
    if (props.comment.user_id === user.id) {
      return user.username
    }
  })

  return (
    <div style={{ padding: 14 }}>
      <Paper elevation={15} style={{ padding: "40 px 20 px" }}>
        <Grid container wrap='nowrap' spacing={2}>
          <Grid item>
            <Avatar style={{ padding: 3, width: "75px", height: "75px" }}
              avatarStyle="Circle" {...generateRandomAvatarOptions()}
            />
              
          </Grid>
          <Grid justifyContent='left' item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{userName}</h4>
            <p style={{ textAlign: "justify", paddingRight:50}}>
              {props.comment.value}
            </p>
            <p style={{ textAlign: "left" }}>
              <TimeAgo datetime={props.comment.created_at}/>
            </p>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" style={{margin: "30px 0"}}/>
      </Paper>


    </div>
  )
}

export default OneComment