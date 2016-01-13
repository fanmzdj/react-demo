/**
 * Created by pomy on 15/11/4.
 * menu.js
 *
 */

require("../css/menu.css") // 载入 css

// 载入模块
var $ = require('../node_modules/jquery/dist/jquery.min.js');
var React = require('../node_modules/react/dist/react.js');
var ReactDOM = require('../node_modules/react-dom/dist/react-dom.js');

var MenuItem = React.createClass({
    getInitialState: function() {
        return {active: false};
    },
    tap: function (id) {
        var items=$('.'+id).parents('.menu-wrap').find('.menu-item .icon-menu');
        items.each(function (e) {
            e = items.eq(e);
            if(e.hasClass('active')) {
                e.removeClass('active');
            }
        });
        $('.'+id).find('.icon-menu').addClass('active');
    },
    render: function (item) {
        item = this.props.item;
        active = this.props.active;
        return (
            <li className={'menu-item menu-'+item.id} onClick={this.tap.bind(this, 'menu-'+item.id)}>
                <a href="javascript:void(0)">
                    <em className={"icon-menu icon-"+item.id+" "+active}></em>
                    <p>{item.name}</p>
                </a>
            </li>
        );
    }
});
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
        var names = [   {id:'order', name:'菜单'},
                        {id:'featured', name:'预定'},
                        {id:'cart', name:'购物车'},
                        {id:'mine', name:'我的'}];
        return (
            <ul className="menu-wrap">
            {
                // 数组
                names.map(function (item,i) {
                    var active = (i==3?'active':'');
                    return (
                        <MenuItem item={item} key={item.name} active={active}></MenuItem>
                    );
                })
            }
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
