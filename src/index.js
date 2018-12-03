import _ from 'lodash';
import printMe from './print.js';
import './styles.css';

function component (){
    var element = document.createElement("div");
    var btn     = document.createElement("button");
    
    element.innerHTML = _.join(["Hello", "Webpack"], " ");
    // element.innerHTML = "Hello Webpack";

    btn.innerHTML = "点我 检查控制台";
    btn.onclick   = printMe;

    element.appendChild(btn);

    return element;
}

let element = component();

document.body.appendChild(element);

if(module.hot){
    // 判断是否热更新 如果是的话 则判断接受
    module.hot.accept('./print.js', function(){
        console.log('接受 print.js 更新了的没模块');
        // 重新渲染页面之后 component 更新 click 事件处理
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    });
}