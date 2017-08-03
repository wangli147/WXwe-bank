import React, { Component } from 'react';
import { Carousel } from 'antd';
import '.././App.css';
import '../css/Finance.css';
import $ from 'jquery';
import Detail from './Detail';
import Weiche from './Weiche';
import Bank from './Bank';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Footer from './Footer';
import GrJr from '../imgs/grjr.jpg';

class Finance extends Component {
	constructor(){
	    super()
	    this.state={
	      con:[]	  
	    }
	 }	
	 componentDidMount(){
	 	$.ajax({
	        type:"get",
	        url:"http://localhost:8005/Finance/single",
	        async:true,
	        contentType:false,
	        processData:false,
	        success:function(data){
	        	console.log(data)
	          this.setState({
	           con:data,
	           h1:data[0].tt,
	           tt:data[0].inf		           
	          })  
	        }.bind(this)      	         
	    })	    
	 }
  render() {
    return (
    	<Router>
    	<div className="x-warp">
    	<Route path="/Detail" component={Detail}></Route>
    	<Route path="/Weiche" component={Weiche}></Route>
    	<Route path="/Bank" component={Bank}></Route>
    	<Route exact path="/Finance" render={()=>(
    	<div>
		    <div className="Finance">
		   		<div className="banJR clear">
		   			
		   		</div>
		   		<div className="Head-content">
		   			<h2>{this.state.h1}</h2>
		   			<p>{this.state.tt}</p>
		   		</div>
		    </div>
		    <div className="conetnt">
		   			<ul id="list">
		   				{this.state.con.map(function(e,i){
		   					return (
		   						<Link key={i} to={`${e.to}`} className="link">
				   					<li key={i}>
					   					<a href="#">
					   						<div className="con-head-bg">
						   						<div className="con-head">
							   						<h3>{e.title}</h3>
							   						<p>{e.h1}</p>
						   						</div>
						   						<div className="con-head-Img">
						   							<img src={e.img} alt=""/>
						   						</div>
						   					</div>
					   						<div className="x-con-box">
					   						 	<p className="x-tit">{e.p1}</p>
					   						 	<p className="x-con">{e.con1}</p>
					   						 	<p className="x-tit">{e.p2}</p>
					   						 	<p className="x-con">{e.con2}</p>
					   						 	<p className="x-tit">{e.p3}</p>
					   						 	<p className="x-con">{e.con3}</p>
					   						 	<p className="x-tit">{e.p4}</p>
					   						 	<p className="x-con">{e.con4}</p>			   						 	
					   						 	<p className="x-More">{e.more}</p>
					   						</div>
					   					</a>
					   				</li>
				   				</Link>
			   				)
		   				})}
		   			</ul>
		   		</div>
		   		<Footer />
		   		</div>
		   		)}></Route>
		    </div>
	    </Router>

    )
  }
}

export default Finance;
