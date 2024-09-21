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

// industry common convention
const HeadingComponent = ()=> (<h1 className="header" tabIndex="1">Namaste react functional component! </h1>); 

const number = 10000;

const reactEle = (<span> this is react element! 🐶 </span>);

// loading component inside another component - also called component composition
// in { } we can run js inside it
// JSX takes care of malicious script or attacks that may happen in { } like sanitizing that data
const HeadingComponent2 = ()=> {
    return  <div className="container">
                { reactEle }
                <HeadingComponent />
                <h2> { number + 100 } </h2>
                <h1 className="header" tabIndex="1">Namaste react functional component! 🐙</h1>
            </div>;
};

// compose anything inside anything BUT
// WARNING : dot create cycles / loops it will hang browser


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(HeadingComponent());// this is not standard way to render component but this is also fine
root.render(<HeadingComponent2 />)