let p5ProjectsPath = './projects/p5/';
let sketch1Folder = 'blobs/';
let sketch2Folder = 'perlin/';
let sketch3Folder = 'code-rain/';
let sketchName = 'index.html';
let readmeName = "README.md";

let currentSketchIndex = 1;
let sketchContainerName = 'sketch-container';

let sketches = [
{
	name: 'blobs',
	folderPath: p5ProjectsPath + sketch1Folder,
	entryFileName: sketchName,
	readmeFileName: readmeName,
	description: '# Simple blob-eat-blob game'
}, {
	name: 'perlin',
	folderPath: p5ProjectsPath + sketch2Folder,
	entryFileName: sketchName,
	readmeFileName: readmeName,
	description: '# Perlin noise pattern generating experiment'
},
{
	name: 'code-rain',
	folderPath: p5ProjectsPath + sketch3Folder,
	entryFileName: sketchName,
	readmeFileName: readmeName,
	description: '# Matrix style code rain'
}
];

displayOnly(sketches[1]);

// testGithubAPI();

// sketches.forEach (appendToDOM);

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
			// No readme file, use description in sketches array
			rawText = sketch.description;
		}

		// Convert sketch info markdown to HTML and add it as an overlay
		getHTMLFromMarkdown(rawText, function() {
			let descriptionHTML = this.responseText;
			if (descriptionHTML.indexOf('API rate limit exceeded') !== -1) {
				// Github requests for markdown conversion has reached it's limit
				// descriptionHTML = sketch.description;
				descriptionHTML = '';
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
	let http = new XMLHttpRequest();
	let url = 'https://api.github.com' + '/markdown';
	let params = {"text": markupText};

	http.open("POST", url, true);

	// Send proper header with request
	http.setRequestHeader("Content-type", "application/json");

	http.onload = callback;
	// http.onreadystatechange = function() {
	// 	if (this.readyState == 4 && this.status == 200) {
	// 		alert(http.responseText);
	// 	}
	// };
	http.send(JSON.stringify(params));
}

// function handleResponse() {
// 	// let responseObj = JSON.parse(this.responseText);
// 	// console.log(responseObj);
// 	console.log(this.responseText);
// 	// if (this.readyState == 4 && this.status == 200) {
// 	// 		alert(http.responseText);
// 	// 	}
// }

function getRawTextContentsOfFile(path, callback) {
	let httpRequest = new XMLHttpRequest();
	httpRequest.onload = function() {
		console.log(this.responseText);
	};
	httpRequest.open('GET', path);
	httpRequest.onload = callback;
	httpRequest.send();
}

let prevButton = document.getElementById("previous");
prevButton.onclick = displayPreviousSketch;
let nextButton = document.getElementById("next");
nextButton.onclick = displayNextSketch;
