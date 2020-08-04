import styled from 'styled-components';

export const ContentsBoxContainer = styled.div`

  .box-container {
    border: 1px solid #a2a9b1;
    background-color: #f8f9fa;
    padding: 7px;
    display: table;
    line-height: 1.6;
    width: auto;
    height: auto;
  }

  .box-header {
    margin-top: -14px;
    margin-bottom: -14px;
    display: flex;
    justify-content: center;
  }

  h3 {
    text-align: center;
    font-size: 14px;
    left: auto;
  }

  .expander {
    margin: 14px 0px 0px 4px;
    font-size: 94%;
    cursor: pointer;
    color: #0645ad;
  }

  .content-number {
    color: #202122;
    padding-left: 0;
    padding-right: 0.5em;
  }

  ul {
    padding-left: 0px;
    font-size: 94%;
  }

  .sub-entry {
    margin: 0 0 0 2em;
  }

  a {
    text-decoration: none;
    color: #0645ad;
  }

`;