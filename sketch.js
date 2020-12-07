let video;

function modelReady(){
	console.log('Model is ready!!!');
	mobilenet.predict(gotResults);
}

function gotResults(error, results){
	if(error) {
		console.error(error);
	} else {
		console.log(results);
		let label = results[0].label;
		let prob = results[0].confidence;
		fill(0);
		textSize(64);
		text(label, 10, height - 100);
		createP(label);
		console.log(label);
		createP(prob);
		console.log(prob);
	}
}

// function imageReady() {
// 	image(puffin, 0, 0, width, height)
// }

function setup() {
	createCanvas(640, 480);
	video = createCapture(VIDEO)
	video.hide();
	background(0);
	mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw() {
	image(video, 0, 0);
}