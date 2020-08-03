import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Top from './components/Top/Top';
import Resume from './components/Resume/Resume';
import { GlobalStyle } from './Style/global.styles.css';

const App = () => {
  return (
    <>
    <GlobalStyle/>
      <BrowserRouter>
        <Route path="/" exact component={Top}/>
        <Route path="/resume" exact component={Resume}/>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));