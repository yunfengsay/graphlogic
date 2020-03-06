//import {h} from "src/vnode"
import {App} from  "./src"
const TextDom = /\bspan\b|\bp\b|\bh[1-6]\b/
function render(vnode, container) {
	let dom;
	if(vnode.elementName){
		dom = document.createElement(vnode.elementName)	
	}else {
		dom = document.createTextNode(vnode)
		return dom;
}
	// 设置属性
	for(let attrName in vnode.attributes){
		const attrValue = vnode.attributes[attrName]
		if(attrName === 'className') attrName = 'class';
		dom.setAttribute(attrName, attrValue)
	}
	if(vnode.children) {
		for(let item of vnode.children) {
			dom.appendChild(render(item))
		}
	}

	console.log(dom)
	if(container)	container.appendChild(dom);
	return dom
}

window.onload = function(){
	const root = document.getElementById('root')
	console.log(App)
	render(App, root)
}
