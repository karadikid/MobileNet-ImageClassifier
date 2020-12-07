let video;
let label = '';
let prob = '';

function modelReady(){
	console.log('Model is ready!!!');
	mobilenet.predict(gotResults);
}

function gotResults(error, results){
	if(error) {
		console.error(error);
	} else {
	//	console.log(results);
		label = results[0].label;
		prob = results[0].confidence;
		background(0);
		setTimeout(() => {  mobilenet.predict(gotResults); }, 1000);
	}
}

// function imageReady() {
// 	image(puffin, 0, 0, width, height)
// }

function setup() {
	createCanvas(640, 550);
	video = createCapture(VIDEO)
	video.hide();
	background(0);
	mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw() {
	image(video, 0, 0);
	fill(255);
	textSize(32);
	text(label, 10, height - 20);
}