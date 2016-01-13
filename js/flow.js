/**
 * Created by pomy on 15/11/4.
 * menu.js
 *
 */
require("../css/flow.css") // 载入 css

// 载入模块
var $ = require('../node_modules/jquery/dist/jquery.min.js');
var React = require('../node_modules/react/dist/react.js');
var ReactDOM = require('../node_modules/react-dom/dist/react-dom.js');

var FlowItem = React.createClass({
    getInitialState: function() {
        return {active: false};
    },
    tap: function (id) {
        
    },
    render: function () {
        var item = this.props.item;
        return (
            <li className={'flow-item'}>
                <h3>{item.name}</h3>
                <p>{item.category}</p>
            </li>
        );
    }
});
// 定义组件
var FlowList = React.createClass({
    getDefaultProps: function () {
        
    },
    tap:function () {
        
    },
    render: function () {
        var lists = [   
                        {name:'商品xx', category:'xxxx'},
                        {name:'商品xx', category:'xxxx'},
                        {name:'商品xx', category:'xxxx'},
                        {name:'商品xx', category:'xxxx'},
                        {name:'商品xx', category:'xxxx'},
                        {name:'商品xx', category:'xxxx'},
                        {name:'商品xx', category:'xxxx'},
                        {name:'商品xx', category:'xxxx'},
                        {name:'商品xx', category:'xxxx'},
                        {name:'商品xx', category:'xxxx'},
                        {name:'商品xx', category:'xxxx'}
                    ];
        return (
            <ul className="flow-wrap">
            {
                // 数组
                lists.map(function (item,i) {
                    return (
                        <FlowItem item={item} key={i}></FlowItem>
                    ); 
                })
            }
            </ul>
        );
    }
});
// 添加组件
ReactDOM.render(
    <FlowList>
    </FlowList>,
    document.getElementById('FlowComponent')
);
