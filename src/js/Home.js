import React, { Component } from 'react';
import { Carousel } from 'antd';
import '.././App.css';
import '../css/home.css';
import $ from 'jquery';
import Footer from './Footer';
import RightIcon from './RightIcon';

import phone1 from '../imgs/phone1.png';
import phone2 from '../imgs/phone2.png';
import phone3 from '../imgs/phone3.png';
import penguin from '../imgs/qier.png';
import pic1 from '../imgs/pic1.jpg';
import pic2 from '../imgs/pic2.jpg';
import pic3 from '../imgs/1.jpg';
import pic4 from '../imgs/2.jpg';
import pic5 from '../imgs/3.jpg';
import pic6 from '../imgs/4.jpg';
import weixin from '../imgs/1.png';
import er1 from '../imgs/w1.png';
import er2 from '../imgs/qrcode.png';



class Home extends Component {
	componentDidMount(){
		var deviceLeft=document.getElementById('deviceLeft');
		var scroll=document.getElementById('scroll');
		var header=document.getElementById('header');			
		var headerS=document.getElementById('headerS');
		var headerS=document.getElementById('headerS');
		var iphone=document.getElementById('iphone');
		var height=document.getElementById('height');
		var scroll=document.getElementById('scroll');
		// var wl_container=document.getElementById('wl_container');
		var t = scroll.offsetTop;
		window.addEventListener('scroll',function(){
			 var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		        console.log(scrollTop,t);
		        if(scrollTop>t){
		            headerS.style.display='block';
		            headerS.style.transition='.5s';
		            headerS.style.height='60px';
		            header.style.display='none';
		            deviceLeft.style.position = 'fixed';
		            deviceLeft.style.height = '100%';

		        }
		        else{
		            header.style.position = 'fixed';
		            deviceLeft.style.position = 'absolute';
		            deviceLeft.style.top = '50px';
		            header.style.top = '0';
		            
		            header.style.display='block';
		            headerS.style.display='none';
		        }
		       /* if(scrollTop>=1990){
		        	deviceLeft.removeAttribute('id')
		        }*/
		        $(function(){
		        	if(scrollTop>height.offsetTop){
		        		$('.ant-carousel .wl_two').find('img').css('display','none')
		        		$('.ant-carousel .wl_four').find('img').css('display','block')
		        	}else{
		        		$('.ant-carousel .wl_two').find('img').css('display','block')
		        		$('.ant-carousel .wl_four').find('img').css('display','none')
		        	}
		        	/*if(scrollTop>=2006){
		        		deviceLeft.style.position='absolute';
		        		deviceLeft.style.bottom='50px';
		        	}*/
		        })
		        
			// console.log(height.offsetTop)
		})
		$(function(){
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			var top= document.getElementsByClassName('wl_scroll')[0];
			console.log(top.offsetTop)
			//点击中间按钮
			$('.wl_button').click(function(){

		    })
	    	$('.wl_phoneS').click(function(){
	    		$(this).css({'z-index': 20,'animation': '1s move1 forwards'})
	    		$('.wl_phoneO').css({ 'z-index': 19,'width':'250px','animation': '1s move3 forwards'})
	    		$('.wl_phoneT').css({ 'z-index': 19,'width':'250px','animation': '1s move2 forwards'})
	    	})
	    	/*$('.wl_phoneT').click(function(){
	    		$(this).css({'z-index': 20,'animation': '1s move1 forwards'})
	    		$('.wl_phoneO').css({ 'z-index': 19,'width':'250px','animation': '1s move3 forwards'})
	    		$('.wl_phoneS').css({ 'z-index': 19,'width':'250px','animation': '1s move2 forwards'})
	    	})*/
	    	
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
	    							腾讯牵头发起设立的银行
	    						</h1>
	    						<p className="wl_pull a-fadeinL_2">
	    							从一次惊喜
	    							<span>到每次相伴</span>
	    						</p>
	    					</div>
	    					<div className="wl_right right">
	    						<div className="wl_align">
    								<div className="wl_images">
	    								<img className="wl_phoneO classN" src={phone1}/>
	    								<img className="wl_phoneS" src={phone2}/>
	    								<img className="wl_phoneT classT" src={phone3}/>
	    								<img className="wl_penguin a-delay" src={penguin}/>
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
	    	<div className="modPage wl_scroll modBand" id="scroll">
	    	<div className="wl_relative">
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
						<div className="step_text">
							<div className="wl_vertical">
								<div className="wl_align">
									<img src={weixin} className="right_img"/>
									<h2 className="subtitle">微粒贷</h2>
									<h3 className="subtitleBom">让您的微小心愿立刻实现！</h3>
									<div className="wl_weixin">
										<div className="wl_leftWei">
											<img src={er1}/>
											请用微信扫描二维码
										</div>
										<div className="wl_RightQQ">
											<img src={er2}/>
											请用手机QQ扫描二维码
										</div>
									</div>
									<p className="wl_details">
										<a href="./Detail">了解详情</a>
									</p>
								</div>
							</div>
						</div>
						<div className="step_text">
							<div className="wl_vertical">
								<div className="wl_align">
									<img src={weixin} className="right_img"/>
									<h2 className="subtitle">微众银行APP</h2>
									<h3 className="subtitleBom">We给您带来更舒适便捷的银行服务体验！</h3>
									<div className="wl_weixin">
										<div className="wl_leftWei">
											<img src={er1}/>
											请用微信扫描二维码
										</div>
									</div>
									<p className="wl_details detOrange">
										<a href="#">了解详情</a>
									</p>
								</div>
							</div>
						</div>
						<div className="step_text" id="height">
							<div className="wl_vertical">
								<div className="wl_align">
									<h2 className="subtitle">微业贷</h2>
									<h3 className="subtitleBom">微众银行为广大中小微企业提供的</h3>
									<div className="subtitBom">
										线上流动资金贷款服务！
									</div>
									<p className="wl_details detOrange wl_margin">
										<a href="#">了解详情</a>
									</p>
									<p className="wl_fontB">
									*目前仅限广东地区的受邀客户参与体验</p>
								</div>
							</div>
						</div>
						<div className="step_text">
							<div className="wl_vertical">
								<div className="wl_align">
									<h2 className="subtitle">微车贷</h2>
									<h3 className="subtitleBom">微众银行联手优信二手车推出买车贷款</h3>
									<div className="subtitBom">
										产品首付一半，即刻拥有爱车！
									</div>
									<p className="wl_details detOrange wl_margin">
										<a href="./Weiche">了解详情</a>
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

    );
  }
}

export default Home;