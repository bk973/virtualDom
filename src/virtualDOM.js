//virtualDOM..
/*
@param String t - the type of the element
@param {Object} p - the props Object
@param Array[] c - an array of child nodes...
@returns an element Node...
*/
function createVirtualNode(type, props, children){
         return {
         	type, 
         	props, 
         	children,
         }
}

/*
@description - takes a virtualDOM node and returns a real DOM node
@param Object{} node - the virtualDom that we want to transform
@returns - real DOM node...
*/
function createElement(node){
         if(typeof node === 'string') return document.createTextNode(node)
         const $el = document.createElement(node.type)
         node.children.map(createElement).forEach($el.appendChild.bind($el))
         return $el
}

/*
Diffing trees...
 appendChild()
 removeChild()
 replaceChild()

*/

/*
@description - 
@param {} Parent node - 
@param {} new node -
@param {} old node
*/
function updateElement($parent, newNode, oldNode, index=0){
         if(!oldNode){
         	//Case:: No oldNode, so a node was created
         	return $parent.appendChild(createElement(newNode))

         } else if(){
         	//Case:: No newNode, removeChild() from the DOM

         } else if(){
         	//There is a different node at that place and that means the node changed so we must replaceChild();
         	

         }
}

/*
@param {} node1
@param {} node2
*/
function changed(node1, node2){
 return typeof node1 !== typeof node2 || typeof node1 === typeof 'string' && node1 !== node2 || node1.type !== node2.type;
 // the typeof node1 is not the same as that of node2 or typeof node1 is string
 //and
 //node1 is not the same as node2 or the value of type of node1 is not the same as the value of type of node2
 //left assumption and right assumption must return the same thing...
}
//examples...


const myElement = createVirtualNode('div', {}, [
	createVirtualNode('h1', {},['this is homePage',]),
	createVirtualNode('h3', {},['welcome to the home page',]),
    createVirtualNode('div', {},[
    	createVirtualNode('ul', {},[
    		createVirtualNode('li', {},['one',]),
    		createVirtualNode('li', {},['two',]),
    		createVirtualNode('li', {},['three',]),,]),
    	]),
	])



let element = createElement(myElement);
console.log(element)
let root = document.getElementById('root')
root.appendChild(element)
