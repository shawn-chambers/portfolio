import React from 'react';
import ContentsBox from '../ContentsBox/ContentsBox';
import { ContentContainer } from './ContentStyles.css';

const Content = () => {
  return (
    <ContentContainer>
      <div className='content-gradient-header'></div>
      <div className='content-header-container'>
        <div className='content-header'>
          <div className='header-tabs right-tabs'>
            <ul>
              <li className='tab'>
                <div className='selected tab'>
                  Article
                </div>
              </li>
              <li className='tab'>
                <div className='unselected tab'>
                  Talk
                </div>
              </li>
            </ul>
          </div>
          <div className='header-tabs left-tabs'>
            <ul>
              <li className='tab'>
                <div className='selected tab'>
                  Read
                </div>
              </li>
              <li className='tab'>
                <div className='unselected tab'>
                  View source
                </div>
              </li>
              <li className='tab'>
                <div className='unselected tab'>
                  View history
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='content-container'>
        <div className='content-body'>
          <h1>Shawn Chambers</h1>
          <hr></hr>
          <p className='content-subheader'>From Shawn Chambers, the foremost expert on <span className='keyword'>Shawn Chambers</span></p>
          <p>
            <span className='keyword'>Shawn Chambers</span> is a Full Stack Engineer currently living in the Sacramento area of Northern California. He enjoys playing guitar (electric, acoustic, and bass) for his noisy creative outlet and enjoys drawing as his ‘quiet, the kids are sleeping’ cathartic time.
          </p>
          <ContentsBox/>
        </div>
      </div>
    </ContentContainer>
  );
}

export default Content;

/*
https://en.wikipedia.org/w/skins/Vector/resources/skins.vector.styles/images/tab-current-fade.png?22887
*/