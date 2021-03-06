import React, { Component } from 'react';
import { Carousel } from 'antd';
import '.././App.css';
import '../css/Weiche.css';
import $ from 'jquery';
import Footer from './Footer';

import phone from '../imgs/6-02546ad237.jpg';
import pic from '../imgs/pic1.png';
// import img2 from '../imgs/45.png'


class Weiche extends Component {
    constructor(){
        super()
        this.state={
          list:[]
        }
     }
    componentDidMount(){
        $.ajax({
            type:"get",
            url:"http://localhost:8005/Finance/weiche",
            async:true,
            contentType:false,
            processData:false,
            success:function(data){
                console.log(data[0]) 
                  this.setState({
                      h1:data[0].h1,
                      p1:data[0].p1,
                      p2:data[0].p2,
                      tit:data[0].tit,
                      left:data[0].left,
                      more:data[0].more,
                      list:data

                  })  
            }.bind(this)                  
        })
    /*var header=document.getElementById('header');           
    var headerS=document.getElementById('headerS');
    var scrollTC=document.getElementById('scrollTC');
    var t = scrollTC.offsetTop;

        window.addEventListener('scroll',function(){
             var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
             if(scrollTop>t){
                headerS.style.display='block';
                header.style.display='none';
             }else{
                headerS.style.display='none';
                header.style.display='block';
             }
        })*/
  }
  render() {
    return (
	    <div className="EnterprisePage">
            {/*微车贷*/}
            <div className="enterTopW">
                <div className="wrap">
                    <div className="Weiban">
                        <div className="Weiphone">                           
                            <div className="Weipage">
                                <img src={phone} alt="phone" title="phone"/>
                                <span className="num4">4000</span>
                            </div>
                        </div>
                    </div>
                    <div className="WeiFont">
                        <h2>{this.state.h1}</h2>
                        <p>{this.state.p1}</p>
                        <p>{this.state.p2}</p>
                    </div>
                    
                </div>
            </div>
            <div className="spacer"></div> 
            <div className="enterBtn" id="scrollTC">
                <div className="wrap">
                    <h2 className="hd">{this.state.tit}</h2>
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
                                        <p>{val.p5}</p>
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
export default Weiche;