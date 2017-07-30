import React, { Component } from 'react';
import { Carousel } from 'antd';
import '.././App.css';
import '../css/Detail.css';
import $ from 'jquery';
import Footer from './Footer';

import img from '../imgs/11-.jpg';
import pic from '../imgs/pic1.png';
import img2 from '../imgs/45.png'


class Detail extends Component {
    componentDidMount(){
    var header=document.getElementById('header');           
    var headerS=document.getElementById('headerS');
    var scrollT=document.getElementById('scrollT');
    var t = scrollT.offsetTop;

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
  }
  render() {
    return (
	    <div className="EnterprisePage">
            {/*了解详情*/}
            <div className="enterTop">
                <div className="wrap">
                    <div className="lunBox">
                        <Carousel arrows>
                            <div className="wl_two">
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
                                    <h1 className="fadeinR">微信上可以借钱啦！</h1>
                                    <p className="font">登录微信点击：我—钱包—微粒贷借钱—查看你的额度</p>
                                    <p className="bgImg"></p>
                                    <p className="bgFont">微信扫码查看额度</p>
                                </div>
                            </div>
                            <div className="wl_two">
                                <div className="wl_messImg">
                                    <div className="wl_imgBox">
                                        <div className="bigImg">
                                        </div>
                                    </div>
                                </div>
                                <div className="wl_messFont">
                                    <h1 className="fadeinR">QQ上可以借钱啦！</h1>
                                    <p className="font">登录微信点击：我—钱包—微粒贷借钱—查看你的额度</p>
                                    <p className="bgImg"></p>
                                    <p className="bgFont">手机QQ扫码查看额度</p>
                                </div>
                            </div>
                        </Carousel>
                        <span className="btnLeft"></span>
                        <span className="btnRight"></span>
                    </div>
                </div>
            </div>
            <div className="spacer"></div> 
            <div className="enterBtn" id="scrollT">
                <div className="wrap">
                    <h2 className="hd">微业贷</h2>
                    <ul className="wl_list">
                        <li>微业贷是微众银行为广大中小微企业提供的线上流动资金贷款服务，该产品为结合大数据</li>
                        <li>分析及互联网技术的一款金融创新产品。客户从申请至提款全部在线完成，无需抵质押，</li>
                        <li>额度立等可见，资金分钟到账，按日计息，随借随还。微业贷将以科技金融为中小微企业</li>
                        <li>提供高效便捷的融资服务。</li>
                    </ul>
                    <div className="ft">
                        <ul className="wl_con clear">
                            <li>
                                <div className="con-wrap">
                                    <img src={pic}/>
                                </div>
                                <h2>智慧贷款</h2>
                                <p>大数据定额，最高300万</p>
                            </li>
                            <li>
                                <div className="con-wrap">
                                    <img src={pic}/>
                                </div>
                                <h2>智慧贷款</h2>
                                <p>大数据定额，最高300万</p>
                            </li>
                            <li>
                                <div className="con-wrap">
                                    <img src={pic}/>
                                </div>
                                <h2>智慧贷款</h2>
                                <p>大数据定额，最高300万</p>
                            </li>
                            <li>
                                <div className="con-wrap">
                                    <img src={pic}/>
                                </div>
                                <h2>智慧贷款</h2>
                                <p>大数据定额，最高300万</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grayBg">
                <div className="wrap">
                    <p className="fontSize">
                        <a href="#" className="left why">微业贷如何申请？</a>
                        <a href="#" className="right matter">了解更多问题</a>
                    </p>
                </div>
            </div>
            <Footer />           
        </div>
    );
  }
}
export default Detail;