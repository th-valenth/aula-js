let listaimg = [
	'download.jpeg',
	'teg.jpeg',
	'3.jpeg',
	'4.jpeg',
	'5.jpg',
]
 let counter = 0;

let mec = document.querySelector('body');

let before = document.createElement('h1')
let beforeText = document.createTextNode('<')
before.appendChild(beforeText);

let img = document.createElement('img')
img.setAttribute('src', listaimg[counter])

let next  = document.createElement('h1')
let nextText = document.createTextNode('>')
next.appendChild(nextText);

function init() {
	console.log(before , beforeText , next , nextText);
	mec.appendChild(before);
	mec.appendChild(img);
	mec.appendChild(next);
}

before.addEventListener('click' , function(){
	if (counter > 0){
	   counter = counter - 1;
	} else {counter = 4}
	img.setAttribute('src', listaimg[counter])
	
})

next.addEventListener('click' , function(){
	if (counter < 4){
	   counter = counter + 1;
	} else {counter = 0}
	img.setAttribute('src', listaimg[counter])
	
})

init();