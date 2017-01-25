var inc = 0.01;

function setup() {
  createCanvas(500, 500);
  pixelDensity(1);

}

function draw() {
  var yoff = 0;
  
  loadPixels();
  for (var y = 0; y < height; y++) {
    var xoff = 0;

    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      //var r = random(255);
      var r = noise(xoff, yoff) * 255;
      
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      if ( pixels[index + 0] < 150 &&  pixels[index + 1] > 140)
      {
      pixels[index + 0] = 0;
      pixels[index + 1] = 0;
      pixels[index + 2] = 200;
      pixels[index + 3] = 255;
      }
      
     
      xoff += inc;
    }
    
    yoff += inc;
  }
  updatePixels();
  
}

