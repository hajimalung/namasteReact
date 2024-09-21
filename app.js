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

// attributes must be in camelCase , explore more jsx attributes and elements
// if we have to write in multiple lines in JSX wrap inside ()

const jsxHeading = (
    <h1 id="heading" className="root" tabIndex="1" >
        Namaste React usin JSX 🔥 🚀
    </h1>
    );

// console.log(jsxHeading); // jsxheading is a react elemet
// jsx 

// jsx is not pure js
// js engine doesnot understand jsx
// js engine understands only ES6 (ecma script 6)

// parcel "the beast" transpiles the jsx code to pure js that browser understands using babel
// before it reaches the js engine
// babel converts jsx to react core 


// React Component
// 1. class based components - OLD - js classes

// 2. functional componennts - New - js functions to create components
// js function that returns react/JSX element is functional react component
// name it with Capital Letter

const HeadingComponent = ()=> (<h1 className="header" tabIndex="1">Namaste react functional component! </h1>);

const HeadingComponent2 = ()=> {
    return <h1 className="header" tabIndex="1">Namaste react functional component! </h1>;
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);