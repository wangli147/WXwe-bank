import React, { Component } from 'react';
import { Carousel } from 'antd';
import '.././App.css';
import '../css/home.css';
import $ from 'jquery';
import Footer from './Footer';
import RightIcon from './RightIcon';
import Detail from './Detail';
import Finance from './Finance'
import Bank from './Bank';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import pic1 from '../imgs/pic1.jpg';
import pic2 from '../imgs/pic2.jpg';
import pic3 from '../imgs/1.jpg';
import pic4 from '../imgs/2.jpg';
import pic5 from '../imgs/3.jpg';
import pic6 from '../imgs/4.jpg';



class Home extends Component {
	constructor(){
	    super()
	    this.state={
	      Rcon:[],
	      bot:[]
	    }
	 }
	componentDidMount(){

			$.ajax({
		        type:"get",
		        url:"http://localhost:8005/home/hometop",
		        async:true,
		        contentType:false,
		        processData:false,
		        success:function(e){
		          this.setState({
		            con:e[0].tit,
		            con1:e[0].con1,
		            con2:e[0].con2,
		            img:e[0].img,
		            img1:e[1].img,
		            img2:e[2].img,
		            img3:e[3].img		            
		          })  
		        }.bind(this)      
		         
		      })
			$.ajax({
		        type:"get",
		        url:"http://localhost:8005/home/homeR1",
		        async:true,
		        contentType:false,
		        processData:false,
		        success:function(data){
		          this.setState({
		           Rcon:data		           
		          })  
		        }.bind(this)      
		         
		      })
			$.ajax({
		        type:"get",
		        url:"http://localhost:8005/home/homebot",
		        async:true,
		        contentType:false,
		        processData:false,
		        success:function(font){
		        	// console.log(font)
		          this.setState({
		           bot:font[0].h1,
		           bot1:font[0].p1,
		           bot2:font[0].p2,
		           bot3:font[0].btn,
		           bot4:font[0].bot,
		           bot5:font[1].h1,
		           bot6:font[1].p1,
		           bot7:font[1].p2,
		           bot8:font[1].btn          
		          })  
		        }.bind(this)      
		         
		      })
		
		var deviceLeft=document.getElementById('deviceLeft');
		var header=document.getElementById('header');			
		var headerS=document.getElementById('headerS');
		var iphone=document.getElementById('iphone');
		var height=document.getElementById('height');
		var scrollt=document.getElementById('offset');
		var t = scrollt.offsetTop;
		if(((document.body.scrollTop)||(document.documentElement.scrollTop))==0){
	   		 headerS.style.display='none';
	   		 header.style.display='block';	   		 
	   	}
		function addEvent(obj,event,fn){
	        obj.attachEvent?obj.attachEvent('on'+event,fn):obj.addEventListener(event,fn);
	    }
	    	
	     addEvent(window,'scroll',function(){
	     	var win =(navigator.userAgent).lastIndexOf('Chrome')!=-1 ? document.body : document.documentElement;
	   		 var scrollTop=win.scrollTop;
	   		
	          if(scrollTop>t){
		            headerS.style.display='block';
		            headerS.style.transition='.5s';
		            headerS.style.height='60px';
		            header.style.display='none';
		            deviceLeft.style.position = 'fixed';
		            deviceLeft.style.top = '50px';
		        }else{
		            header.style.position = 'fixed';
		            header.style.top = '0';
		            header.style.display='block';
		            deviceLeft.style.position = 'absolute';
		            deviceLeft.style.top = '50px';		           		            
		            headerS.style.display='none';
		        }

		        $(function(){
		        	if(scrollTop>height.offsetTop){
		        		$('.ant-carousel .wl_two').find('img').css('display','none')
		        		$('.ant-carousel .wl_four').find('img').css('display','block')
		        	}else{
		        		$('.ant-carousel .wl_two').find('img').css('display','block')
		        		$('.ant-carousel .wl_four').find('img').css('display','none')
		        	}		        	
		        })		        
	     })
			
		$(function(){


			//点击中间按钮
			$('.wl_button').click(function(){
				$('.wl_scroll').animate({ 
   					'top':'-100vh'		    
				},1000).stop()
				document.body.scrollTop=740;
			})
	    	$('.wl_phoneS').click(function(){
	    		$(this).css({'z-index': 20,'animation': '1s move1 forwards'})
	    		$('.wl_phoneO').css({ 'z-index': 19,'width':'250px','animation': '1s move3 forwards'})
	    		$('.wl_phoneT').css({ 'z-index': 19,'width':'250px','animation': '1s move2 forwards'})
	    	})	    	
	    })
		
		
	}
  render() {
    return (
	    <div id="homepage">
	    	<div className="wl_home modPage modBand" id="no">
	    		{/*首页bg*/}
	    		<div className="wl_boxed">
	    			<div className="wl_vertical">
	    				<div className="wl_align clear">
	    					<div className="wl_left left">
	    						<h1 className="wl_title delay-1 a-fadeinL"> 
	    							{this.state.con}
	    						</h1>
	    						<p className="wl_pull a-fadeinL_2">
	    							{this.state.con1}
	    							<span>{this.state.con2}</span>
	    						</p>
	    					</div>
	    					<div className="wl_right right">
	    						<div className="wl_align">
    								<div className="wl_images">	    								
    									<img className="wl_phoneO classN" src={this.state.img}/>
	    								<img className="wl_phoneS" src={this.state.img1}/>
	    								<img className="wl_phoneT classT" src={this.state.img2}/>
	    								<img className="wl_penguin a-delay" src={this.state.img3}/>	    							
	    							</div>
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="wl_button">
	    				<i className="wl_icon"></i>
	    			</div>
	    		</div>
	    	</div>
	    	<div className="spacer"></div>
	    	{/*第二部分*/}
	    	<div className="modPage wl_scroll modBand" id="offset">
	    		<div className="wl_relative" id="relative">
	    			<div className="wl_wraper" id="deviceLeft">
	    				<div className="wl_vertical"> 
	    					<div className="wl_align">
	    						<div className="wl_device">
	    							<div className="wl_container">
	    								<Carousel autoplay>
										    <div className="wl_two"><img src={pic1} className="imgs"/></div>
										    <div className="wl_two"><img src={pic2} className="imgs" /></div>
										 </Carousel>
										 <Carousel autoplay>
										    <div className="wl_four"><img src={pic3} className="imgs" /></div>
										    <div className="wl_four"><img src={pic4} className="imgs" /></div>
										    <div className="wl_four"><img src={pic5} className="imgs" /></div>
										    <div className="wl_four"><img src={pic6} className="imgs" /></div>
										 </Carousel>
	    							</div>
	    						</div>
	    					</div>
	    				</div>
					</div>
					<div className="text-wraper">
						{this.state.Rcon.map(function(e,i){
							return (
								<div className="step_text" key={i}>
									<div className="wl_vertical">
										<div className="wl_align">
											<img src={e.img} className="right_img"/>
											<h2 className="subtitle">{e.h1}</h2>
											<h3 className="subtitleBom">{e.p}</h3>
											<div className="wl_weixin">
												<div className="wl_leftWei left">
													<img src={e.wei1}/>
													{e.font1}
												</div>
												<div className="wl_RightQQ left">
													<img src={e.wei2}/>
													{e.font2}
												</div>
											</div>
											<p className="wl_details">
												<Link  to={`${e.to}`}>{e.btn}</Link>
												{/*<a href="Finance"></a>*/	}											
											</p>
										</div>
									</div>
								</div>
							)
						})}

						<div className="step_text" id="height">
							<div className="wl_vertical">
								<div className="wl_align">
									<h2 className="subtitle">{this.state.bot}</h2>
									<h3 className="subtitleBom">{this.state.bot1}</h3>
									<div className="subtitBom">
										{this.state.bot2}
									</div>
									<p className="wl_details detOrange wl_margin">
										<a href="Enterprise">{this.state.bot3}</a>
									</p>
									<p className="wl_fontB">
									{this.state.bot4}</p>
								</div>
							</div>
						</div>
						<div className="step_text">
							<div className="wl_vertical">
								<div className="wl_align">
									<h2 className="subtitle">{this.state.bot5}</h2>
									<h3 className="subtitleBom">{this.state.bot6}</h3>
									<div className="subtitBom">
										{this.state.bot7}
									</div>
									<p className="wl_details detOrange wl_margin">
										<Link  to='/Weiche'>{this.state.bot8}</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<RightIcon />				
    		</div>
    		<Footer />
	    </div>
	   
    )
  }
}

export default Home;