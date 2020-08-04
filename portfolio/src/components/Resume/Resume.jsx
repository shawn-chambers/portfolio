import React from 'react';
import SideBar from '../SideBar/SideBar';
import Content from '../Content/Content';
import { ResumeContainer } from './ResumeStyles.css';

const Resume = () => {
  return (
    <>
    <ResumeContainer>
      <SideBar/>
      <Content/>
    </ResumeContainer>
    </>
  )
} 

export default Resume;

/*
gradiant top:
background-image: -webkit-linear-gradient(top,#ffffff 50%,#f6f6f6 100%);

*/