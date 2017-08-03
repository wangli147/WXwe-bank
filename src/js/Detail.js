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
    constructor(){
        super()
        this.state={
          list:[]
        }
     }
    componentDidMount(){
    $.ajax({
            type:"get",
            url:"http://localhost:8005/Finance/Detail",
            async:true,
            contentType:false,
            processData:false,
            success:function(data){
                console.log(data)
                  this.setState({
                      left:data[0].left,
                      more:data[0].more,
                      list:data

                  })  
            }.bind(this)
        }) 
    var header=document.getElementById('header');           
    var headerS=document.getElementById('headerS');
    var scroll=document.getElementById('scrollT');
    var t = scroll.offsetTop;
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
                }else{
                    header.style.position = 'fixed';
                    header.style.top = '0';
                    header.style.display='block';                               
                    headerS.style.display='none';
                }
        })
    
  }
  render() {
    return (
	    <div className="EnterprisePage">
            {/*微粒贷*/}
            <div className="enterTopD">
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
                    </div>
                </div>
            </div>
            <div className="spacer"></div> 
            <div className="enterBtn" id="scrollT">
                <div className="wrap">
                    <h2 className="hd">微业贷</h2>
                    <ul className="wl_list">
                        {this.state.list.map(function(e,i){
                            return (
                                <li key={i}>{e.con}</li>
                            )
                         })}  
                    </ul>
                    <div className="ft">
                        <ul className="wl_con clear">
                            {this.state.list.map(function(val,i){
                                return (
                                    <li key={i}>
                                        <div className="con-wrap">
                                            <img src={val.Img}/>
                                        </div>
                                        <h2>{val.h2}</h2>
                                        <p>{val.p3}</p>
                                        <p>{val.p4}</p>
                                    </li>
                                )
                           })}
                        </ul>
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
export default Detail;