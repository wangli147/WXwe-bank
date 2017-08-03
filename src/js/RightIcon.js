import React, { Component } from 'react';
import { Carousel } from 'antd';
import '.././App.css';
import $ from 'jquery';
import '../css/rightIcon.css';
import img1 from '../imgs/app.png'
import wei1 from '../imgs/wei1.png';
import wei2 from '../imgs/wei2.png'
class RightIcon extends Component {
  componentDidMount(){
    $('.top').click(function(){
        (document.body.scrollTop=0)||(document.documentElement.scrollTop=0)
    })
  }
  render() {
    return (
	    <div>
    		<ul className="wl_icon">
    			<li className="app">
    				<a href="#" title="微众银行app">
    					<img src={wei1} className="iconImg"/>
    				</a>
    				<div className="wl_pop">
    					<div className="pop_in">
    						<img src={img1} alt="微众银行app"/>
    						<strong>微众银行app</strong>
    					</div>	
    				</div>
    			</li>
    			<li className="weixin">
    				<a href="#" title="关注微信号">
    					<img src={wei2} className="iconImg"/>
    				</a>
    				<div className="wl_pop">
    					<div className="pop_in">
    						<img src={img1} alt="微信公众号"/>
    						<strong>微信公众号</strong>
    					</div>	
    				</div>
    			</li>
    			<li className="top">
    				<a href="#">
    					<span>&lt;</span>
    				</a>
    			</li>
    		</ul>
	    </div>
    );
  }
}
export default RightIcon;