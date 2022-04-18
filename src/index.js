import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import {ViewDetails} from "./ViewDetails"
import { ViewPosts } from './ViewPosts';
import {ViewPost} from "./ViewPost";
import { ViewComment } from './ViewComment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />}/>
      <Route path="author/:authorid" element={<ViewDetails/>} />
      <Route path="posts/" element={<ViewPosts/>} />
      <Route path="posts/:postId" element={<ViewPost/>} />
      <Route path="posts/:postId/comments" element={<ViewComment />} />
    </Routes>
  </BrowserRouter>)
//   <React.StrictMode>
   
//   </React.StrictMode>
// 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
