import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import data from "../yourdata"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          > <img src={data.icon} alt={data.name} width="30" />
            {data.name}
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>WORK</button>
            <button onClick={() => scrollTo("#about")}>ABOUT</button>
            <button onClick={() => scrollTo("#contact")}>CONTACT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
