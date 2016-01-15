/**
 * Created by pomy on 15/11/4.
 * menu.js
 *
 */
require("../css/actionPlusMinus.css") // 载入 css

// 载入模块
var $ = require('../node_modules/commonjs-zepto/zepto.js').$;
var React = require('../node_modules/react/dist/react.js');

var ActionPlusMinusItem = React.createClass({
    getInitialState: function () {
        return {active: false};
    },
    updateNum: function (that, action, fn) {
        var dom = that.parents('.plsu-minus-action'),
            num = parseInt(dom.find('.two-number').text());
        if(action=="-" && num==1) {
            dom.find('.item-two').addClass('hide');
            dom.find('.item-one').removeClass('hide');
        }
        if(action=="+" && num==0) {
            dom.find('.item-one').addClass('hide');
            dom.find('.item-two').removeClass('hide');
        }
        num = (action=="+"?num+1:num-1);
        dom.find('.two-number').text(num);
        // 回调
        typeof fn != "function"?new Function():fn(action);
    },
    updateCar: function (action) {
        var car = $('#car_count');
            carNum = parseInt(car.text());
        carNum = (action=="+"?carNum+1:carNum-1);
        if(carNum>0) {
            car.text(carNum).removeClass('hide');
        }else{
            car.text(0).addClass('hide');
        }
    },
    plus: function (elem, index) {
        this.updateNum($(elem.target), '+', this.updateCar);
    },
    minus: function (elem, index) {
        this.updateNum($(elem.target), '-', this.updateCar);
    },
    render: function () {
        var wrapClass = this.props.className;
        return (
            <div className={"plsu-minus-action "+this.props.className}>
                <div className="item-one">
                    <i className="action-plus" onClick={this.plus}></i>
                    <button className="minus-plus one-plus"></button>
                </div>
                <div className="item-two hide">
                    <i className="action-plus" onClick={this.plus}></i>
                    <button className="minus-plus two-plus"></button>
                    <span className="two-number">0</span>
                    <i className="action-minus" onClick={this.minus}></i>
                    <button className="minus-plus two-minus"></button>
                </div>
            </div>
        );
    }
});

module.exports = ActionPlusMinusItem;
