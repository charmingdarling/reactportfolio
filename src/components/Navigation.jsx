import { Link } from "react-router-dom"; // Importing a Link component

// React components are modularized into smaller chunks of your app
// Components can receive data. We can display additional components within other components

// The `Navigation component is a child of our `App` component and is responsible for rendering the useLocation().pathname, defined by the currentPage variable in our App.jsx file

// const Navigation = (props) => {...}
// props - no matter how many properties passed to a component, they are received on the other end; they will be inside a single argument (props.page)
// We can destructure `page` from the props object, replace props in {} with page, because props has a property called page

// The return statement contains our navigation
// Link component is used to create links to different routes
// All components return JSX -> {}
const Navigation = ({page}) => {
  return (
    <nav>
      {/*Using Link component with a `to` property  */}
      {/*  */}
      <Link className={`${page==='/' && 'active'}`} to="/">Home</Link>|
      <Link className={`${page==='/portfolio' && 'active'}`} to="/portfolio">Portfolio</Link>|
      <Link className={`${page==='/contact' && 'active'}`} to="/contact">Contact</Link>|
      <Link className={`${page==='/resume' && 'active'}`} to="/resume">Resume</Link>|
    </nav>
  );
};

export default Navigation;
