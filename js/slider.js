/**
 * Created by pomy on 15/11/4.
 * menu.js
 *
 */
require("../css/slider.css") // 载入 css

// 载入模块
var $ = require('../node_modules/jquery/dist/jquery.min.js');
var React = require('../node_modules/react/dist/react.js');
var ReactDOM = require('../node_modules/react-dom/dist/react-dom.js');
var ReactSwipe = require('../node_modules/react-swipe/react-swipe.js');

// 定义组件
var SliderList = React.createClass({
    getDefaultProps: function () {
        
    },
    indexChange:function (index, elem) {
        $('.swipe-index-con .item-swipe-index.active').removeClass('active');
        $('.swipe-index-con .item-swipe-index').eq(index).addClass('active');
    },
    render: function () {
        var dir = '../img/';
        var lists = [   
                        {name:'', img:'00.jpg'},
                        {name:'', img:'01.jpg'},
                        {name:'', img:'02.jpg'}
                    ];
        return (
            <ul className="slider-wrap">
                <ReactSwipe className="slider-content" continuous={true} auto={3000} callback={this.indexChange}>
                {
                    // slider数组
                    lists.map(function (item,i) {
                        return (
                            <img src={dir+item.img} key={i}/>
                        );
                    })
                }
                </ReactSwipe>
                <div className="swipe-index-con">
                {
                    // slider数组
                    lists.map(function (item,i) {
                        return (
                            <div className={"item-swipe-index "+(i==0?'active':'')} key={i}></div>
                        );
                    })
                }
                </div>
            </ul>
        );
    }
});
// 添加组件
ReactDOM.render(
    <SliderList>
    </SliderList>,
    document.getElementById('SliderComponent')
);
