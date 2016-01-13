// entry.js
require("../css/entry.css") // 载入 css
// 载入模块
var $ = require('../node_modules/jquery/dist/jquery.min.js');
var React = require('../node_modules/react/dist/react.js');
var ReactDOM = require('../node_modules/react-dom/dist/react-dom.js');
var module = require('./module.js');

// 定义组件
var MenuList = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'hello world'
        };
    },
    tap:function () {
        
    },
    render: function () {
        return (
            <ul className="menu-wrap">
            	hello world
            </ul>
        );
    }
});
// 添加组件
ReactDOM.render(
    <MenuList>
    </MenuList>,
    document.getElementById('MenuComponent')
);
