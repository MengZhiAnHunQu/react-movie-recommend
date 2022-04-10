import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//
//1. create an array of movie state in appjs
//2.create a function that receive the movie type and add to the collection list #1
//3.pass the function #2 ddown to the custom card component and rececie as props
//4. invoke the function #3 and trigger on the button click and pass the paramater eitehr happy or lazy
//5. #2 function will receive the argument happy or lazy , and now add that to the obj as a  property ie."category"
//6.push the movie object tot the collection,#1
//7. create a component that will list the movies, we use the custom card to shwo the movie in the movie list
