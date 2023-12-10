import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div style={{backgroundColor:"#7E30E1"}}> <nav className="nav__center">
    <div className="nav__header">
      <div className="nav__logo">
        <h1>SHOPI<span>Q</span></h1>
      </div>
      <div className="nav__hamburger">
        <span>
          <svg>
            <use xlinkHref="" />
          </svg>
        </span>
      </div>
    </div>
    <div className="nav__menu">
      <div className="menu__top">
        <h1 className="nav__category">SHOPI<span>Q</span></h1>
        <div className="close__toggle">
          <svg>
            <use xlinkHref="./images/sprite.svg#icon-cross" />
          </svg>
        </div>
      </div>
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/" className="nav__link scroll-link">Home</a>
        </li>
        <li className="nav__item">
          <Link href="/Services" className="nav__link scroll-link">Services</Link>
        </li>
        <li className="nav__item">
          <a href="#blog" className="nav__link scroll-link">Blog</a>
        </li>
        <li className="nav__item">
          <a href="#newsletter" className="nav__link scroll-link">Subscribe</a>
        </li>
        <li className="nav__item">
          <Link href="/Login" className="nav__link">Login</Link>
        </li>
        <li className="nav__item">
          <Link href="/Login" className="nav__link">Register</Link>
        </li>
      </ul>
      <ul className="nav__icons">
        <a href="#" className="icon__item">
          <svg>
            <use xlinkHref="./images/sprite.svg#icon-search" />
          </svg>
        </a>
        <a href="#" className="icon__item">
          <svg>
            <use xlinkHref="./images/sprite.svg#icon-user" />
          </svg>
        </a>
        <a href="#" className="icon__item">
          <svg>
            <use xlinkHref="./images/sprite.svg#icon-shopping-basket" />
          </svg>
          <span>2</span>
        </a>
      </ul>
    </div>
  </nav></div>
  )
}
