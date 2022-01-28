import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import cvPDF from "../images/CV-Summer-2021-Wickerson-ArtDesign.pdf"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              <span className="small">{data.aboutParaThree}</span>
            </p>

            <a className="link" href={cvPDF} target="_blank" rel="noreferrer noopener">Download CV ></a>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
