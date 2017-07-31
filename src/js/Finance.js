import React, { Component } from 'react';
import { Carousel } from 'antd';
import '.././App.css';
import '../css/Finance.css';
import Footer from './Footer';
import GrJr from '../imgs/grjr.jpg';
import dk01 from '../imgs/dk01.png'
import dk02 from '../imgs/dk02.png'
import dk03 from '../imgs/dk03.png'
class Finance extends Component {
  render() {
    return (
    	<div className="x-warp">
	    <div className="Finance">
	   		<div className="banJR clear">
	   			<img src={GrJr} alt="GrJr" title="GrJr"/>
	   		</div>
	   		<div className="Head-content">
	   			<h2>连 接 互 联 网 大 数 据</h2>
	   			<p>给 您 提 供 多 元 的 金 融 服 务</p>
	   		</div>
	    </div>
	    <div className="conetnt">
	   			<ul>
	   				<li>
	   					<a href="#">
	   						<div className="con-head-bg">
		   						<div className="con-head">
			   						<h3>微重银行App</h3>
			   						<p>We给您带来更舒适便捷的银行服务体验</p>
		   						</div>
		   						<div className="con-head-Img">
		   							<img src={dk03} alt=""/>
		   						</div>
		   					</div>
	   						<div className="x-con-box">
	   						 	<p className="x-tit">优选产品</p>5
	   						 	<p className="x-con">让您省心</p>
	   						 	<p className="x-tit">实时提现</p>
	   						 	<p className="x-con">让您放心</p>
	   						 	<p className="x-tit">定期计划</p>
	   						 	<p className="x-con">为您操心</p>
	   						 	<p className="x-tit">让您的财产不错过每一天收益</p>
	   						 	<p className="x-More">了解更多</p>
	   						</div>
	   					</a>
	   				</li>
	   				<li className="x-le x-mid">
	   					<a href="#">
	   						<div className="con-head-bg">
		   						<div className="con-head">
			   						<h3>微粒贷</h3>
			   						<p>We让您的微小心愿，立刻实现</p>
		   						</div>
		   						<div className="con-head-Img">
		   							<img src={dk01} alt=""/>

		   						</div>
		   					</div>
	   						<div className="x-con-box">
	   						 	<p className="x-tit">小额信贷</p>
	   						 	<p className="x-con">500元起借，最高额度30万</p>
	   						 	<p className="x-tit">轻松申请</p>
	   						 	<p className="x-con">无担保无抵押，微信，手Q点一点，马上就有</p>
	   						 	<p className="x-tit">闪电到账</p>
	   						 	<p className="x-con">5s出额度，借款最快1分钟到账</p>
	   						 	<p className="x-tit">周转灵活</p>
	   						 	<p className="x-con">按日计息，今天借了明天就能还，提前还款无罚金</p>
	   						 	<p className="x-More x-bg-blue">了解更多</p>
	   						</div>
	   					</a>
	   				</li>
	   				<li className="x-le x-right">
	   					<a href="#">
	   						<div className="con-head-bg">
		   						<div className="con-head">
			   						<h3>微车贷</h3>
			   						<p>首付一半，立即拥有爱车</p>
		   						</div>
		   						<div className="con-head-Img">
		   							<img src={dk02} alt=""/>

		   						</div>
		   					</div>
	   						<div className="x-con-box">
	   						 	<p className="x-tit">极速审批</p>
	   						 	<p className="x-con">60分钟出具审批结果，彻底改变传统申请贷款方式</p>
	   						 	<p className="x-tit">无门槛</p>
	   						 	<p className="x-con">仅需提供本人身份证，借记卡（储蓄卡）即可申请，无户籍，房产，收入，职业等限制</p>
	   						 	<p className="x-tit">方案灵活</p>
	   						 	<p className="x-con">有月超低费率，无月供两年零压力</p>
	   						 	<p className="x-More">了解更多</p>
	   						</div>
	   					</a>
	   				</li>
	   			</ul>
	   		</div>
	   		<Footer />
	    </div>

    );
  }
}

export default Finance;
