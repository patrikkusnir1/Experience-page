import React, { useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import experience from "../../Experience/data/experience"
import { useEffect } from "react";



const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const renderExperience = (experience) => {
    return (
      <div className="experience-container">
        {experience.map((exp, idx) => {
          return (
            <div className="experience-card" key={idx}>
              <div className="logo-wrapper">
                <img
                  src={exp.cover}
                  className={`experience-image ${
                    idx === 3 ? 'university-logo' : ''
                  }`}
                  alt={exp.name}
                />
              </div>
              <div className="experience-content">
                <p className="experience-title">{exp.title}</p>
                <p className="experience-company">{exp.name}</p>
                <p className="experience-duration">{exp.duration}</p>
                <p className="experience-description">{exp.description}</p>
                <div className="btn-group">
                  <button className="btn" onClick={() => window.open(exp.url)}>
                    View company website
                  </button>

                  {exp.recommendation && (
                    <a
                      href={`${process.env.PUBLIC_URL}${exp.recommendation}`}
                      download
                      className="btn flat-btn"
                    >
                      Download recommendation letter
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <>
      <div className="container experience-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Experience'.split('')}
            idx={15}
          />
        </h1>
        {/* render experience content */}
        <div>{renderExperience(experience)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Experience