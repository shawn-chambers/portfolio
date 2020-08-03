import styled from 'styled-components';
import LinLibertine from '../../assets/fonts/LinLibertine_aDRS.ttf';

export const ResumeContainer = styled.div`
  @font-face {
    font-family: 'Shawnipedia';
    src: local('LinLibertine'), 
    url(${LinLibertine}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  .gradient-header {
      position: absolute;
      z-index: 1;
      top: 0;
      width: 100%;
      left: 0;
      height: 5em;
      background-color: #fbfbfb;
      background-image: -webkit-linear-gradient(top,#ffffff 50%,#f6f6f6 100%);
    }

`;