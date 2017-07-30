import React, { Component } from 'react';
import { Carousel } from 'antd';
import '.././App.css';
import '../css/footer.css';

class Footer extends Component {
  render() {
    return (
	    <div>
	    	<div className="wl_footer">
	    		<div className="wl_Finner">
	    			<div className="wl_mainFo clear">
	    				<ul className="wl_menu">
	    					<li>
	    						<dl>
	    							<dt>金融信息</dt>
	    							<dd><a href="#">存款利率表</a></dd>
	    							<dd><a href="#">贷款利率表</a></dd>
	    							<dd><a href="#">服务价目表</a></dd>
	    						</dl>
	    					</li>
	    					<li>
	    						<dl>
	    							<dt>关于我们</dt>
	    							<dd><a href="#">微众里程碑</a></dd>
	    							<dd><a href="#">连接伙伴</a></dd>
	    							<dd><a href="#">加入我们</a></dd>
	    						</dl>
	    					</li>
	    					<li>
	    						<dl>
	    							<dt>新手指南</dt>
	    							<dd><a href="#">开户指引</a></dd>
	    						</dl>
	    					</li>
	    					<li>
	    						<dl>
	    							<dt>帮助中心</dt>
	    							<dd><a href="#">常见问题</a></dd>
	    						</dl>
	    					</li>
	    				</ul>
	    				<div className="wl_tel right">
	    					<h1>全国客服热线</h1>
	    					<p className="wl_phone">400-999-8800</p>
	    					<p className="date">周一至周日9:00-18:00</p>
	    				</div>
	    			</div>
	    			<div className="wl_bottom clear">
	    				<div className="left">
	    					银行经营场所：广东省深圳市南山区沙河西路1819号深圳湾科技生态园7栋A座
	    				</div>
	    				<ul className="copyright right">
	    					<li>Copyright © 2014 - 2017 WeBank</li>
	    					<li>All Rights Reserved.</li>
	    					<li>微众银行版权所有</li>
	    					<li><a href="#">粤ICP备14074715号-1</a></li>
	    				</ul>
	    			</div>
	    		</div>
	    	</div>
    		
	    </div>
    );
  }
}
export default Footer;
