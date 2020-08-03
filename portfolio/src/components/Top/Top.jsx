import React from 'react';
import { TopContainer } from './TopStyles.css';
import Logo from '../Logo/Logo';
import Links from '../Links/Links';



const Top = () => {
  return (
    <>
      <div className='header'><span>S</span><span>HAWN CHAMBER</span><span>S</span></div>
      <div className='sub-header'>Web Developer - Sacramento, CA</div>
      <TopContainer>
        <div className='center-container'>
          <div className='logo-container'>
            <Logo/>
          </div>
          <Links/>
        </div> 
      </TopContainer>
    </>
    )
}

export default Top;