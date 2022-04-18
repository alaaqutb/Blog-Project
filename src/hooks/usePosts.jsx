import { useState,useEffect } from "react";
const postsApi="https://jsonplaceholder.typicode.com/posts"

export function usePosts(){

    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch(`${postsApi}`)
        .then(response => response.json())
        .then((json) => setPosts(json))
      },[]);

    return posts;
}