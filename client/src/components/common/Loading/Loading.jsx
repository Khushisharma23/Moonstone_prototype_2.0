import React from "react";
import classes from "./Loading.module.css";

// var loader=document.querySelector(classes.svg_frame)
// setTimeout(function(){
//     loader.style.top="-100%"
// },2000)

const Loading = () => {
  return (
    <div className={classes.svg_frame}>
        <h1>EMBRACE</h1>
        <h1>YOUR</h1>
        <h1>JOURNEY</h1>
    </div>
  );
};

export default Loading;
