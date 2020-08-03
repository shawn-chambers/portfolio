import React from 'react';
import smallLogo from '../../assets/images/small_shawnipedia.png';
import { SideBarContainer } from './SideBarStyles.css';

const SideBar = () => {
  return (
    <>
      <SideBarContainer>
        <div id='side-bar'>
          <div className='menu-top'>
            <div className='side-gradient-header'></div>
            <img src={smallLogo} className='logo' alt='Icon'/>
            <div className='header-mini'><span>S</span><span>HAWN CHAMBER</span><span>S</span></div>
            <div className='sub-header-mini'>Web Developer - CA</div>
          </div>
          <div className='side-bar-content'>
            <nav>
              <ul>
                <li>Main page</li>
                <li>Contents</li>
                <li>Current events</li>
                <li>Random article</li>
                <li>About Shawnipedia</li>
                <li>Contact us</li>
              </ul>
            </nav>
            <nav>
              <h3 className="side-bar-label">
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
              <h3 className="side-bar-label">
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
              <h3 className="side-bar-label">
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
              <h3 className="side-bar-label">
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
      </SideBarContainer>
    </>
  )
}

export default SideBar;