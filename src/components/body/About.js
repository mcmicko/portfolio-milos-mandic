import React, { Component } from 'react'
import react from "../../images/1200px-React-icon.svg.png"
import csharp from "../../images/0_JLPdbimCEnWB8qJL.png"
import html from "../../images/html.png"
import csss from "../../images/css.png"
import jscript from "../../images/jscript.png"
import reduxx from "../../images/redux.png"
import aspnett from "../../images/aspnet.png"
import sasss from "../../images/sass.png"
import mongoo from "../../images/mongodb.png"
import nodejs from "../../images/nodejs.png"
import express from "../../images/express.png"
import gastbyy from "../../images/gatsby-icon.png"

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="about">
          <div id="about-inner">
            <div id="about-wrapper">
              <div id="about-content">
                <h1>about</h1>
                <p>
                  Hello, my name is Milos, I'm 26 years old and I live in Zrenjanin, Serbia. <br/>
                  I have a degree from the Technical Faculty in Zrenjanin, in the field of Industrial Engineering. <br/>
                  My passion is to programing. My hobby grew into love. I like to create something new and funcional in a blank page, and that other people benefit from it. <br/>
                </p>
              </div>      
            </div>      
          </div>
        </div>        

        <div id="lang-mobile">
          <img className="icon-mobile" src={react} alt=""/>
          <img className="icon-mobile" src={csharp} alt=""/>
          <img className="icon-mobile" src={aspnett} alt=""/>
          <img className="icon-mobile" src={nodejs} alt=""/>
          <img className="icon-mobile" src={mongoo} alt=""/>   
          <img className="icon-mobile" src={html} alt=""/>
          <img className="icon-mobile" src={csss} alt=""/>
          <img className="icon-mobile" src={jscript} alt=""/>
          <img className="icon-mobile" src={reduxx} alt=""/>
          <img className="icon-mobile" src={sasss} alt=""/>
          <img className="icon-mobile" src={express} alt=""/>     
          <img className="icon-mobile" src={gastbyy} alt=""/>     
        </div>
      </React.Fragment>

    )
  }
}
