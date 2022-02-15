import * as React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { elementAcceptingRef } from "@mui/utils";
import Paper from "@mui/material/Paper";
import { listClasses } from "@mui/material";

export default function Components(props) {
  // console.log("comments++++", props.comments);
  // const createMyString=() => {
  //   let myString = "";
  //   props.comments.forEach(element =>

  //   { console.log("Value", element.value)
  //   myString+=element.value
  //   })
  //   return myString
  // }
  let userName = "";
  let myString = "";
  const comments = props.comments.comments.map((comment, i) => {
    // console.log("comment--***",comment);
     if(props.list.id === comment.recipe_id){
    // return (
       userName = props.comments.users.map(user=>{
        if(user.id === comment.user_id){
        return user.name
        }
      })
      
      myString+=comment.value;
      console.log(myString)
      console.log(userName)
      
      
      // <TextareaAutosize
      //   maxRows={4}
      //   aria-label="maximum height"
      //   placeholder="Maximum 4 rows"
      //   key={i}
      //   defaultValue={comment.value}
      //   style={{ width: 400 }}
      // />
    ;
    }
  });
   return <Paper elevation={3}>
     {myString}
     {userName}
     
   </Paper>
}