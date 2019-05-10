import React, {Component} from 'react'
import {Transition,animated} from 'react-spring'
import {Link} from 'react-scroll'

export default class Navbar extends Component {

  render() {

    return (
      <nav className="navbar">
        <ul id="nav-desktop">
          <li><Link className="link-desk" to="about" spy={true} smooth={true} duration={500}>about</Link></li>
          <li><Link className="link-desk" to="projects" spy={true} smooth={true} duration={500}>projects</Link></li>
          <li><Link className="link-desk" to="contact" spy={true} smooth={true} duration={500}>contact</Link></li>	
        </ul>
        {/* <ul id="nav-mobile">
          <li>About</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>         */}
      </nav>
    )
  }
}
