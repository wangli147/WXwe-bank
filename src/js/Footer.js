import React, { Component } from 'react';
import { Carousel } from 'antd';
import '.././App.css';
import '../css/footer.css';
import $ from 'jquery';

class Footer extends Component {
	constructor(){
	    super()
	    this.state={
	       li:[]
	    }
	 }
	componentDidMount(){
		$.ajax({
        type:"get",
        url:"http://localhost:8005/footer/footer",
        async:true,
        contentType:false,
        processData:false,
        success:function(data){
          this.setState({
          	  tit:data[0].li1,
          	  tit1:data[0].li2,
          	  tit2:data[0].li3,
          	  tit3:data[0].li4,
          	  h1:data[0].h1,
          	  tel:data[0].tel,
          	  date:data[0].dat,
          	  left:data[0].left,
              li:data    
          })  
        }.bind(this)      
         
      })
	}
  render() {
    return (
	    <div>
	    	<div className="wl_footer">
	    		<div className="wl_Finner">
	    			<div className="wl_mainFo clear">
	    				<ul className="wl_menu">
	    					<li>	    						
								<dl >
	    							<dt>{this.state.tit}</dt>
	    							{this.state.li.map(function(e,i){
										return (
			    							<dd key={i}><a href="#">{e.con1}</a></dd>			    				
			    						)
									})}
	    						</dl>
	    							
	    					</li>
	    					<li>	    						
								<dl >
	    							<dt>{this.state.tit1}</dt>
	    							{this.state.li.map(function(e,i){
										return (
			    							<dd key={i}><a href="#">{e.con2}</a></dd>			    				
			    						)
									})}
	    						</dl>
	    					</li>
	    					<li>	    						
								<dl >
	    							<dt>{this.state.tit2}</dt>
	    							{this.state.li.map(function(e,i){
										return (
			    							<dd key={i}><a href="#">{e.con3}</a></dd>			    				
			    						)
									})}
	    						</dl>
	    					</li>
	    					<li>	    						
								<dl>
	    							<dt>{this.state.tit3}</dt>
	    							{this.state.li.map(function(e,i){
										return (
			    							<dd key={i}><a href="#">{e.con4}</a></dd>			    				
			    						)
									})}
	    						</dl>
	    					</li>
	    					
	    				</ul>
	    				<div className="wl_tel right">
	    					<h1>{this.state.h1}</h1>
	    					<p className="wl_phone">{this.state.tel}</p>
	    					<p className="date">{this.state.date}</p>
	    				</div>
	    			</div>
	    			<div className="wl_bottom clear">
	    				<div className="left">
	    					{this.state.left}
	    				</div>
	    				<ul className="copyright right">
	    					{this.state.li.map(function(e,i){
	    						return (
	    							<li key={i}>{e.copy}</li>
	    						)
	    					})}
	    					
	    				</ul>
	    			</div>
	    		</div>
	    	</div>
    		
	    </div>
    );
  }
}
export default Footer;
