import React, { Component } from 'react';
import { Carousel } from 'antd';
import './App.css';
import $ from 'jquery';
import Home from './js/Home';
import Enterprise from './js/Enterprise';
import Finance from './js/Finance';
import AboutMe from './js/AboutMe';
import News from './js/News';
import Detail from './js/Detail';
import Bank from './js/Bank';
import Weiche from './js/Weiche'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state={
      nav:[]
    }
  }
  componentDidMount(){

      $.ajax({
        type:"post",
        url:"http://localhost:8005/app/nav",
        async:true,
        contentType:false,
        processData:false,
        success:function(con){
          this.setState({
            nav:con
          })  
        }.bind(this)      
         
      })

    $.ajax({
        type:"get",
        url:"http://localhost:8005/app/logo",
        async:true,
        contentType:false,
        processData:false,
        success:function(e){
          this.setState({
            logo:e[0].logo,
            logo2:e[1].logo
          })  
        }.bind(this)      
         
      })
  	$(function(){
      //点击nav和logo，top值为0
      $('.wl_nav li:first').addClass('active');
  		$('.wl_nav li').click(function(){
        (document.body.scrollTop=0)||(document.documentElement.scrollTop=0)
  			$(this).addClass('active').siblings().removeClass('active');
  		})
      $('.wl_nav li:last').click(function(){
          $('#headerS').css("display",'none');
          $('#header').css("display",'block');
      })
      $('#nav_color li:first').css('color','#295ea8');
      $('#nav_color li').click(function(){
        $(this).css('color','#295ea8').siblings().css('color','');
      })

      $('.wl_logo').click(function(){
        (document.body.scrollTop=0)||(document.documentElement.scrollTop=0)
      })

  	})
  }
  render() {
    return (
      <Router>
      <div>
  	    <div className="wl_fixed">
            <div className="wl_header clear" id="header">
                <div className="wl_merge clear">
                    <Link to="/"  className="wl_logo left"><img src={this.state.logo} alt="logo"/></Link> 
                     <ul className="right wl_nav">
                         {this.state.nav.map(function(con,i){
                            return(
                                <li><Link key={i} to={`${con.to}`}>{con.nav}</Link></li>
                            )
                         })}
                        
                     </ul>          
                </div>  
            </div>
             <div className="wl_header clear" id="headerS">
                <div className="wl_merge clear">
                    <Link to="/"  className="wl_logo left"><img src={this.state.logo2} alt="logos"/></Link> 
                     <ul className="right wl_nav" id="nav_color">
                        {this.state.nav.map(function(con,i){
                            return(
                                <li><Link key={i} to={`${con.to}`}>{con.nav}</Link></li>
                             )
                         })}
                     </ul>          
                </div>  
            </div>
        </div>
  	      <Route exact path="/" component={Home}/>
          <Route path="/Enterprise" component={Enterprise}/>
          <Route path="/Finance" component={Finance}/>
          <Route path="/AboutMe" component={AboutMe}/>
          <Route path="/News" component={News}/>
          <Route path="/Detail" component={Detail}/>
          <Route path="/Bank" component={Bank}/>
          <Route path="/Weiche" component={Weiche}/>
         
      </div>
  </Router>
    );
  }
}

export default App;
