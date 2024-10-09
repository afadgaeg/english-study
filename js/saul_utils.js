let css = function(ele, cssObj) {
    if(ele && cssObj){
        for(let cssName in cssObj){
            ele.style[cssName] = cssObj[cssName];
        }
    }
};

let ele = function(eleName, attrObj, subNodes){
    let ele = document.createElement(eleName);
    if(attrObj){
        for(let attrName in attrObj){
            ele.setAttribute(attrName, attrObj[attrName]);
        }
    }
    if(subNodes){
        for(let sub of subNodes){
            ele.appendChild(sub);
        }
    }
    return ele;
}

let getProp = function(obj, props){
    let prop = props.shift();
    if(!obj[prop]){
        obj[prop] = {};
    }
    if(props.length === 0){
        return obj[prop];
    } else {
        return getProp(obj[prop], props);
    }
}

export default {
    getProp: getProp,
    ele: ele,
    css: css
};