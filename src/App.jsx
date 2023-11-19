// react-router-dom has an Outlet property to output the children
// useLocation is a hook from react-router-dom library [useState() is similar]

import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // variable that holds the value of our location/current page
  // console.log(currentPage), when the pathname of the current page where you navigated to is shown in the console log you see '/pathname: xpagenamex', so we are going to add it to useLocation();
  // useLocation hook is used to get information about the current URL. It returns an object that represents the current location, including properties like `pathname`, `search`, `state`...etc.
  const currentPage = useLocation().pathname; // currentPage is assigned the current path of the URL "/portfolio" or "/contact", etc
  // useLocation() returns an object,
  // .pathname is used to access the pathname property of that object
  // the pathname property represents the current URL's path, which is the part of the URL after the domain '/'
  console.log(currentPage);

  // The return statement contains JSX. It's a syntax extension for JavaScript and is a popular JS library for building UIs.
  // JSX lets you write HTML-like code in your JavaScript files making it easier to describe the structure of your UI.
  // JSX gets converted into JS by tools like Babel before it is rendered in the browser.
  // Expressions in JSX should be placed in curly braces {}

  return (
    <div>
      {/* Comments within the return statement must be wrapped in curly braces and syntactically resemble JS mult-line comments*/}
      {/* When rendering a React child component, JSX syntax resembles that of HTML rather than function expression such as `ReactList()` */}
      <Navigation page={currentPage} />
      {/* Like main.handlebars body?*/}
      <Outlet />
    </div>
  );
}

export default App;
