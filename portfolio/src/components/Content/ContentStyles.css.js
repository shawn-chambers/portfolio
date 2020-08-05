import styled from 'styled-components';

export const ContentContainer = styled.div`
  font-family: sans-serif;

  .content-gradient-header {
    position: absolute;
    top: 0;
    width: 100%;
    left: 10em;
    height: 5em;
    background-color: #fbfbfb;
    background-image: -webkit-linear-gradient(top,#ffffff 50%,#f6f6f6 100%);
  }

  .content-header {
    position: absolute;
    bottom: 15px;
    font-size: 14px;
  }
  
  .content-header > ul {
    padding-left: 0px;
  }

  .tab {
    float: left;
    height: 20px;
    list-style: none;
    font-size: 13px;
    color: #0645ad;
  }

  span:nth-child(1) {
    font-size: 1em;
  }

  span:nth-child(3) {
    font-size: 1em;
  }

  .unselected {
    height: 100%;
    padding: 1.25em 8px 0px 8px;
    background-image: linear-gradient(to top,#77c1f6 0,#e8f2f8 1px,#ffffff 100%);
    background-size: 1px 100%;
  }

  .selected {
    color: black;
    height: 100%;
    width: 100%;
    padding: 1.25em 8px 0px 8px;
    background: #ffffff;
    background-image: linear-gradient(to bottom,rgba(167,215,249,0) 0,#a7d7f9 100%);
    background-repeat: no-repeat;
    background-size: 1px 100%;
  }

  

  .content-header-container {
    position: absolute;
    top: 0;
    width: 100%;
    left: 10em;
    height: 5em;
  }

  .content-container {
    z-index: -1;
    position: absolute;
    top: 5em;
    width: auto;
    left: 10em;
    border: 1px solid #a7d7f9;
    border-right-width: 0;
    line-height: 1.6;
  }

  .content-subheader {
    font-size: 92%;
  }

  .content-body {
    padding: 1.25em 1.5em 1.5em 1.5em;
    background-color: white;
    font-size: 14px;
  }

  h1 {
    font-style: italic;
    margin-bottom: 0px;
    margin-top: 0px;
  }

  hr {
    margin-top: 0px;
  }

  .keyword {
    font-weight: bold;
    font-style: italic;
  }

  `;


  /*
  background-image: linear-gradient(to top,#77c1f6 0,#e8f2f8 1px,#ffffff 100%); <--- not active
  */