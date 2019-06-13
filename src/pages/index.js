import React, {Component} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import { Transition, animated } from 'react-spring/renderprops'

import { FaExclamationTriangle, FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { TiArrowForwardOutline } from 'react-icons/ti'

import react from "../images/1200px-React-icon.svg.png"
import csharp from "../images/0_JLPdbimCEnWB8qJL.png"
import html from "../images/html.png"
import csss from "../images/css.png"
import jscript from "../images/jscript.png"
import reduxx from "../images/redux.png"
import aspnett from "../images/aspnet.png"
import sasss from "../images/sass.png"
import mongoo from "../images/mongodb.png"
import nodejs from "../images/nodejs.png"
import express from "../images/express.png"
import gatsbyy from "../images/gatsby-icon.png"

import Header from '../components/body/Header';
import About from "../components/body/About";
import Project from "../components/body/Project";
import Contact from "../components/body/Contact";

class IndexPage extends Component {
  state = { show: false }
  toggle = e => this.setState(state => ({ show: !state.show }))
  render(){
    return(
      <Layout>
        <SEO title="portfolio" keywords={[`gatsby`, `application`, `react`]} />
         
         <Parallax ref={ref => (this.parallax = ref)} pages={4}>
            <ParallaxLayer id="section0" offset={0} speed={0} />
            <ParallaxLayer id="section1" offset={1} speed={0} />
            <ParallaxLayer id="section2" offset={2} speed={0} />
            <ParallaxLayer id="section3" offset={3} speed={0} />
            {/* HEADER */}
            <ParallaxLayer offset={0} speed={1}>
              <Header/>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-1} scrolling={true}>
              <div id="arrow-down"></div>
            </ParallaxLayer>

            {/* ABOUT */}
            <ParallaxLayer offset={1} speed={0.5} style={{ pointerEvents: 'all' }}>
              <div id="contact-h">
                <h1>about</h1>  
              </div>  
            </ParallaxLayer>               
            <ParallaxLayer offset={1} speed={1}>
              <About/>
            </ParallaxLayer> 
            <ParallaxLayer offset={1} speed={1.5} style={{ pointerEvents: 'none' }}>
              <img id="react" className="lang lang-1" src={react} alt=""/>
              <img id="csharp" className="lang lang-1" src={csharp} alt=""/>
              <img id="aspnett" className="lang lang-2" src={aspnett} alt=""/>
              <img id="nodejs" className="lang lang-2" src={nodejs} alt=""/>
              <img id="mongoo" className="lang lang-2" src={mongoo} alt=""/>
              <img id="gatsbyy" className="lang lang-2" src={gatsbyy} alt=""/>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1.2} style={{ pointerEvents: 'none' }}>
              <img id="htmll" className="lang lang-2" src={html} alt=""/>
              <img id="csss" className="lang lang-2" src={csss} alt=""/>
              <img id="jscript" className="lang lang-2" src={jscript} alt=""/>
              <img id="reduxx" className="lang lang-2" src={reduxx} alt=""/>
              <img id="sasss" className="lang lang-2" src={sasss} alt=""/>
              <img id="express" className="lang lang-2" src={express} alt=""/>
            </ParallaxLayer>

            {/* PROJECT */}
            <ParallaxLayer offset={2} speed={0.1} style={{ pointerEvents: 'all' }}>
              <Project/>
            </ParallaxLayer>  
            <ParallaxLayer offset={2} speed={1}>
              <div id="project1">
                <div className="info">
                  <p>In this project will build an in depth full stack social network application using Node.js, Express, React, Redux and MongoDB along with ES6+.</p>
                  <button onClick={this.toggle} style={{background:'none',border:'none',cursor:'pointer',color:'rgb(3, 141, 255)'}}><TiArrowForwardOutline size="3rem" value={{className:"icon"}}/></button>
                </div>
              </div>
                  <Transition
                    items={this.state.show}
                    from={{ position: 'absolute', overflow: 'hidden', opacity:0}}
                    to={{ position: 'absolute', overflow: 'hidden', opacity:1}}
                    enter={[{ opacity: 1 }]}
                    leave={{ opacity: 0 }}
                  >
                    {show =>
                      show && (props => <animated.div style={props}>
                        <div id="warning">
                          <FaExclamationTriangle id="warning-icon"/>
                          <h1>warning</h1>
                          <p>The site is on a free domain, it will take time to open it.</p>
                          <div>
                            <button onClick={this.toggle} id="war-button"><FaArrowLeft style={{marginBottom:'-5px'}}/> back</button><a id="war-button" target="_blank" href="https://quiet-hollows-55212.herokuapp.com/">continue <FaArrowRight style={{marginBottom:'-5px'}}/></a>
                          </div>
                          
                        </div>
                      </animated.div>)
                    }
                  </Transition>              
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.5} style={{ pointerEvents: 'none' }}>
                <div className="warning-main">

                </div>              
            </ParallaxLayer>

            {/* CONTACT */}
              <ParallaxLayer offset={3} speed={0.1} style={{ pointerEvents: 'all' }}>
                <div id="contact-h">
                  <h1>Contact</h1>  
                </div>
              </ParallaxLayer>
              <ParallaxLayer offset={3} speed={1.6}   style={{pointerEvents: 'all'}}>
                <Contact/>

              </ParallaxLayer>                

          </Parallax> 
      </Layout>
     )
  }
}
export default IndexPage
