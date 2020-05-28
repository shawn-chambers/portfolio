import React from 'react';
import {MainContainer} from '../Top/MainStyles.css';
import Logo from '../Logo/Logo';



const Main = () => {
  return (
    <>
      <h1 style={{display: 'flex', justifyContent: 'center'}}>Shawnipedia</h1>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <MainContainer>
          <div id='container'>
            {[...Array(8)].map((d, i) => {
              return (
                <div key={i + 1} className='link'>
                  {`Link ${i + 1}`}
                </div>
                )
              })}
              <Logo/>
          </div>
        </MainContainer>
      </div>
    </>
    )
}

export default Main;