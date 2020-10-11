let videoFeed;
let colorBtn;
let cubeBtn;
let picBtn;
let saveBtn;
let resetBtn;


function setup() {
    createCanvas(640, 480);
    videoFeed = createCapture(VIDEO);
    // videoFeed.hide();

    colorBtn = createButton('color filter');
    colorBtn.position(120, 420);
    colorBtn.mouseClicked(colorFilter); 

    cubeBtn = createButton('cube filter');
    cubeBtn.position(200, 420);
    cubeBtn.mousePressed(cubeFilter);

    picBtn = createButton('take photo');
    picBtn.position(280, 420);
    picBtn.mousePressed(takeSnap);

    saveBtn = createButton('save');
    saveBtn.position(365, 420);
    saveBtn.mouseClicked(savePic); 

    resetBtn = createButton('reset');
    resetBtn.position(415, 420);
    resetBtn.mouseClicked(resetAll); 
} 
    

function draw() {
    // image(videoFeed, 0, 0);
    cubeFilter;
    colorFilter;
    takeSnap;
    resetAll;
}


function cubeFilter(){
    videoFeed.loadPixels();

    let stepS = 7;

    for (let  x = 0; x < videoFeed.width; x+= stepS) {
        for (let y = 0; y < videoFeed.height; y+= stepS) {
 
            let index = ((y * videoFeed.width) + x) * 4;
            let r = videoFeed.pixels[index];
            let g = videoFeed.pixels[index + 1];
            let b = videoFeed.pixels[index + 2];
            let a = videoFeed.pixels[index + 3];
            fill(r + g + b/3);
            rect(x, y, stepS, stepS);
            strokeWeight(3);
        }
    }
    // videoFeed.updatePixels();
    // image(videoFeed, 0, 0);
}


function colorFilter(){
    videoFeed.loadPixels();

    let stepS = 5;

    for (let  x = 0; x < videoFeed.width; x+= stepS) {
        for (let y = 0; y < videoFeed.height; y+= stepS) {
 
            let index = ((y * videoFeed.width) + x) * 4;
            let r = videoFeed.pixels[index];
            let g = videoFeed.pixels[index + 1];
            let b = videoFeed.pixels[index + 2];
            let a = videoFeed.pixels[index + 3];
            fill(r * 1.2, g, b);
            ellipse(x, y, stepS, stepS);
            strokeWeight(3);
        }
    }
    // videoFeed.updatePixels();
    // image(videoFeed, 0, 0);
}


function takeSnap() {
    videoFeed.get();
}


function savePic() {
    let rand = floor(random(1, 99999));
    let randS = str(rand);
    saveCanvas(randS, 'jpg');
}


function resetAll() {
    image(videoFeed, 0, 0);
}



