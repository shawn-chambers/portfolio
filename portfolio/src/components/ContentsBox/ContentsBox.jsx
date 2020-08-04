import React, { useState } from 'react';
import { ContentsBoxContainer } from './ContentsBoxStyles.css';

const ContentsBox = () => {

  const [display, hideDisplay] = useState(true);

  return (
    <>
    <ContentsBoxContainer>
      <div className='box-container'>
        <div className='box-header'>
          <h3>Contents</h3>  
          <span  className='expander'>  [
            <span onClick={() => hideDisplay(!display)}>{display ? 'hide' : 'show'}</span>
            ]
          </span>
        </div>
        { display ? 
          <ul>
            <li>
              <a href='#content-header'>
                <span className='content-number'>1</span>
                <span>Technical Skills</span>
              </a>
            </li>
            <li>
              <a href='#content-header'>
                <span className='content-number'>2</span>
                <span>Applications</span>
              </a>
              <ul>
                <li className='sub-entry'>
                  <a href='#content-header'>
                    <span className='content-number'>2.1</span>
                    <span>Choose Your Own Adventure</span>
                  </a>
                </li>
                <li className='sub-entry'>
                  <a href='#content-header'>
                    <span className='content-number'>2.2</span>
                    <span>EbayProductDescription</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul> 
        : null
        }
      </div>
    </ContentsBoxContainer>

    </>
  )

}

export default ContentsBox;