import React, { Component } from 'react';
import { Carousel } from 'antd';
import '.././App.css';
import '../css/news.css';
import Footer from './Footer';
import $ from 'jquery';
class Finance extends Component {
	  componentDidMount(){
  	$(function(){
  		$('.new-tit>li').click(function(){
  			 var index=$(this).index();
  			 $('.x-first li').eq(index).addClass('x-one').siblings().removeClass('x-one');
     //        $('.x-first>li').eq(index).css('color','red')
  			// $(this).css('color','red')





  		})
  	})
  }


  render() {
    return (
    	<div>
    	<div className="x-warp-end">
	   		<div className="x-news-box">	   		
	   			<ul className="x-first">
		   			<li className="x-one">
		   				<h2>重要新闻</h2>
		   				<div className="new-con">
		   					<p>
				   				微众银行2016年年度报告
				   				<span className="right">2017-03-03</span>
				   			</p>
		   					<p>
				   				严正声明
				   				<span className="right">2017-03-03</span>
				   			</p>
		   					<p>
				   				深圳前海微众银行关于经营场所变更的公告
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				深圳前海微众银行股份有限公司服务价目表
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				关于落实《中国人民银行关于加强支付结算管理防范电信网络新型违法
				   				犯罪有关事项的通知》
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				如何从他行转账至微众卡？
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行个人银行结算账户功能介绍
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行人民币存款利率表
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行人民币贷款利率表
				   				<span className="right">2017-03-03</span>
				   			</p>
				   		</div>
		   			</li>
		   			<li>
		   				<div className="new-con">
		   					<h2>新闻看点</h2>
		   					<p>
				   				总理考察两年后，深圳微众银行怎么样
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				28加银行齐聚 微众银行线上启动用户体验探索
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				“2016年度深圳市金融创新奖” 揭晓微众银行两个项目均获得一等奖
					
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行成为国内首家获AA+评价民营银行
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				科技金融发展全面突破 微众银行荣获“卓越服务创新银行奖励”
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				银行提升用户体验，关键还在思维转变
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				国家信息中心与微众银行签署备忘录 开展信用信息共享
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				区块链金融应用：中国首个跨机构场景真实交易数突破百万量级
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				用户体验时代来临 微众银行创新升级
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				互联网金融再引两会热议 风控成互联网银行发展关键
				   				<span className="right">2017-03-03</span>
				   			</p>
				   		</div>
		   			</li>
		   			<li>
		   				<div className="new-con">
		   				<h2>微众动态</h2>
		   					<p>
				   				微动力 “SaaS+”荣获“2016年度产品创新奖”
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行首个个人经营性委托贷款产品成功上线
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行入围“2017胡润新金融百强榜”
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行荣获“最佳普惠金融服务”和“最佳科技创新” 两项大奖
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行荣获“前海十佳商业模式企业”奖项
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				“微动力” 项目被评为“优秀科技金融品牌”
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行获得“最佳民营银行” 荣誉
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				中国互联网金融协会调研组一行到微众银行调研
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				微众银行荣获“ 深圳金融电子结算中心2016年度创新奖” 二等奖
				   				<span className="right">2017-03-03</span>
				   			</p>
				   			<p>
				   				中国银行总行金融机构部来微众银行交流
				   				<span className="right">2017-03-03</span>
				   			</p>
				   		</div>
		   			</li>		   			   			
	   			</ul>
	   			<ul className="new-tit">
	   				<li className='x-block'>重要公告 <span></span></li>
	   				<li>新闻看点 <span></span></li>
	   				<li>微众动态 <span></span></li>
	   			</ul>
	   		</div>	   		  	
	    </div>
	    <Footer />	 
	    </div>

    );
  }
}

export default Finance;
