import {useState, useEffect} from "react";
const Api="https://jsonplaceholder.typicode.com/users"

export function useAuthors(){
    const [authors,setAuthors]=useState([]);
    useEffect(()=>{
      fetch(Api)
      .then(response => response.json())
      .then((json) => setAuthors(json))
    },[])
  
    return  authors;

}