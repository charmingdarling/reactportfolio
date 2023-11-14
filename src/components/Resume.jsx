// A component is a function that returns jsx 
// Can be a function expression - const = thisFunction ({component}) => {...}
// OR can be a function definition - function Navigation ({component})
// 

import { Link } from "react-router-dom"; // Importing a Link component; Link component is used to create links to different routes

const Resume = () => {
  return(<h1>Resume</h1>);
};

export default Resume;