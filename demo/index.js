//import {h} from "src/vnode"
import {h, render} from '../src/packages/vx'
const TextDom = /\bspan\b|\bp\b|\bh[1-6]\b/
import './index.css'
let Name = 'yunfengsay'

const App = function () {
	return <section className="title">
		<time>{new Date()}</time>
		<div>{Name}</div>
		<div>
			{Math.random()}
			<p>math.random👆</p>
		</div>
	</section>;
}

window.onload = function(){
	const root = document.getElementById('root')
	render(App(), root)
}
