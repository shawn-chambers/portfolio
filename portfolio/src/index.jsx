import React from 'react';
import ReactDOM from 'react-dom';
import Top from './components/Top/Top';
import { GlobalStyle } from './Style/global.styles.css';

const App = () => {
  return (
    <>
    <GlobalStyle/>
      <Top />
    </>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));