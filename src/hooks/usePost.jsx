import {useEffect } from "react";
import { useState } from "react";
const postsUrl= "https://jsonplaceholder.typicode.com/posts"

export function usePost(postId){
    const [post,setPost]=useState(null);
  
    useEffect(()=>{ 
      fetch(`${postsUrl}/${postId}`)
      .then(response => response.json())
      .then((json) => setPost(json))
    },[postId])

    return post;
}