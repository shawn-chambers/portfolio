import React from 'react';
import SideBar from '../SideBar/SideBar';
import SideBar2 from '../SideBar/SideBar2';
import Content from '../Content/Content';
import { ResumeContainer } from './ResumeStyles.css';

const Resume = () => {
  return (
    <>
    <ResumeContainer>
      {/* <SideBar/> */}
      <SideBar2/>
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