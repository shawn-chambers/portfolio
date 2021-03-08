import styled from 'styled-components';

export const ContentContainer = styled.div`
  font-family: sans-serif;

  .content-gradient {
    position: absolute;
    top: 0;
    width: calc(100% - 10em);
    left: 10em;
    height: 5em;
    background-color: #fbfbfb;
    background-image: -webkit-linear-gradient(top,#ffffff 50%,#f6f6f6 100%);
  }

  .content-header-container {
    display: flex;
    position: absolute;
    top: 0;
    width: calc(100% - 10em);
    left: 10em;
    height: 5em;
  }

  .content-header {
    position: absolute;
    width: 100%;
    bottom: 15px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    padding-left: 0px;
    float: left;
    margin-top: 20px;
  }

  .tab {
    float: left;
    height: 22px;
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

  .searchbar-container {
    padding: .4em 8px 0px 8px;
  }

  .searchbar {
    position: relative;
  }

  .searchbar > input {
    border: 1px solid #a2a9b1;
    color: grey;
    padding: 0.4em 2em 0.4em 0.4em;
  }

  .searchbar > img {
    top: 8px;
    right: 5px;
    position: absolute;
    height: 12px
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