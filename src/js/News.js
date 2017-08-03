import React, { Component } from 'react';
import { Carousel } from 'antd';
import '.././App.css';
import '../css/news.css';
import NewsXq from './NewsXq';
import Footer from './Footer';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Finance extends Component {
	constructor(){
  super()
  this.state={
    AboutOne:[],
    AboutOnes:[],
    AboutOnes1:[],
     AboutOnes2:[]
  }
}
	  componentDidMount(){
	$.ajax({
    type:"get",
    url:"http://localhost:8005/News/News",
    async:true,       
    success:function(e){
    	var AboutOnes=[];
        var AboutOnes1=[];
        var AboutOnes2=[];
      for(var i in e){
          if(e[i].id<=9){
            AboutOnes.push(e[i])
          }else if(e[i].id>=10&&e[i].id<=19){
            AboutOnes1.push(e[i])
          }else if(e[i].id>=20){
            AboutOnes2.push(e[i])
          }
      }
      this.setState({
         AboutOne:e[0].litit,
         AboutOnes:AboutOnes,
         AboutOnes1:AboutOnes1,
         AboutOnes2:AboutOnes2
      })
    }.bind(this)
  })
  	$(function(){
  		$('.new-tit>li').click(function(){
  			 var index=$(this).index();
  			 $('.x-first li').eq(index).addClass('x-one').siblings().removeClass('x-one');
  		})
  	})
  }
  render() {
    return (
    	<Router>
    	<div className="zuida"> 
    	 <Route path="/NewsXq" component={NewsXq} />	 	 
	     <Route exact path="/News" render={() => ( 
	     	 	<div className="x-warp-end">
	   		    <div className="x-news-box">	   		
	   			<ul className="x-first">
		   			<li className="x-one">
		   				<h2>重要新闻</h2>
		   				{  this.state.AboutOnes.map(function(val,k){
			                  return (
			                  	<div className="new-con" key={k}>
			                  		<Link to={`/NewsXq?${val.id}`}><p>{val.litit}
			                  		<span className="right">{val.litime}</span>
			                  		</p></Link>
			                  	</div>
			                  	)
			                })
			             }	
		   			</li>
		   			<li>
		   				<div className="new-con">
		   					<h2>新闻看点</h2>
		   					{  this.state.AboutOnes1.map(function(val,k){
			                  return (
			                  	<div className="new-con" key={k}>
			                  		<Link to={`/NewsXq?${val.id}`}><p>{val.litit}
			                  		<span className="right">{val.litime}</span>
			                  		</p></Link>
			                  	</div>
			                  	)
			                })
			            }
			            </div>	
		   			</li>
		   			<li>
		   				<div className="new-con">
		   				<h2>微众动态</h2>
		   					{  this.state.AboutOnes2.map(function(val,k){
			                  return (
			                  	<div className="new-con" key={k}>
			                  		<Link to={`/NewsXq?${val.id}`}><p>{val.litit}
			                  		<span className="right">{val.litime}</span>
			                  		</p></Link>
			                  	</div>
			                  	)
			                })
			            }
				   		</div>
		   			</li>
		   			<li>
		   			</li>		   			   			
	   			</ul>
	   			<ul  className="new-tit">
	   				<li className='x-block'>重要公告<span></span></li>
	   				<li>新闻看点 <span></span></li>
	   				<li>微众动态 <span></span></li>
	   			</ul>
	   		</div>	   			   		  	
	    </div>

	       )}/>
		 <Footer />
	    </div>

	    </Router>
    );
  }
}

export default Finance;
