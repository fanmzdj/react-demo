/**
 * Created by pomy on 15/11/4.
 * menu.js
 *
 */
require("../css/navigator.css") // 载入 css

// 载入模块
var $ = require('../node_modules/commonjs-zepto/zepto.js').$
var React = require('../node_modules/react/dist/react.js');
var ReactDOM = require('../node_modules/react-dom/dist/react-dom.js');
// 定义组件
var Navigator = React.createClass({
    getDefaultProps: function () {
        
    },
    componentDidMount: function () {
    	var id=this.props.reverse;
    	var that=$('#Navigator');
    	$(id).before(that.removeClass('hide'));
    	console.log(that.offset());
    },
    render: function () {
        var lists = [
        				{id:'', name:''},
        				{id:'', name:''},
        				{id:'', name:''}
                    ];
        return (
        	<div className="navigator-wrap">
	            <div className="navigator-title">限时特惠</div>
	            <span className="i-nav-title">分类<em className="nav-icon"></em></span>
	            <ul className="navigator-list">
		            {
		                // 数组
		                lists.map(function (item, i) {
		                    return (
		                    	<li key={i}></li>
	                    	);
		                })
		            }
	        	</ul>
        	</div>
        );
    }
});
// 添加组件
ReactDOM.render(
    <Navigator reverse="#SectionComponent" className="hide">
    </Navigator>,
    document.getElementById('Navigator')
);