import {useEffect } from "react";
import { useState } from "react";
const commentUrl= "https://jsonplaceholder.typicode.com/posts"

export function useComment(postId){

    const [comment,setComment]=useState();
  
    useEffect(()=>{ 
      fetch(`${commentUrl}/${postId}/comments`)
      .then(response => response.json())
      .then((json) => setComment(json))
    },[postId])
console.log(comment);
    return comment;
}