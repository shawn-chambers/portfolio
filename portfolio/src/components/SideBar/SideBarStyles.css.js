import styled from 'styled-components';
import LinLibertine from '../../assets/fonts/LinLibertine_aDRS.ttf';

export const SideBarContainer = styled.div`
  #side-bar {
    position: absolute;
    top: 0;
    width: 10em;
    left: 0;
    background-color: #f6f6f6;
    height: 100%;
    cursor: help;
  }

  .menu-top {
    margin: 20px 20px 20px 20px;
    text-align: center;
  }

  .logo {
    position: relative;
    max-height: 100px;
    z-index: 300;
  }

  .header-mini {
    font-size: 12px;
    transform: scaleY(1.2);
  }

  .sub-header-mini {
    font-size: 12px;
    letter-spacing: .6px;
  }

  .side-bar-content {
    font-size: .75em;
    line-height: 1.125em;
    font-family: sans-serif;
  }

  .side-gradient-header {
    position: absolute;
    top: 0;
    width: 10em;
    left: 0;
    height: 5em;
    background-color: #fbfbfb;
    background-image: -webkit-linear-gradient(top,#ffffff 50%,#f6f6f6 100%);
  }
  
  .side-bar-label {
    font-size: .70em;
    color: #54595d;
    font-weight: normal;
    background-image: linear-gradient(to right,rgba(200,204,209,0) 0,#c8ccd1 33%,#c8ccd1 66%,rgba(200,204,209,0) 100%);
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% 1px;
    padding-inline-start: 20px;
    margin-top: 15px;
  }

  ul {
    padding-inline-start: 20px;
    margin: 8px 0px;
  }

  li {
    list-style-type: none;
    color: #0645ad;
    padding: .25em 0;
  }

  @font-face {
    font-family: 'Shawnipedia';
    src: local('LinLibertine'), 
    url(${LinLibertine}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }


`;