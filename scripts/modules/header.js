import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component{

  render(){
    return (
      <section className="site-header">
        <div className="header-content">
          <h1>Welcome to Blizzard, Girl Scouts!</h1>
        </div>
      </section>
    );
  }
}