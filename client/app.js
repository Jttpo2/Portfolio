let p5ProjectsPath = './projects/p5/';
let sketch1Folder = 'blobs/';
let sketch2Folder = 'perlin/';
let sketch3Folder = 'code-rain/';
let sketchName = 'index.html';

let currentSketchIndex = 1;
let sketchContainerName = 'sketch-container';

let sketches = [
{
	name: 'blobs',
	path: p5ProjectsPath + sketch1Folder + sketchName,
	description: 'Simple blob-eat-blob game'
}, {
	name: 'perlin',
	path: p5ProjectsPath + sketch2Folder + sketchName,
	description: 'Perlin noise pattern generating experiment'
},
{
	name: 'code-rain',
	path: p5ProjectsPath + sketch3Folder + sketchName,
	description: 'Matrix style code rain'
}
];

displayOnly(sketches[1]);

// sketches.forEach (appendToDOM);

function appendToDOM(sketch) {
	let iframe = document.createElement('iframe');
	iframe.src = sketch.path;
	iframe.width = window.innerWidth;
	iframe.height = window.innerHeight;
	let sketchContainerNode = document.getElementById(sketchContainerName);
	sketchContainerNode.appendChild(iframe);

	overlayWithInfoPanel(sketchContainerNode, sketch.description);
}

function removeAllSketches() {
	let sketchContainerNode = document.getElementById(sketchContainerName);
	while(sketchContainerNode.hasChildNodes()) {
		sketchContainerNode.removeChild(sketchContainerNode.lastChild);
	}
}

function displayOnly(sketch) {
	removeAllSketches();
	appendToDOM(sketch);
}

function displayNextSketch() {
	if (++currentSketchIndex == sketches.length) {
		currentSketchIndex = 0;
	}
	displayOnly(sketches[currentSketchIndex]);
}

function displayPreviousSketch() {
	if (--currentSketchIndex < 0) {
		currentSketchIndex = sketches.length -1;
	}
	displayOnly(sketches[currentSketchIndex]);
}

function overlayWithInfoPanel(node, infoText) {
	if (!infoText || infoText == "") {
		return;
	}
	let panel = document.createElement('div');
	panel.className = "info-panel";
	let content = document.createTextNode(infoText);
	panel.appendChild(content);
	node.appendChild(panel);
}

let prevButton = document.getElementById("previous");
prevButton.onclick = displayPreviousSketch;
let nextButton = document.getElementById("next");
nextButton.onclick = displayNextSketch;
