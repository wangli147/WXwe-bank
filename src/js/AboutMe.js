import React, { Component } from 'react';
import '../css/AboutMe.css';
import { Carousel } from 'antd';
import $ from 'jquery';
import Footer from './Footer';
import AboutImage from '../imgs/aboutMe.jpg';
import Image1 from '../imgs/gd01.png';
import Image2 from '../imgs/gd02.png';
import Image3 from '../imgs/gd03.png';
import peo1 from '../imgs/peo1.jpg';
import peo2 from '../imgs/peo2.jpg';
import peo3 from '../imgs/peo3.jpg';
import img1 from '../imgs/lan-bg.jpg';
import img2 from '../imgs/line-bg.png';
class AboutMe extends Component {
constructor(){
  super()
  this.state={
    AboutOne:[],
    AboutOnes:[],
    Abg:[],
    AboutTwo1:[],
    AboutTwo2:[],
    About3:[],
    About3_2:[],
    About4:[],
    About4_2:[],
    About4_3:[],
    About4_4:[],
    About4_5:[],
    About4_6:[]

  }
}
componentDidMount=function(){
      var index=0;
      var imgnum=$('#showH a').length;
     function pic(){ 
    //轮播切换图片的函数，思路就是通过定时器不停的改变index的值，选择对应的图片页面进行显示         
       var p=setInterval(function(){
            index++;
             
            if(index>=imgnum){
                index=0; //当index大于图片总个数时回到第一屏
            }
             
            selectimg(index); //通过index显示对应图片
     
        },2000);
         
    }
     
    function selectimg(index){ //通过index显示对应的图片，并隐藏这张图片的其他图片
        $('#showH a').eq(index).fadeIn(600).siblings().fadeOut(600);  
    }
    $(function(){
        $('.jieshao').mouseover(function(){
          $(this).children('div').css('opacity','1').parent().siblings().children('div').css('opacity','0')
        })

    })

$.ajax({
    type:"get",
    url:"http://localhost:8005/AboutOne/AboutMe",
    async:true,       
    success:function(e){
      this.setState({
         AboutOne:e[0].tit,
         AboutOnes:e

      })

    }.bind(this)
  })
$.ajax({
    type:"get",
    url:"http://localhost:8005/AboutOne/AboutImg",
    async:true,       
    success:function(e){
       this.setState({
        Abg:e[0].Img

      })

    }.bind(this)
  })
$.ajax({
    type:"get",
    url:"http://localhost:8005/About3/About3",
    async:true,       
    success:function(e){
       console.log(e)
       this.setState({
         About3:e[0].h6,
         About3_2:e[0].pcon
      })

    }.bind(this)
  })
$.ajax({
    type:"get",
    url:"http://localhost:8005/About4/About4",
    async:true,       
    success:function(e){
      var About4=[];
      var About4_2=[] ; 
      var About4_3=[] ; 
      var About4_4=[] ;
      var About4_5=[] ;
      var About4_6=[] ;    
       for(var i in e){
          if(e[i].art=='one'){
            About4.push(e[i])
          }else if(e[i].art=='two'){
            About4_2.push(e[i])

          }
          else if(e[i].art=='three'){
            About4_3.push(e[i])

          }
          else if(e[i].art=='four'){
            About4_4.push(e[i])

          }
          else if(e[i].art=='1'){
            About4_5.push(e[i])

          }
           else if(e[i].art=='2'){
            About4_6.push(e[i])

          }
      }
       this.setState({
          About4:About4,
          About4_2:About4_2,
          About4_3:About4_3, 
          About4_4:About4_4,
          About4_5:About4_5,
          About4_6:About4_6            
      })
        console.log(About4)
    }.bind(this)
  })
$.ajax({
    type:"get",
    url:"http://localhost:8005/AboutTwo/AboutTwo",
    async:true,       
    success:function(e){
      var AboutTwo1=[];
      var AboutTwo2=[];
      for(var i in e){
          if(e[i].img2==null){
            AboutTwo1.push(e[i])
          }else{
            AboutTwo2.push(e[i])
          }
      }
           this.setState({
           AboutTwo1:AboutTwo1,
           AboutTwo2:AboutTwo2,
      })

    }.bind(this)
  })
}
  render() {
    return (
    	<div className="x-warp">
		 <ul className="AboutMe"> 
		 	<li className='listO'>
              <h4>{
                 this.state.AboutOne
              }
              	<a><span></span></a>
              </h4>
              <div className="banJR clear">
                 <img src={this.state.Abg} alt="AboutImage" title="AboutImage"/>
              </div>
              <div className="Head-content">
	              <h2>{this.state.AboutOne}</h2>

                {  this.state.AboutOnes.map(function(val,k){
                  return <p key={k}>{val.con}</p>
                })
                }	


              </div>
          </li>
             <li className='listS'>
              <h4>股东和管理层 <a><span></span></a></h4>
            <div className="listS-content">
              <h2>主要股东</h2>
              <div className="yqlj clear">
              {  this.state.AboutTwo1.map(function(val,k){

                 return  <a href="#" key={k} ><img src={val.img1} alt="" />{val.con1}</a>
                })
                }
              </div>
              <h5>管理层</h5>
              <div className="Peoclass clear">
              {  this.state.AboutTwo2.map(function(val,k){
                 return <div className="peolist" key={k} >
                        <img src={val.img2} alt="" />
                        <p>{val.con2}</p>
                        </div>
                })
                }
              </div>
            </div>
          </li>
          <li className="listT">
              <div className="lunboTwo">
                   <h4>微众里程碑</h4>
                      <Carousel arrows>
                       <div>
                        <div className="item">
                            <div className="item-head"></div>
                            <div className="item-con">
                                  <h6>{this.state.About3}</h6>
                                  <p>                                 
                                    {this.state.About3_2}                                
                                  </p>
                            </div>
                         </div>                              
                        </div> 
                        <div>
                        <div className="item">
                            <div className="item-head"></div>
                            <div className="item-con">
                                   <h6>{this.state.About3}</h6>
                                  <p>                                 
                                    {this.state.About3_2}                                
                                  </p>
                            </div>
                         </div>                              
                        </div> 
                      <div>
                        <div className="item">
                            <div className="item-head"></div>
                            <div className="item-con">
                                  <h6>{this.state.About3}</h6>
                                  <p>                                 
                                    {this.state.About3_2}                                
                                  </p>
                            </div>
                         </div>                              
                        </div>        
                      </Carousel>
              </div>
          </li>
          <li className="listTh">                
                  <div className="lunboTwo">
                   <h4>荣誉榜</h4>
                      <Carousel arrows>
                        <div className="lun-box">
                              <ul className="rong">
                              {this.state.About4_5.map(function(val,k){
                        return <li key={k} className="jieshao" >
                                  <img src={val.Img} alt="" />
                                  <div><p>{val.con}</p></div> 
                               </li>
                      })
                      }                                       
                              </ul>
                        </div>
                        <div className="lun-box">
                              <ul className="rong">
                               {this.state.About4_6.map(function(val,k){
                        return <li key={k} >
                                  <img src={val.Img} alt="" />
                                  <div><p>{val.con}</p></div> 
                               </li>
                      })
                      }           
                                                   
                              </ul>
                        </div>
                        <div className="lun-box">
                              <ul className="rong">
                               {this.state.About4_6.map(function(val,k){
                        return <li key={k} >
                                  <img src={val.Img} alt="" />
                                  <div><p>{val.con}</p></div> 
                               </li>
                      })
                      }           
                                                   
                              </ul>
                        </div>
                        <div className="lun-box">
                              <ul className="rong">
                               {this.state.About4_5.map(function(val,k){
                        return <li key={k} >
                                  <img src={val.Img} alt="" />
                                  <div><p>{val.con}</p></div> 
                               </li>
                      })
                      }                                                           
                              </ul>
                        </div>    
                        <div className="lun-box">
                              <ul className="rong">
                               {this.state.About4_6.map(function(val,k){
                        return <li key={k} >
                                  <img src={val.Img} alt="" />
                                  <div><p>{val.con}</p></div> 
                               </li>
                      })
                      }           
                                                   
                              </ul>
                        </div>
                        <div className="lun-box">
                              <ul className="rong">
                               {this.state.About4_5.map(function(val,k){
                        return <li key={k} >
                                  <img src={val.Img} alt="" />
                                  <div><p>{val.con}</p></div> 
                               </li>
                      })
                      }                                                           
                              </ul>
                        </div>                         
                      </Carousel>
              </div>
          </li>
          <li className="listF"> 
              <img src={img1} alt="" className="lan-bg"/>
              <p>连接伙伴</p>
              <div className="line-bg">
                  <div className="icon-1 line-bg-classOne">
                      {this.state.About4.map(function(val,k){
                        return <a key={k} ><img src={val.Img} alt="" /></a>
                      })
                      }
                  </div>
                  <div className="icon-2 line-bg-classOne" id="showH">                      
                      {this.state.About4_3.map(function(val,k){
                        return <a key={k} ><img src={val.Img} alt="" /></a>
                      })
                      }
                  </div>
                  <div className="icon-3 line-bg-classOne">
                      {this.state.About4_2.map(function(val,k){
                        return <a key={k} ><img src={val.Img} alt="" /></a>
                      })
                      }
                  </div>
                  <div className="icon-1 line-bg-classTwo">
                        {this.state.About4_2.map(function(val,k){
                        return <a key={k} ><img src={val.Img} alt="" /></a>
                      })
                      }
                  </div>
                  <div className="icon-2 line-bg-classTwo">
                        {this.state.About4_4.map(function(val,k){
                        return <a key={k} ><img src={val.Img} alt="" /></a>
                      })
                      }
                  </div>
                  <div className="icon-3 line-bg-classTwo">
                        {this.state.About4_3.map(function(val,k){
                        return <a key={k} ><img src={val.Img} alt="" /></a>
                      })
                      }

                  </div>
                  <div className="icon-4 line-bg-classTwo">
                    {this.state.About4.map(function(val,k){
                        return <a key={k} ><img src={val.Img} alt="" /></a>
                      })
                      }
                  </div>
                  <div className="icon-5 line-bg-classTwo">
                        {this.state.About4_2.map(function(val,k){
                        return <a key={k} ><img src={val.Img} alt="" /></a>
                      })
                      }
                  </div>
                  <div className="icon-6 line-bg-classTwo">
                        {this.state.About4_3.map(function(val,k){
                        return <a key={k} ><img src={val.Img} alt="" /></a>
                      })
                      }


                  </div>
                  <div className="icon-1 line-bg-classThree">
                    ` {this.state.About4_4.map(function(val,k){
                        return <a key={k} ><img src={val.Img} alt="" /></a>
                      })
                      }


                  </div>
                  <div className="icon-2 line-bg-classThree">
                        {this.state.About4_2.map(function(val,k){
                        return <a key={k} ><img src={val.Img} alt="" /></a>
                      })
                      }
                  </div>
                  <div className="icon-1 line-bg-classFore">
                      {this.state.About4_3.map(function(val,k){
                        return <a key={k} ><img src={val.Img} alt="" /></a>
                      })
                      }

                  </div>
                  <div className="icon-2 line-bg-classFore">
                        {this.state.About4_2.map(function(val,k){
                        return <a key={k} ><img src={val.Img} alt="" /></a>
                      })
                      }
                  </div>
                  <div className="icon-3 line-bg-classFore">
                        {this.state.About4_3.map(function(val,k){
                        return <a key={k} ><img src={val.Img} alt="" /></a>
                      })
                      }
                  </div>
                  <div className="icon-1 line-bg-classFive">
                        {this.state.About4_4.map(function(val,k){
                        return <a key={k} ><img src={val.Img} alt="" /></a>
                      })
                      }
                  </div>
                  <div className="icon-1 line-bg-classSix">
                        {this.state.About4.map(function(val,k){
                        return <a key={k} ><img src={val.Img} alt="" /></a>
                      })
                      }
                  </div>
              </div>
          </li>
		 </ul>
     <Footer />	    
	    </div>

    );
  }
}
export default AboutMe;
