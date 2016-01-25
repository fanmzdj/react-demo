/**
 * Created by pomy on 15/11/4.
 * menu.js
 *
 */
require("../css/flow.css") // 载入 css

// 载入模块
var $ = require('../node_modules/commonjs-zepto/zepto.js').$
var React = require('../node_modules/react/dist/react.js');
var ReactDOM = require('../node_modules/react-dom/dist/react-dom.js');
var ActionPlusMinusItem = require('./actionPlusMinus.js');

// flow 品类区块：上四－－下四
var ColumnU4D4Block = React.createClass({
    render: function () {
        var lists = [
                        {name:'', category:'xxxx'},
                        {name:'', category:'xxxx'},
                        {name:'', category:'xxxx'},
                        {name:'', category:'xxxx'},
                        {name:'', category:'xxxx'},
                        {name:'', category:'xxxx'},
                        {name:'', category:'xxxx'},
                        {name:'', category:'xxxx'}
                    ];
        return (
            <div className="column-u4d4-block flow-wrap-block" data-template-name="">
                <div className="block-title">{this.props.block.name+this.props.num}</div>
                <ul>
                {
                    // 数组
                    lists.map(function (item,i) {
                        if(i<4) {
                            return (
                                <li className="column-u4d4-block-u4-item" key={i}></li>
                            );
                        }else{
                            return (
                                <li className="column-u4d4-block-d4-item" key={i}></li>
                            );
                        }
                    })
                }
                    <div className="clear"></div>
                </ul>
            </div>
        );
    }
});
// flow 品类区块：上二－－下五
var ColumnU2D5Block = React.createClass({
    render: function () {
        var lists = [
                        {name:'', category:'xxxx'},
                        {name:'', category:'xxxx'},
                        {name:'', category:'xxxx'},
                        {name:'', category:'xxxx'},
                        {name:'', category:'xxxx'},
                        {name:'', category:'xxxx'},
                        {name:'', category:'xxxx'}
                    ];
        return (
            <div className="column-u2d5-block flow-wrap-block" data-template-name="">
                <div className="block-title">{this.props.block.name+this.props.num}</div>
                <ul>
                {
                    // 数组
                    lists.map(function (item,i) {
                        if(i<2) {
                            return (
                                <li className="column-u2d5-block-u2-item" key={i}></li>
                            );
                        }else{
                            return (
                                <li className="column-u2d5-block-d5-item" key={i}></li>
                            );
                        }
                    })
                }
                    <div className="clear"></div>
                </ul>
            </div>
        );
    }
});
// flow 品类区块：三列
var Column3Block = React.createClass({
    render: function () {
        var lists = [   
                        {name:'', category:'xxxx'},
                        {name:'', category:'xxxx'},
                        {name:'', category:'xxxx'}
                    ];
        return (
            <div className="column3-block flow-wrap-block" data-template-name="">
                <div className="block-title">{this.props.block.name+this.props.num}</div>
                <ul>
                {
                    // 数组
                    lists.map(function (item,i) {
                        return (
                            <li className="column3-block-item" key={i}></li>
                        );
                    })
                }
                    <div className="clear"></div>
                </ul>
            </div>
        );
    }
});
// flow 品类区块
var FlowBlock = React.createClass({
    render: function () {
        var lists = [   
                        {name:'商品xx', category:'xxxx'},
                        {name:'商品xx', category:'xxxx'},
                        {name:'商品xx', category:'xxxx'},
                        {name:'商品xx', category:'xxxx'}
                    ];
        return (
            <div className="flow-block flow-wrap-block" data-template-name="">
                <div className="block-title">{this.props.block.name+this.props.num}</div>
                <ul>
                {
                    // 数组
                    lists.map(function (item,i) {
                        return (
                            <FlowItem item={item} key={i}></FlowItem>
                        );
                    })
                }
                </ul>
            </div>
        );
    }
});
// flow 品类单项
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
                <ActionPlusMinusItem></ActionPlusMinusItem>
            </li>
        );
    }
});
// 定义组件
var FlowList = React.createClass({
    getDefaultProps: function () {
        
    },
    factory: function (name, block) {
        
        return <FlowBlock block={block} num={i} key={i}></FlowBlock>;
    },
    tap:function () {
    },
    render: function () {
        var lists = [
                        {name:'品类', category:'xxxx', template:'column3-block'},
                        {name:'品类', category:'xxxx', template:'column-u2d5-block'},
                        {name:'品类', category:'xxxx', template:'column-u4d4-block'},
                        {name:'品类', category:'xxxx', template:'flow-block'}
                    ];
        return (
            <ul className="flow-wrap">
            {
                // 数组
                lists.map(function (block,i) {
                    if(block.template=="flow-block") {
                        return (
                            <FlowBlock block={block} num={i} key={i}></FlowBlock>
                        );
                    }else if(block.template=="column3-block") {
                        return (
                            <Column3Block block={block} num={i} key={i}></Column3Block>
                        );
                    }else if(block.template=="column-u2d5-block") {
                        return (
                            <ColumnU2D5Block block={block} num={i} key={i}></ColumnU2D5Block>
                        );
                    }else if(block.template=="column-u4d4-block") {
                        return (
                            <ColumnU4D4Block block={block} num={i} key={i}></ColumnU4D4Block>
                        );
                    }
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
