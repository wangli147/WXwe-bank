import React, { Component } from 'react';
import { Carousel } from 'antd';
import './App.css';
import $ from 'jquery';
import Home from './js/Home';
import Enterprise from './js/Enterprise';
import Finance from './js/Finance';
import AboutMe from './js/AboutMe';
import News from './js/News';

import logo from './imgs/logo.png';
import logos from './imgs/logo2.png';

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
        url:"http://localhost:8005/home/nav",
        async:true,
        contentType:false,
        processData:false,
        success:function(e){
          this.setState({
            nav:e
          })        
          console.log(e)
            }
      });
  	$(function(){
  		$('.wl_nav li').click(function(){
  			$(this).addClass('active').siblings().removeClass('active');
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
                    <Link to="/"  className="wl_logo left"><img src={logo} alt="logo"/></Link> 
                     <ul className="right wl_nav">
                     {this.state.nav.map(function(e,i){
                        return(
                            <div>
                                <li className="active"><Link to="/">首页</Link></li>
                                <li><Link to="/Enterprise">企业金融</Link></li>
                                <li><Link to="/Finance">个人金融</Link></li>
                                <li><Link to="/AboutMe">关于我们</Link></li>
                                <li><Link to="/News">公告新闻</Link></li>
                            </div>
                        )
                     })}
                        
                     </ul>          
                </div>  
            </div>
             <div className="wl_header clear" id="headerS">
                <div className="wl_merge clear">
                    <Link to="/"  className="wl_logo left"><img src={logos} alt="logos"/></Link> 
                     <ul className="right wl_nav">
                        <li className="active"><Link to="/">首页</Link></li>
                        <li><Link to="/Enterprise">企业金融</Link></li>
                         <li><Link to="/Finance">个人金融</Link></li>
                        <li><Link to="/AboutMe">关于我们</Link></li>
                        <li><Link to="/News">公告新闻</Link></li>
                     </ul>          
                </div>  
            </div>
        </div>
  	      <Route exact path="/" component={Home}/>
          <Route path="/Enterprise" component={Enterprise}/>
          <Route path="/Finance" component={Finance}/>
          <Route path="/AboutMe" component={AboutMe}/>
          <Route path="/News" component={News}/>
          
         
      </div>
  </Router>
    );
  }
}

export default App;
