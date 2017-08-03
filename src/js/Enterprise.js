import React, { Component } from 'react';
import { Carousel } from 'antd';
import '.././App.css';
import '../css/hover-min.css';
import '../css/Enterprise.css';
import $ from 'jquery';
import Footer from './Footer';
import img from '../imgs/11-.jpg';
import pic from '../imgs/pic1.png'

class Enterprise extends Component {
	constructor(){
	    super()
	    this.state={
	      con:[],
	      list:[]	 
	    }
	 }
  componentDidMount(){
  	$.ajax({
        type:"get",
        url:"http://localhost:8005/Enterprise/enter",
        async:true,
        contentType:false,
        processData:false,
        success:function(e){
          this.setState({
            con1:e[0].h1,
            con2:e[0].p1,
            con3:e[0].p2,
            con4:e[0].btn,
            con5:e[0].bot         
          })  
        }.bind(this)      
         
      })
  	$.ajax({
        type:"get",
        url:"http://localhost:8005/Enterprise/enterCenter",
        async:true,
        contentType:false,
        processData:false,
        success:function(data){
          this.setState({
             con:data      
          })  
        }.bind(this)      
         
      })

  	$.ajax({
        type:"get",
        url:"http://localhost:8005/Enterprise/enterBoth",
        async:true,
        contentType:false,
        processData:false,
        success:function(res){

	    	this.setState({
	         	list:res,
	         	tit:res[0].tit,
		         btn:res[0].btn,
		         bot:res[0].bot,
		         left:res[0].left,
		         more:res[0].more
	         })
        }.bind(this)      
         
      })
  	var header=document.getElementById('header');			
	var headerS=document.getElementById('headerS');
	var scroll=document.getElementById('scroll');
  	var t = scroll.offsetTop;
  	var scroll=document.getElementById('scroll');
		window.addEventListener('scroll',function(){
			 var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			 if(scrollTop>t){
			 	headerS.style.display='block';
			 	header.style.display='none';
			 }else{
			 	headerS.style.display='none';
			 	header.style.display='block';
			 }
		})

		$('.wl_button').click(function(){
			$('.enterBtn').animate({ 
					'top':'-100vh'		    
			},1000).stop()
			document.body.scrollTop=740;
		})
  }
  render() {
    return (
	    <div className="EnterprisePage">
	    	{/*企业金融*/}
	    	<div className="enterTop">
	    		<div className="wrap">
	    			<div className="wl_messImg">
		    			<div className="wl_imgBox">
		    				<div className="wl_img">
			    				<div className="wl_mod">
			    					<img src={img} />
			    				</div>
			    			</div>
		    			</div>
		    		</div>
		    		<div className="wl_messFont">
		    				<div className="wl_text">
			    				<h1 className="a-fadeinR">{this.state.con1}</h1>
			    				<p className="font_two">{this.state.con2}</p>
			    				<p className="move">{this.state.con3}</p>
			    				<a href="#" className="apply">{this.state.con4}</a>
			    				<p className="wl_fontB">
									{this.state.con5}</p>
			    			</div>
		    		</div>
	    		</div>
	    		<div className="wl_button">
    				<i className="wl_icon"></i>
    			</div>
	    	</div>
	    	<div className="spacer"></div>
	    	<div className="enterBtn" id="scroll">
	    		<div className="wrap">
	    			<h2 className="hd">{this.state.tit}</h2>
	    			<ul className="wl_list">
	    				{this.state.list.map(function(e,i){
	    					return (
	    						<li key={i}>{e.p}</li>
	    					)
	    				})}
	    				
	    				
	    			</ul>
	    			<div className="ft">
	    				<ul className="wl_con clear">
		    				{this.state.con.map(function(e,i){
		    					return (
		    						<li>
				    					<div className="con-wrap">
				    						<img src={e.img}/>
				    					</div>
				    					<h2>{e.h2}</h2>
				    					<p>{e.p}</p>
				    				</li>
		    					)
		    				})}
		    				
		    			</ul>
		    			<p className="wl_for">
		    				<a href="#">{this.state.btn}</a>
		    			</p>
		    			<p className="adress">
		    				{this.state.bot}
		    			</p>
	    			</div>
	    		</div>
	    	</div>
	    	<div className="grayBg">
    			<div className="wrap">
    				<p className="fontSize">
    					<a href="#" className="left why">{this.state.left}</a>
    					<a href="#" className="right matter">{this.state.more}</a>
    				</p>
    			</div>
    		</div>
    		<Footer />		
	    </div>
    );
  }
}
export default Enterprise;