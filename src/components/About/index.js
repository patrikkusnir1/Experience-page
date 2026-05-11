import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faCss3,
//     faGitAlt,
//     faSquareJs,
//     faReact,
// } from '@fortawesome/free-brands-svg-icons';
import {faSkullCrossbones, faTablets, faFlask, faCapsules, faBong, faVial} from '@fortawesome/free-solid-svg-icons'
import Loader from "react-loaders";

const About = () => {
    const [letterClass, setLetterClass] = useState("text-animate")

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => {
            clearTimeout(timeoutId)
        };
    }, [])

    return (
      <>
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I'm a pharmacist with professional experience in toxicology and
              quality assurance within the pharmaceutical industry.
            </p>
            <p>
              I'm naturally curious, detail-oriented, and always striving to
              improve both personally and professionally.
            </p>
            <p>
              Outside of work, I'm a husband, chess enthusiast, train travel
              lover, and lifelong learner with a strong passion for
              pharmaceuticals, science, and technology. In my free time, I enjoy
              studying programming and web development.
            </p>
          </div>
          <div className="stage-cube-cont">
            <div className="cube-spinner">
              <div className="face1">
                <FontAwesomeIcon icon={faSkullCrossbones} color={'#dd0033'} />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faTablets} color={'#f06529'} />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faFlask} color={'#28a4d9'} />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faCapsules} color={'#5ed4f4'} />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faBong} color={'#efd81d'} />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faVial} color={'#ec4d28'} />
              </div>
            </div>
          </div>
        </div>
        <Loader type="pacman" />
      </>
    )
}
export default About