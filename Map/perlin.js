var inc = 0.0045;

function setup() {

  createCanvas(1300 , 900);
  pixelDensity(1);


}


function draw()
{

  var ctx = canvas.getContext("2d");

  var yoff = 0;
  var tailleCases = 25;

  var tabEntreX = 0;
  var tabEntreY = 0;

  var tabSortieX = 51;
  var tabSortieY = 35;

  var entreeX = 0;
  var entreeY = 0;
  var sortieX = 1300 - tailleCases;
  var sortieY = 900 - tailleCases;

  var plaine = 0;
  var montagne = 0;
  var ocean = 0;
  var plage = 0;
  var tabR = new Array();
  var tabCoord =new Array();

  for (var i=0; i<1871; i++) {
    tabCoord[i] = new Array();
    for (var j=0; j<1871; j++) {
      tabCoord[i][j] = "Vide";
    }
  }

  var coordX = -1;
  var coordY = -1;


  loadPixels();

  for (var y = 0; y < 900; y++)
  {
        var xoff = 0;

    for (var x = 0; x < 1300; x++)
    {

      var index = (x + y * 1300) * 4;
      //var r = random(255);
      var r = noise(xoff, yoff) * 255;

      tabR[x+(y*1300)] = r;
      //console.log(tabR[x]);

      pixels[index ] = r
      pixels[index + 1 ] = r
      pixels[index + 2 ] = r
      pixels[index + 3] = 255;


      if ( r < 255 &&  r >= 170) //ocean.
      {
       pixels[index + 0] = 0;
       pixels[index + 1] = 0;
       pixels[index + 2] = 204;
       ocean++;
      }
       if ( r < 170 &&  r > 85) //plaine.
      {
       pixels[index + 0] = 0;
       pixels[index + 1] = 100;
       pixels[index + 2] = 0;
       plaine++;
       }
        if ( r < 85 &&  r > 0) //montagne.
       {
       pixels[index + 0] = 0;
       pixels[index + 1] = 0;
       pixels[index + 2] = 0;
       montagne++;
       }




      xoff += inc;
    }
     yoff += inc;
  }
  updatePixels();

console.log(montagne);
  if(montagne < 230000)
  {
    window.location.reload()
  }

  for(var a = 0; a<900; a+=tailleCases)// faire des bons en hauteur
  {
    coordY++;
    coordX = -1;
    for(var b =0; b< 1300; b+=tailleCases)//faire des bons en largeur
    {
      coordX++;
      var vert=0;
      var bleu = 0;
      var noir =0;

      for(var g = 0; g < tailleCases; g++)//on s'occupe pixel par pixel hauteur
      {
         ocean = 0;
         plaine = 0;
         montagne = 0;

          for(var h = 0; h < tailleCases; h++)//on s'occupe pixel par pixel largeur
          {
            var pix = h+(g*1300)+b+(a*1300);// h = Pour aller de 0 a 50, ensuite on va au pixels numéro 1300
            var y = tabR[pix];

            if ( y< 255 &&  y >= 170) //ocean.
            {
              ocean++;
            }

            if ( y < 170 &&  y > 85) //plaine.
            {
             plaine++;
            }

            if ( y <= 85 &&  y >= 0) //montagne
            {
             montagne++;
            }

          }

        if(montagne > plaine && montagne > ocean )
        {
           noir++;
        }

        if(plaine > montagne && plaine > ocean)
        {
          vert++;
        }

        if(ocean > plaine && ocean > montagne)
        {
         bleu++;
        }

      }

       /*console.log("montagne " + noir);
             console.log("plaine " + vert );
             console.log("ocean " + bleu);*/
     if(noir>vert && noir>bleu)
     {
     ctx.beginPath();
     ctx.fillStyle = "#996633";
     ctx.fillRect(b,a,tailleCases,tailleCases);
     ctx.closePath();

     

     tabCoord[coordX][coordY] = "montagne";


     if(coordX >= 2)
     {
       if(tabCoord[coordX - 2][coordY] == "montagne" && tabCoord[coordX][coordY] == "montagne")
       {
         ctx.beginPath();
         ctx.fillStyle = "#996633";
         ctx.fillRect(b-tailleCases,a,tailleCases,tailleCases);
         ctx.closePath();
         tabCoord[coordX-1][coordY]=="montagne";
       }


     }
     if(coordY >= 2)
     {
     if(tabCoord[coordX ][coordY - 2] == "montagne" && tabCoord[coordX ][coordY] == "montagne")
     {
       ctx.beginPath();
       ctx.fillStyle = "#996633";
       ctx.fillRect(b-tailleCases,a,tailleCases,tailleCases);
       ctx.closePath();
       tabCoord[coordX][coordY-1]=="montagne";
     }
    }


     }
    else if(vert>noir && vert>bleu)
     {
     ctx.beginPath();
     ctx.fillStyle = "green";
     ctx.fillRect(b,a,tailleCases,tailleCases);
     ctx.closePath();
     tabCoord[coordX][coordY] = "plaine";

         if(coordX >= 2)
         {
         if(tabCoord[coordX - 2][coordY] == "plaine" && tabCoord[coordX ][coordY] == "plaine")
         {
           ctx.beginPath();
           ctx.fillStyle = "green";
           ctx.fillRect(b-tailleCases,a,tailleCases,tailleCases);
           ctx.closePath();
           tabCoord[coordX-1][coordY]=="plaine";
         }
        }
        if(coordY >= 2)
        {
        if(tabCoord[coordX ][coordY - 2] == "plaine" && tabCoord[coordX ][coordY] == "plaine")
        {
          ctx.beginPath();
          ctx.fillStyle = "green";
          ctx.fillRect(b-tailleCases,a,tailleCases,tailleCases);
          ctx.closePath();
          tabCoord[coordX][coordY-1]=="plaine";
        }
       }

     }
     else if(bleu>vert && bleu>noir)
     {
     ctx.beginPath();
     ctx.fillStyle = "blue";
     ctx.fillRect(b,a,tailleCases,tailleCases);
     ctx.closePath();
     tabCoord[coordX][coordY] = "ocean";

     if(coordX >= 2)
     {
     if(tabCoord[coordX - 2][coordY] == "ocean" && tabCoord[coordX ][coordY] == "ocean")
     {
       ctx.beginPath();
       ctx.fillStyle = "blue";
       ctx.fillRect(b-tailleCases,a,tailleCases,tailleCases);
       ctx.closePath();
       tabCoord[coordX-1][coordY]="ocean";
     }
   }
   if(coordY >= 2)
   {
   if(tabCoord[coordX ][coordY - 2] == "ocean" && tabCoord[coordX ][coordY] == "ocean")
   {
     ctx.beginPath();
     ctx.fillStyle = "blue";
     ctx.fillRect(b-tailleCases,a,tailleCases,tailleCases);
     ctx.closePath();
     tabCoord[coordX][coordY-1]=="ocean";
   }
  }

     }
     else
     {
     ctx.beginPath();
     ctx.fillStyle = "#996633";
     ctx.fillRect(b,a,tailleCases,tailleCases);
     ctx.closePath();
     /*tabCoord[numTest]="montagne";*/
     }
     //console.log(tabCoord[coordX][coordY] + " X : " + coordX + " Y : " + coordY);

    }
  }


  //création entrée sortie ennemis.
  coordX = 0;
  coordY = 0;
  while(tabCoord[tabEntreX][tabEntreY] == "montagne" || tabCoord[tabEntreX][tabEntreY] == "ocean")
  {
    coordX++;
    tabEntreX++;
  }
  var ReCoordXPF = coordX;
  var ReCoordYPF = coordY;
  tabCoord[tabEntreX][tabEntreY] = "Entrée";
//  console.log(tabCoord[tabEntreX][tabEntreY] + " X : " + coordX + " Y " +coordY);
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.fillRect(tabEntreX*tailleCases,entreeY,tailleCases,tailleCases);
  ctx.closePath();


  coordX = 51;
  coordY = 35;
  while(tabCoord[tabSortieX][tabSortieY] == "montagne" || tabCoord[tabSortieX][tabSortieY]== "ocean")
  {
    coordX--;
    sortieX -= tailleCases;
    tabSortieX--;
  }
  var coordXPF = coordX - 1;
  var coordYPF = coordY - 1;
  tabCoord[tabEntreX][tabEntreY] = "Sortie";
  //console.log(tabCoord[tabEntreX][tabEntreY] + " X : " + coordX + " Y " +coordY);
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.fillRect(sortieX,sortieY,tailleCases,tailleCases);
  ctx.closePath();

 var grille = new PF.Grid(51,35);

 for (var i=0; i<51; i++) {
   grille[i] = new Array(35);
 }


 for(var i = 0; i<35;i++){
   for(var j = 0; j<51;j++){
          grille[j][i] = tabCoord[j][i];
          }
      }

    for(var i =0; i<35; i++){
      for(var j = 0; j<51; j++){
            if(tabCoord[j][i] === "montagne" || tabCoord[j][i] ==="ocean"){
            grille.setWalkableAt(j , i , false);
            }
            else if(tabCoord[j][i] === "plaine" ){
            grille.setWalkableAt(j , i , true);
            }
      }
    }

var finder = new PF.AStarFinder();
var positionX = 0;
var positionY = 0;
var path = finder.findPath(ReCoordXPF,ReCoordYPF,coordXPF,coordYPF,grille);

/*
for(var i = 0; i<path.length;i++){
  for(var j = 0; j<2;j++){
console.log( path[i][j]);
}
}
*/
//console.log(path.length);
  if (path.length == 0)
  {
  window.location.reload()

  }

for(var i = 0; i<path.length;i++){
  for(var j = 0; j<2;j++){
    if (j==0){
            positionX = path[i][j];
              }
    else{
       positionY=path[i][j];
        }
  }
    //console.log("X " + positionX + " Y "+ positionY);
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.fillRect(positionX * 25,positionY * 25,tailleCases,tailleCases);
  ctx.closePath();
}
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.fillRect((positionX + 1) * 25,positionY * 25,tailleCases,tailleCases);
ctx.closePath();

  noLoop();
}
