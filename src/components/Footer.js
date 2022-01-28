import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
          </Fade>
          <h2 className="email-link">{data.contactEmail}</h2>
          <h3>{data.contactSubHeading}</h3>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
                <small>{socialLink.title}</small>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
