import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Menu = () => {
  return (
    <div> <h1>Menu</h1>
    <Link to="/abc">abc</Link><br />
    <Link to="/bbc">bbc</Link><br />
    <Link to="/ccd">ccd</Link><br /> </div>
  )
}

export default Menu