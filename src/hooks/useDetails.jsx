import { useEffect, useState } from "react";

const authorApi="https://jsonplaceholder.typicode.com/users";

export function useDetails(authorid){
    const [author,setAuthor]=useState();
    useEffect(()=>{
        fetch(`${authorApi}/${authorid}`)
        .then(response => response.json())
        .then((json) => setAuthor(json))
      },[authorid]);

    return author;
}