import React, {Component} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import project1 from "../images/mcmbook.jpg"

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
  render(){
    return(
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

         <Parallax ref={ref => (this.parallax = ref)} pages={4}>
            <ParallaxLayer  offset={0} speed={0} style={{ backgroundColor: 'rgba(0, 21, 255, 0.9)' }}/>
            <ParallaxLayer  offset={1} speed={0} style={{ backgroundColor: 'rgba(0, 10, 122, 0.9)' }}/>
            <ParallaxLayer  offset={2} speed={0} style={{ backgroundColor: 'rgba(0, 6, 64, 0.9)' }}/>
            <ParallaxLayer  offset={3} speed={0} factor={2} style={{ backgroundColor: 'rgba(0, 64, 255, 0.9)' }}/>
            {/* HEADER */}
            <ParallaxLayer offset={0} speed={1}>
              <Header/>
            </ParallaxLayer>

            {/* ABOUT */}
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
            <ParallaxLayer offset={2} speed={1}>
              <Project/>
            </ParallaxLayer>  
            <ParallaxLayer offset={2} speed={1.3} style={{ pointerEvents: 'none' }}>
              <a href="#">
              <img id="project1" src={project1} style={{ width: '450px',height:'400px', borderRadius:'50%' }} />
              </a>
            </ParallaxLayer>

            {/* CONTACT */}
              <ParallaxLayer offset={3} speed={0.1} style={{ pointerEvents: 'all' }}>
                <div id="contact-h">
                  <h1>Contact</h1>  
                </div>
              </ParallaxLayer>
              <ParallaxLayer offset={3} speed={1}   style={{pointerEvents: 'all'}}>
              <Contact/>
                <a id="facebook" className="social" href="www.facebook.com"><FaFacebook /></a>
                <a id="twitter" className="social" href="#"><FaTwitter/></a>
                <a id="instagram" className="social" href="#"><FaInstagram/></a> 
              </ParallaxLayer>               

          </Parallax> 
  </Layout>
     )
  }
}
export default IndexPage
