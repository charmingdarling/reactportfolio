import { NavLink } from "react-router-dom"; // Importing a Link component
import { Button, Navbar, Nav } from "react-bootstrap";

// React components are modularized into smaller chunks of your app
// Components can receive data. We can display additional components within other components

// The `Navigation component is a child of our `App` component and is responsible for rendering the useLocation().pathname, defined by the currentPage variable in our App.jsx file

// const Navigation = (props) => {...}
// props - no matter how many properties passed to a component, they are received on the other end; they will be inside a single argument (props.page)
// We can destructure `page` from the props object, replace props in {} with page, because props has a property called page

// The return statement contains our navigation
// Link component is used to create links to different routes
// All components return JSX -> {}

const Navigation = () => {
  const links = [
    { page: "Home", link: "/" },
    { page: "Portfolio", link: "/portfolio" },
    { page: "Contact", link: "/contact" },
    { page: "Resume", link: "/resume" },
  ];
  return (
    <Navbar
      style={{
        position: "fixed",
        zIndex: 10,
        backgroundColor: "rgba(255,255,255,0.4)",
      }}
      sticky="top"
      expand="lg"
    >
      <Nav className="me-auto" style={{ backgroundColor: "inherit" }}>
        {links.map((pageLink) => (
          <Nav.Link as={NavLink} to={pageLink.link} key={pageLink.page}>
            {pageLink.page}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar>
  );
};

export default Navigation;

// Pages You're going to need to put margin/padding on the top of your body

// function myMap(cb){
//   this = []
//   for(let i=0;i<this.length; i++){
//     const itemToAdd = cb(this[i], i, this)
//     this.push(itemToAdd)
//   }
//   return this
// }
