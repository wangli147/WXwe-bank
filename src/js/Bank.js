import React, { Component } from 'react';
import { Carousel } from 'antd';
import '.././App.css';
import '../css/Bank.css';
import $ from 'jquery';
import Footer from './Footer';

import phone from '../imgs/6-02546ad237.jpg';
import pic from '../imgs/pic1.png';
import img1 from '../imgs/1.jpg';
import img2 from '../imgs/2.jpg';
import img3 from '../imgs/3.jpg';
import img4 from '../imgs/4.jpg';



class Bank extends Component {
    constructor(){
        super()
        this.state={
          list:[]
        }
     }
    componentDidMount(){
        $.ajax({
            type:"get",
            url:"http://localhost:8005/Finance/bank",
            async:true,
            contentType:false,
            processData:false,
            success:function(data){
                console.log(data[0]) 
                  this.setState({
                      h1:data[0].h1,
                      p1:data[0].p1,
                      p2:data[0].p2,
                      wei:data[0].ma,
                      tit:data[0].tit,
                      left:data[0].left,
                      more:data[0].more,
                      list:data
                  })  
            }.bind(this)                  
        })    
  }
  render() {
    return (
	    <div className="EnterprisePage">
            {/*微众银行App*/}
            <div className="enterTopW">
                <div className="wrap">
                    <div className="Weiban">
                        <div className="WeiLunB"> 
                              <Carousel autoplay>                          
                                    <div className="four"><img src={img1} className="imgs" /></div>
                                    <div className="four"><img src={img2} className="imgs" /></div>
                                    <div className="four"><img src={img3} className="imgs" /></div>
                                    <div className="four"><img src={img4} className="imgs" /></div>                   
                              </Carousel>
                        </div>
                    </div>
                    <div className="WeiFont">
                        <h2 className="bankApp">{this.state.h1}</h2>
                        <p>{this.state.p1}</p>
                        <p className="weiMa"><img src={this.state.wei} /></p>
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
                                        <p><img src={val.font} /></p>
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
export default Bank;