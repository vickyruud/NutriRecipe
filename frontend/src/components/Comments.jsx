import * as React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { elementAcceptingRef } from "@mui/utils";

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
  const comments = props.comments.map((comment, i) => {
    console.log("$$$", comment);
    return (
      <TextareaAutosize
        maxRows={4}
        aria-label="maximum height"
        placeholder="Maximum 4 rows"
        key={i}
        defaultValue={comment.value}
        style={{ width: 400 }}
      />
    );
  });
   return <>{comments}</>;
}
