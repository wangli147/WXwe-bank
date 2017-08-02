import React, { Component } from 'react';
import { Carousel } from 'antd';
import '.././App.css';
import '../css/newsXq.css';
import Enterprise from './Enterprise';
import Footer from './Footer';
import $ from 'jquery';
import News from './News';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class NewsXq extends Component {
	constructor(){
  super()
  this.state={
    AboutOnes:[]
  }
}

	  componentDidMount(){
	  	$.ajax({
    type:"post",
    url:"http://localhost:8005/News/Xq",
    async:true, 
    data:{
    id:window.location.href.split('?')[1]
    },   
    success:function(e){
    	console.log(e)
      this.setState({
         AboutOnes:e[0]
      })

    }.bind(this)
  })
  }
  render() {
    return (
    	<div className="x-warp-xq">
    	<div className="x-warp-xqT" >
    		<div className="xq-header">{this.state.AboutOnes.litit}</div>
    		<div className="xq-con">{this.state.AboutOnes.licon}</div>	   		  	
	    </div> 
	    </div>

    );
  }
}

export default NewsXq;
