import React, { Component } from 'react';
import '../css/AboutMe.css';
import { Carousel } from 'antd';
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

componentDidMount(){
//     function onChange(a, b, c) {
//   console.log(a, b, c);
// }



}


  render() {
    return (
    	<div className="x-warp">
		 <ul className="AboutMe"> 
		 	<li className='listO'>
              <h4>微众银行 
              	<a><span></span></a>
              </h4>
              <div className="banJR clear">
                 <img src={AboutImage} alt="AboutImage" title="AboutImage"/>
              </div>
              <div className="Head-content">
	              <h2>微众银行</h2>
	              <p>微众银行是国内首家开业的民营银行，由腾讯、百业源和立业等多家知名企业发起设立</p>
	              <p>于2014年12月获得由深圳银监局颁发的金融许可证，注册资本为人民币42亿元</p>
	              <p>微众银行严格遵守国家金融法律法规和监管政策，以合规经营和稳健发展为基础</p>
	              <p>致力于为普罗大众、微小企业提供差异化、有特色、优质便捷的金融服务</p>
              </div>
          </li>
             <li className='listS'>
              <h4>股东和管理层 <a><span></span></a></h4>
            <div className="listS-content">
              <h2>主要股东</h2>
              <div className="yqlj clear">
                <a href="#"><img src={Image1} alt="" />腾讯</a>
                <a href="#"><img src={Image2} alt="" />百业源投资</a>
                <a href="#"><img src={Image3} alt="" />立业集团</a>
              </div>
              <h5>管理层</h5>
              <div className="Peoclass clear">
                <div className="peolist">
                  <img src={peo1} alt="pe01" />
                  <p>顾敏 （董事长）</p>
                </div>
                <div className="peolist">
                  <img src={peo2} alt="pe02" />
                  <p>李南青 （行长）</p>
                </div>
                <div className="peolist">
                  <img src={peo3} alt="pe03" />
                  <p>梁瑶兰 （监事长）</p>
                </div>
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
                                  <h6>深圳前海微众银行股份有限公司正式成立</h6>
                                  <p>在获得《深圳银监局关于深圳前海微众银行股份有限公司开业的批复》
                                  （深银监复〔2014〕420号）并取得金融许可证之后，我行于2014年12月16日获得营业执照、组织机构代码、
                                  税务登记证，宣告深圳前海微众银行股份有限公司正式成立。
                                  </p>
                            </div>
                         </div>                              
                        </div>  
                        <div>
                        <div className="item">
                            <div className="item-head"></div>
                            <div className="item-con">
                                  <h6>深圳前海微众银行股份有限公司正式成立</h6>
                                  <p>在获得《深圳银监局关于深圳前海微众银行股份有限公司开业的批复》
                                  （深银监复〔2014〕420号）并取得金融许可证之后，我行于2014年12月16日获得营业执照、组织机构代码、
                                  税务登记证，宣告深圳前海微众银行股份有限公司正式成立。
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
                              <ul>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>                              
                              </ul>
                        </div>
                        <div className="lun-box">
                              <ul>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>                              
                              </ul>
                        </div>
                        <div className="lun-box">
                              <ul>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>
                                <li>
                                  <div></div>
                                </li>                              
                              </ul>
                        </div>                       
                      </Carousel>
              </div>
          </li>
          <li className="listF"> 
              <img src={img1} alt="" className="lan-bg"/>
              <p>连接伙伴</p>
              <div className="line-bg">
                  <div className="icon-1 line-bg-classOne"></div>
                  <div className="icon-2 line-bg-classOne"></div>
                  <div className="icon-3 line-bg-classOne"></div>
                  <div className="icon-1 line-bg-classTwo"></div>
                  <div className="icon-2 line-bg-classTwo"></div>
                  <div className="icon-3 line-bg-classTwo"></div>
                  <div className="icon-4 line-bg-classTwo"></div>
                  <div className="icon-5 line-bg-classTwo"></div>
                  <div className="icon-6 line-bg-classTwo"></div>
                  <div className="icon-1 line-bg-classThree"></div>
                  <div className="icon-2 line-bg-classThree"></div>
                  <div className="icon-1 line-bg-classFore"></div>
                  <div className="icon-2 line-bg-classFore"></div>
                  <div className="icon-3 line-bg-classFore"></div>
                  <div className="icon-1 line-bg-classFive"></div>
                  <div className="icon-1 line-bg-classSix"></div>
              </div>
          </li>
		 </ul>
     <Footer />	    
	    </div>

    );
  }
}
export default AboutMe;
