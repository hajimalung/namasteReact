import React from "react";
import ReactDOM from "react-dom/client";

// create react element using React core
const heading = React.createElement(
    "h1",
    { id:"header" },
    "Hello React 🚀"
);

// create react element using JSX
// JSX - not html in javascript
// JSX is html like or XML like syntax - but not html
const jsxHeading = <h1 id="heading">Namaste React usin JSX 🔥 🚀</h1>
// console.log(jsxHeading); // jsxheading is a react elemet
// jsx 

// jsx is not pure js
// js engine doesnot understand jsx
// js engine understands only ES6 (ecma script 6)

// parcel "the beast" transpiles the jsx code to pure js that browser understands using babel
// before it reaches the js engine


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);