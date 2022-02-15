import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input'


const BasicCard = (props) => {
  return (
    <Card> 
      <CardContent>
        <SearchIcon />
        <Input placeholder={props.placeholder} onclick={props.onclick}></Input>
      </CardContent>
    </Card>
  )
}

export default BasicCard