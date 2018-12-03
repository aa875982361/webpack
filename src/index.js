import _ from 'lodash';
import printMe from './print.js';

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

document.body.appendChild(component());