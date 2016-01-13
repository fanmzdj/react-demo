/**
 * Created by pomy on 15/11/4.
 * menu.js
 *
 */
require("../css/common.css") // 载入 css
require("../css/header.css") // 载入 css

// 载入模块
var $ = require('../node_modules/jquery/dist/jquery.min.js');
var React = require('../node_modules/react/dist/react.js');
var ReactDOM = require('../node_modules/react-dom/dist/react-dom.js');

var HeaderItem = React.createClass({
    getInitialState: function() {
        return {active: false};
    },
    tap: function (id) {
        
    },
    render: function () {
        var item = this.props.item;
        return (
            <li className={'header-item'}>
                <span className="shop-category">
                    <span>店铺：</span>
                    <span className="shopname" data-latitude="22.623945" data-longitude="114.044948">东边店-楼宇店</span>
                    <a href="" className="shop-link">切换&gt;</a>
                </span>
            </li>
        );
    }
});
// 定义组件
var HeaderList = React.createClass({
    getDefaultProps: function () {
        
    },
    tap:function () {
        
    },
    render: function () {
        var lists = [   
                        {name:'', category:''}
                    ];
        return (
            <ul className="header-wrap">
            {
                // 数组
                lists.map(function (item,i) {
                    return (
                        <HeaderItem item={item} key={i}></HeaderItem>
                    ); 
                })
            }
            </ul>
        );
    }
});
// 添加组件
ReactDOM.render(
    <HeaderList>
    </HeaderList>,
    document.getElementById('HeaderComponent')
);
