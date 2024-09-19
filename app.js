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

const parent = React.createElement(
    "div",
    { id: "parent"},
    React.createElement( 
        "div",
        { id: "child" },
        React.createElement(
            "h1",
            {},
            "I am an h1 tag!")
    )
);

root.render(parent);