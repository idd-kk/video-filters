let videoFeed;
let colorBtn;
let cubeBtn;
let picBtn;
let snap;
let saveBtn;
let resetBtn;
let c; 


function setup() {
    c = createCanvas(640, 480);
    background(204);
    videoFeed = createCapture(VIDEO);
    // videoFeed.hide();

    colorBtn = createImg('/filters/img/color-palette.svg');
    colorBtn.size(60, 50)
    colorBtn.position(170, 415);
    colorBtn.mouseClicked(colorFilter); 

    cubeBtn = createImg('/filters/img/contrast.svg');
    cubeBtn.size(35, 35)
    cubeBtn.position(240, 420);
    cubeBtn.mousePressed(cubeFilter);

    picBtn =  createImg('/filters/img/camera.svg');
    picBtn.size(80, 60)
    picBtn.position(280, 410);
    picBtn.mousePressed(takeSnap);

    saveBtn = createImg('/filters/img/floppy.svg');
    saveBtn.size(40, 40)
    saveBtn.position(365, 420);
    saveBtn.mouseClicked(savePic); 

    resetBtn = createImg('/filters/img/reset.svg');
    resetBtn.size(40, 40)
    resetBtn.position(415, 420);
    resetBtn.mouseClicked(resetAll); 

    resetAll();
} 
    

function draw() {
    // image(videoFeed, 0, 0);
    // colorFilter;
    // cubeFilter;
    // takeSnap();
   


    // if (colorFilter.mousePressed == true) {
    //     image(videoFeed, 0, 0); 
    //     colorFilter();
    // }
    // else if (cubeFilter.mousePressed == true) {
    //     image(videoFeed, 0, 0); 
    //     cubeFilter();
    // } 
    // else {
    //     image(videoFeed, 0, 0); 
    // }

}




function cubeFilter(){

    videoFeed.loadPixels();

    let stepS = 5;

    for (let  x = 0; x < videoFeed.width; x+= stepS) {
        for (let y = 0; y < videoFeed.height; y+= stepS) {
 
            let index = ((y * videoFeed.width) + x) * 4;
            let r = videoFeed.pixels[index];
            let g = videoFeed.pixels[index + 1];
            let b = videoFeed.pixels[index + 2];
            fill(r + g + b / 30);
            rect(x, y, stepS, stepS);
            stroke(0);
            strokeWeight(2);
        }
    }
    // videoFeed.updatePixels();
    // image(videoFeed, 0, 0);
}


function colorFilter(){
    
    videoFeed.loadPixels();

    let stepS = 4;

    for (let  x = 0; x < videoFeed.width; x+= stepS) {
        for (let y = 0; y < videoFeed.height; y+= stepS) {
 
            let index = ((y * videoFeed.width) + x) * 4;
            let r = videoFeed.pixels[index];
            let g = videoFeed.pixels[index + 1];
            let b = videoFeed.pixels[index + 2];
            fill(r * 2, g * 1.75, b * 1.9);
            ellipse(x, y, stepS, stepS);
            stroke(0);
            strokeWeight(1);
        }
    }
    // videoFeed.updatePixels();
    // image(videoFeed, 0, 0);
}


function takeSnap() {
    snap = c.get();
}


function savePic() {
    let rand = floor(random(1, 99999));
    let randS = str(rand);
    save(snap, randS);
}


function resetAll() {
    image(videoFeed, 0, 0);
}



// if (colorFilter.mouseIsPressed == true) {
//     colorFilter();
//     }
// else if (cubeFilter.mouseIsPressed == true) {
//     cubeFilter();
// } 
// else {
//    
// }