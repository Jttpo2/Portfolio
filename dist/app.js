let projectsPath = './projects/';
let p5Path = 'p5/';
let unityPath = 'unity/';
let sketchNameStandard = 'index.html';
let readmeNameStandard = "README.md";

let currentSketchIndex = 0;
let sketchContainerName = 'sketch-container';

let sketches = [
	{
		name: 'perlin',
		folderPath: projectsPath + p5Path + 'perlin/',
		entryFileName: sketchNameStandard,
		readmeFileName: readmeNameStandard,
		description: 'Perlin noise pattern generating experiment'
	},
	{
		name: 'flowers',
		folderPath: projectsPath + p5Path + 'flowers/',
		entryFileName: sketchNameStandard,
		readmeFileName: readmeNameStandard,
		description: 'Simulation of tulips in the wind'
	},
	{
		name: 'flockheart',
		folderPath: projectsPath + unityPath + 'flockheart/',
		entryFileName: sketchNameStandard,
		readmeFileName: readmeNameStandard,
		description: 'Flockheart'
	},
	{
		name: 'blobs',
		folderPath: projectsPath + p5Path + 'blobs/',
		entryFileName: sketchNameStandard,
		readmeFileName: readmeNameStandard,
		description: 'Simple blob-eat-blob game'
	},
	{
		name: 'code-rain',
		folderPath: projectsPath + p5Path + 'code-rain/',
		entryFileName: sketchNameStandard,
		readmeFileName: readmeNameStandard,
		description: 'Matrix style code rain'
	}
];

// Display a sketch
displayOnly(sketches[currentSketchIndex]);

function appendToDOM(sketch) {
	let iframe = document.createElement('iframe');
	iframe.src = sketch.folderPath + sketch.entryFileName;
	iframe.width = window.innerWidth;
	iframe.height = window.innerHeight;
	let sketchContainerNode = document.getElementById(sketchContainerName);
	sketchContainerNode.appendChild(iframe);

	// Get contents of sketch Readme.md file
	let readmePath = sketch.folderPath + sketch.readmeFileName;
	getRawTextContentsOfFile(readmePath, function() {
		let rawText = this.responseText;
		if (this.status === 404 ) {
			// No readme file, use description in sketches array, with html formatting
			let descriptionHTML = getSimpleHTMLDescription(sketch);
			overlayWithInfoPanel(sketchContainerNode, descriptionHTML);
			return;
		}

		// Convert sketch info markdown to HTML and add it as an overlay
		getHTMLFromMarkdown(rawText, function() {
			let descriptionHTML = this.responseText;
			if (descriptionHTML.indexOf('API rate limit exceeded') !== -1) {
				// Github requests for markdown conversion has reached it's limit
				descriptionHTML = getSimpleHTMLDescription(sketch);
			}
			// 'this' refers to the http response
			overlayWithInfoPanel(sketchContainerNode, descriptionHTML);
		});
	});
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

function overlayWithInfoPanel(node, infoHTML) {
	if (!infoHTML || infoHTML === "") {
		return;
	}
	let panel = document.createElement('div');
	panel.className = "info-panel";

	// let content = document.createTextNode(infoHTML);
	// panel.appendChild(content);

	panel.innerHTML = infoHTML;

	node.appendChild(panel);
}

function testGithubAPI() {
	let http = new XMLHttpRequest();
	// let url = 'https://api.github.com/markdown/raw';
	let url = 'https://api.github.com/markdown';
	let params = {
		"text": "test"
	};
	http.open("POST", url, true);

	// http.setRequestHeader("Content-type", "text/plain");
	http.setRequestHeader("Content-type", "application/json");
	http.onload = handleResponse;

	http.send(JSON.stringify(params));
}

function getHTMLFromMarkdown(markupText, callback) {
	// Use the github api to convert markdown to html

	let http = new XMLHttpRequest();
	let url = 'https://api.github.com' + '/markdown';
	let params = {"text": markupText};

	http.open("POST", url, true);

	// Send proper header with request
	http.setRequestHeader("Content-type", "application/json");
	http.onload = callback;
	http.send(JSON.stringify(params));
}

function getRawTextContentsOfFile(path, callback) {
	let httpRequest = new XMLHttpRequest();
	httpRequest.onload = function() {
		console.log(this.responseText);
	};
	httpRequest.open('GET', path);
	httpRequest.onload = callback;
	httpRequest.send();
}

function getSimpleHTMLDescription(sketch) {
	return '<h1>' + sketch.description + '</h1>';
}

let prevButton = document.getElementById("previous");
prevButton.onclick = displayPreviousSketch;
let nextButton = document.getElementById("next");
nextButton.onclick = displayNextSketch;
