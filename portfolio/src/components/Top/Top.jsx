import React from 'react';
import { TopContainer } from './TopStyles.css';
import Logo from '../Logo/Logo';



const Top = () => {
  return (
    <>
      <div className='header'><span>S</span><span>HAWNIPEDI</span><span>A</span></div>
      <div className='sub-header'>The Shawn Encyclopedia</div>
      <TopContainer>
        <div className='center-container'>
          <div className='logo-container'>
            <Logo/>
          </div>
            {[...Array(10)].map((d, i) => {
              return (
                <div key={i + 1} className={`center-container-link link${i + 1}`}>
                  {`Link ${i + 1}`}
                </div>
                )
              })}
        </div> 
      </TopContainer>
    </>
    )
}

export default Top;