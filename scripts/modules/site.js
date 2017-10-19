import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';

export default class Site extends React.Component{

  render(){
    return (
      <div className="react-container">
        <Header/>
      </div>
    );
  }
}