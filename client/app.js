let p5ProjectsPath = './projects/p5/';
let sketch1Folder = 'blobs/';
let sketch2Folder = 'perlin/';
let sketch3Folder = 'code-rain/';
let sketchName = 'index.html';

let sketches = [
{
	name: 'blobs',
	path: p5ProjectsPath + sketch1Folder + sketchName,
	description: 'Simple blob-eat-blob game.'
}, {
	name: 'perlin',
	path: p5ProjectsPath + sketch2Folder + sketchName,
	description: 'Perlin noise pattern generating experiment.'
},
{
	name: 'code-rain',
	path: p5ProjectsPath + sketch3Folder + sketchName,
	description: 'Matrix style code rain.'
}
];

sketches.forEach (function(sketch) {
	let iframe = document.createElement('iframe');
	iframe.src = sketch.path;
	iframe.width = window.innerWidth;
	iframe.height = window.innerHeight;
	document.getElementById('sketch-container').appendChild(iframe);
});