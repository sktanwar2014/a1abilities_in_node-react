import React, { Component } from 'react'
import {Link} from 'react-router-dom';



export class Navbar extends Component {
    render() {
        return (
      <div  id="home">          
        <div class="headder-top fixed-top">
          <div id="logo">
            <h1>
              <a href="/"><img src="images/A1Abilities Logo Bha Sa12.png" alt="" width="220" /></a>
            </h1>
          </div>
          <nav class="float-right">
          <label for="drop" class="toggle">Menu</label>
        <input type="checkbox" id="drop"></input>
            
        
           
            <ul class="menu pt-4 pr-5">
            <li>
                <a href="http://coronacheckarona.com/">Covid-19 Test</a>
              </li>
             
              <li>
                <a href="#services">Services</a>
              </li>
               <li>
                <a href="#technology">Technology</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>             
                <a href="#goals">Goals</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
          
          <div class="form-w3layouts-grid">
           <form action="#" method="post" class="newsletter">
              <div class="main-building">             
              </div>
              <div class="clearfix"></div>
            </form>
          </div> 
        </div>
        </div>
       
 
        )
    }
}

export default Navbar
