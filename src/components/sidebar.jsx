import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/andrew.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Andrew Zhang</a></h1>
              <span className="email"><i className="icon-mail"></i> yzhan289@jhu.edu</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/yzhan289/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /> LinkedIn</a></li>
                <li><a href="https://github.com/Dhruv34788" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i> GitHub</a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>Welcome to my site! </p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}