import React from "react";
import { useAuthors } from "./hooks/useAuthors";
import { Author } from "./component/Author";

function App() {

  const list = useAuthors();
  return (
    <>
      <div className="my-4 text-center">
        <h1>List of Authors</h1>
      </div>
      {list.map((item) => (
        <Author key={item.id} item={item} />
      ))}
    </>
  )
}


export default App;
