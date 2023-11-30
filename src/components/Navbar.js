import React, { useState, useEffect } from "react";

import ".Navbar.css";

const Navbar = () => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // ?
  useEffect(() => {
    const
  })

  // change navbar color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90)
      //using 90 because this is the height of the header
      setColor(true);
  } else {
      setColor(false)
  }
}

window.addEventListener('scroll', changeColor)

return (
  <>
    <div className{ color ? 'header header-bg' : 'header'}>

    </div>
  </>
)