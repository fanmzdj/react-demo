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
        that.data('title',$('.navigator-title').text());
    	$(id).before(that.removeClass('hide'));
        // 页面滚动区域计算
        var areasData= function () {
            var arr=[];
            if(typeof that.data('areas')=="undefined") {
                $('.flow-wrap-block').forEach(function(item) {
                    arr.push($(item).offset().top);
                });
                that.data('areas', JSON.stringify(arr));
            }else{
                arr = that.data('areas');
            }
            return arr;
        };
        var scroll = {
            areas: function () {
                var that=$('#Navigator');
                var arr=[];
                if(typeof that.data('areas')=="undefined") {
                    $('.flow-wrap-block').forEach(function(item) {
                        arr.push($(item).offset().top);
                    });
                    that.data('areas', JSON.stringify(arr));
                }else{
                    arr = that.data('areas');
                }
                return arr;
            },
            titleUpdate: function (SY) {
                var arr=this.areas();
                for(var i=0,len=arr.length;i<len;i++) {
                    if((i+1)<len&&SY>=(arr[i]-40)&&SY<arr[i+1]) {
                        $('.navigator-title').html($('.flow-wrap-block').eq(i).find('.block-title').text());
                    }
                }
            }
        };
        // 页面滚动,会执行这里的代码
        window.onscroll = function (e) {
            var opt = {
                SThreshold: that.offset().top, // 当前阀值
                SY: window.scrollY // 当前距离Top值
            };
            if( opt.SY>=opt.SThreshold ) {
                $('.navigator-wrap').addClass('active');
            }else{
                $('.navigator-wrap').removeClass('active');
            }
            // 跟新滚动title
            scroll.titleUpdate(opt.SY);
        };
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