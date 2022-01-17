import React from "react";
import { Link } from "react-router-dom";
import smallLogo from "../../assets/images/small_shawnipedia.png";

const SideBar = () => {
  return (
    <>
      <div className="side-bar">
        <div className="side-bar__menu">
          <Link to="/">
            <img src={smallLogo} className="side-bar__menu--logo" alt="Icon" />
            <div className="side-bar__menu--header-mini">
              <span>S</span>
              <span>HAWN CHAMBER</span>
              <span>S</span>
            </div>
            <div className="side-bar__menu--sub-header-mini">
              Web Developer - CA
            </div>
          </Link>
        </div>
        <div className="side-bar__content">
          <nav>
            <ul>
              <Link to="/">
                <li>Main page</li>
              </Link>
              <Link to="/resume/experience">
                <li>Experience</li>
              </Link>
              <Link to="/resume/projects">
                <li>Projects</li>
              </Link>
              <a
                className="footer__link"
                href="https://drive.google.com/file/d/1ZFevsxKxIhBqYq_eFTmDkPCR2uVr0n5d/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li>Resumé</li>
              </a>
              <li>About Shawnipedia</li>
              <Link to="/resume/contact%20info">
                <li>Contact Shawn</li>
              </Link>
            </ul>
          </nav>
          <nav>
            <h3 className="side-bar__label">
              <span>Contribute</span>
            </h3>
            <div>
              <ul>
                <li>Help</li>
                <li>Community portal</li>
                <li>Recent changes</li>
                <li>Upload file</li>
              </ul>
            </div>
          </nav>
          <nav>
            <h3 className="side-bar__label">
              <span>Tools</span>
            </h3>
            <div>
              <ul>
                <li>What links here</li>
                <li>Related changes</li>
                <li>Special pages</li>
                <li>Permanent link</li>
                <li>Page information</li>
                <li>Cite this page</li>
                <li>Wikidata item</li>
              </ul>
            </div>
          </nav>
          <nav>
            <h3 className="side-bar__label">
              <span>Print/export</span>
            </h3>
            <div>
              <ul>
                <li>Download as PDF</li>
                <li>Printable version</li>
              </ul>
            </div>
          </nav>
          <nav>
            <h3 className="side-bar__label">
              <span>Languages</span>
            </h3>
            <div>
              <ul>
                <li>JavaScript</li>
                <li>Pig latin</li>
                <li>Klingon</li>
                <li>Nadsat</li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideBar;
