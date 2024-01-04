import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <section id="header">
        <a href="#">
          <img
            className="logo1 logo"
            src="/img/logo1.png"
            width="100px"
          />
        </a>

        <div>
          <ul id="navbar">
            <li>
              <a href="/">
                Home
              </a>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li id="lg-bag">
              <Link to="/cart">
                <i className="fas fa-shopping-bag"></i>
              </Link>
            </li>
            <a href="#" id="close">
              <i className="fas fa-times"></i>
            </a>
          </ul>
        </div>

        <div id="mobile">
          <li>
            <Link to="/cart">
              <i className="fas fa-shopping-bag"></i>
            </Link>
          </li>
          <div id="bar" className="fas fa-outdent"></div>
        </div>
      </section>
    </>
  );
}
