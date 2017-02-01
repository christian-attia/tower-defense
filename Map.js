var inc = 0.0045;

function setup() {
  createCanvas(1500 , 900 );
  pixelDensity(1);

}

function draw() {

  
  var yoff = 0;

  var plaine = 0;
  var montagne = 0;
  var ocean = 0;
  var plage = 0;
 
  var ctx = canvas.getContext("2d");


  loadPixels();
 

  for (var y = 0; y < height; y++) {
    var xoff = 0;

    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      //var r = random(255);
      var r = noise(xoff, yoff) * 255;
      
      pixels[index ] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;



       
      

      	
    	
      
      for (var i = 0; i <= 4; i++) {

        

        if ( pixels[index + i] < 255 &&  pixels[index + i] >= 150) //ocean.			
      {
      
      pixels[index + 0] = 0;
      pixels[index + 1] = 0;
      pixels[index + 2] = 204;
      pixels[index + 3] = 255;

      }
      if ( pixels[index + i] < 151 &&  pixels[index + i] > 147) //plage.
      {
      
      pixels[index + 0] = 255;
      pixels[index + 1] = 255;
      pixels[index + 2] = 0;
      pixels[index + 3] = 255;
      

      }
      if ( pixels[index + i] < 148 &&  pixels[index + i] > 100) //plaine.
      {
      
      pixels[index + 0] = 0;
      pixels[index + 1] = 100;
      pixels[index + 2] = 0;
      pixels[index + 3] = 255;

      

      }
      if ( pixels[index + i] < 31 &&  pixels[index + i] > 0) //neige.
      {
      
      pixels[index + 0] = 255;
      pixels[index + 1] = 255;
      pixels[index + 2] = 255;
      pixels[index + 3] = 255;

     

      }
      
       if ( pixels[index + i] < 71 &&  pixels[index + i] > 30) //montagne.
      {
      
      pixels[index + 0] = 0;
      pixels[index + 1] = 0;
      pixels[index + 2] = 0;
      pixels[index + 3] = 255;

      

      }
      if ( pixels[index + i] < 101 &&  pixels[index + i] > 70) //plaine.
      {
      
       pixels[index + 0] = 0;
      pixels[index + 1] = 100;
      pixels[index + 2] = 0;
      pixels[index + 3] = 255;

     

      }

     

      }
      
      
      
      
     
      xoff += inc;
 
  
    }
    
    yoff += inc;
     

    
  }

  updatePixels();

  noLoop();
  
}

