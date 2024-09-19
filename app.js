// second param is object with attributes and their values
const heading = React.createElement("h1",{ id : "heading"},"Hello world from react!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1> this is h1 tag </h1>
 *      </div>
 * </div>
 * 
*/

// if i hvae to give siblings for same parent 
// we can pass array of react elements as third param

const parent = React.createElement(
    "div",
    { id: "parent"},
    React.createElement( 
        "div",
        { id: "child" },
        [React.createElement("h1",{},"I am an h1 tag!"), React.createElement("h2",{},"I am an h2 tag!")]
    )
);

// this removes if anything is already present in root and renders given react element
root.render(parent); 


// if we have to create complex nested elements it will be difficult to do with this 
// thats where JSX comes into the picture.
// most of the ppl think react can be written only in JSX but the above exampl is core written in plain js

