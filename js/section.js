/**
 * Created by pomy on 15/11/4.
 * section.js
 *
 */
require("../css/section.css") // 载入 css

// 载入模块
var $ = require('../node_modules/commonjs-zepto/zepto.js').$;
var React = require('../node_modules/react/dist/react.js');
var ReactDOM = require('../node_modules/react-dom/dist/react-dom.js');
var ActionPlusMinusItem = require('./actionPlusMinus.js');
// 定义子组件
var SectionItem = React.createClass({
    getInitialState: function() {
        return {active: false};
    },
    tap: function (id) {
        
    },
    render: function () {
        var col = this.props.item;
        return (
            <li className={'section-item'}>
            {
                // 数组
                col.items.map(function (item,i) {
                    return (
                        <div className={'section-column section-column'+col.column} key={i}>
                            Section{i}
                            <ActionPlusMinusItem className={"section-action"}></ActionPlusMinusItem>
                        </div>
                    );
                })
            }
            </li>
        );
    }
});
// 定义组件
var SectionList = React.createClass({
    getDefaultProps: function () {
        
    },
    tap:function () {
        
    },
    render: function () {
        var lists = [   
                        {name:'', column: 2, items: [{},{}]}
                    ];
        return (
            <ul className="section-wrap flow-wrap-block">
                <div className="block-title hide">{'限时特惠'}</div>
            {
                // 数组
                lists.map(function (item,i) {
                    return (
                        <SectionItem item={item} key={i}></SectionItem>
                    );
                })
            }
            </ul>
        );
    }
});
// 添加组件
ReactDOM.render(
    <SectionList>
    </SectionList>,
    document.getElementById('SectionComponent')
);
