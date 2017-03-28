var inc = 0.0045;

function setup() {
  background(0);
  pixelDensity(1);
}


function draw()
{
  
  
  vie = 100;
  
  
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  
  
  
  ennemiMortImg = new Image();
  montagneImg = new Image();
  plaineImg = new Image();
  oceanImg = new Image();
  cheminImg = new Image();
  ennemiImg = new Image();
  mapImg = new Image();
  montagneImg.src = 'images/montagne.jpg';
  plaineImg.src = 'images/plaine.jpg';
  oceanImg.src = 'images/ocean.jpg';
  cheminImg.src = 'images/chemin.jpg';
  ennemiImg.src = 'images/ennemi.jpg';
  mapImg.src = 'images/map.png';
  ennemiMortImg.src = 'images/ennemiMort.jpg';
  
  
  yoff = 0;
  tailleCases = 25;
  
  tabEntreX = 0;
  tabEntreY = 0;
  
  tabSortieX = 51;
  tabSortieY = 35;
  
  entreeX = 0;
  entreeY = 0;
  sortieX = 1300 - tailleCases;
  sortieY = 900 - tailleCases;
  
  plaine = 0;
  montagne = 0;
  ocean = 0;
  plage = 0;
  tabR = new Array();
  tabCoord =new Array();
  tabColori = new Array();
  
  for (var i=0; i<1871; i++)
  {
    tabCoord[i] = new Array();
    for (var j=0; j<1871; j++)
    {
      tabCoord[i][j] = "Vide";
    }
  }
  for (var i=0; i<51; i++)
  {
    tabColori[i] = new Array(35);
  }
  
  
  
  
  coordX = -1;
  coordY = -1;
  
  
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
        
        ocean++;
      }
      if ( r < 170 &&  r > 85) //plaine.
      {
        
        montagne++;
      }
      if ( r < 85 &&  r > 0) //montagne.
      {
        
        plaine++;
      }
      
      xoff += inc;
    }
    yoff += inc;
  }
  //updatePixels();
  
  //console.log(montagne);
  if(montagne < 230000)
  {
    //alert('Pas assez de montagnes');
    ///  window.location.reload()
  }
  
  //coloriCanvas(-1,-1);
  
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
      if(noir>vert && noir>bleu)
      {
        tabCoord[coordX][coordY] = "montagne";
        /*
        if(coordX >= 2)
        {
        if(tabCoord[coordX - 2][coordY] == "montagne" && tabCoord[coordX][coordY] == "montagne")
        {
        tabCoord[coordX-1][coordY]=="montagne";
      }
    }
    */
  }
  if(vert>noir && vert>bleu)
  {
    tabCoord[coordX][coordY] = "plaine";
    /*
    if(coordX >= 2)
    {
    if(tabCoord[coordX - 2][coordY] == "plaine" && tabCoord[coordX ][coordY] == "plaine")
    {
    tabCoord[coordX-1][coordY]=="plaine";
  }
}
*/
}
if(bleu>vert && bleu>noir)
{
  tabCoord[coordX][coordY] = "ocean";
  /*
  if(coordX >= 2)
  {
  if(tabCoord[coordX - 2][coordY] == "ocean" && tabCoord[coordX ][coordY] == "ocean")
  {
  tabCoord[coordX-1][coordY]="ocean";
}
}
*/
}
}
}

//création entrée sortie ennemis.

coordX = 0;
coordY = 0;

while(tabCoord[tabEntreX][tabEntreY] == "montagne" || tabCoord[tabEntreX][tabEntreY] == "ocean")
{
  coordX++;
  entreeX += tailleCases;
  tabEntreX++;
}
ReCoordXPF = coordX;
ReCoordYPF = coordY;
tabCoord[tabEntreX][tabEntreY] = "Entrée";
//  console.log(tabCoord[tabEntreX][tabEntreY] + " X : " + coordX + " Y " +coordY);

coordX = 51;
coordY = 35;

while(tabCoord[tabSortieX][tabSortieY] == "montagne" || tabCoord[tabSortieX][tabSortieY]== "ocean")
{
  coordX--;
  sortieX -= tailleCases;
  tabSortieX--;
}
coordXPF = coordX -1 ;
coordYPF = coordY - 1;
tabCoord[tabEntreX][tabEntreY] = "Sortie";



var grille = new PF.Grid(51,35);

for (var i=0; i<51; i++)
{
  grille[i] = new Array(35);
}


for(var i = 0; i<35;i++)
{
  for(var j = 0; j<51;j++)
  {
    grille[j][i] = tabCoord[j][i];
  }
}

for(var i =0; i<35; i++)
{
  for(var j = 0; j<51; j++)
  {
    if(tabCoord[j][i] === "montagne" || tabCoord[j][i] ==="ocean")
    {
      grille.setWalkableAt(j , i , false);
    }
    else if(tabCoord[j][i] === "plaine" )
    {
      grille.setWalkableAt(j , i , true);
    }
  }
}

var finder = new PF.AStarFinder({allowDiagonal : true, dontCrossCorners : true});
var positionX = 0;
var positionY = 0;
path = finder.findPath(ReCoordXPF,ReCoordYPF,coordXPF,coordYPF,grille);


if (path.length == 0)
{
  window.location.reload()
}
cheminImg.onload = function () {
  for(var i = 0; i<path.length;i++)
  {
    for(var j = 0; j<2;j++)
    {
      if (j==0)
      {
        positionX = path[i][j];
      }
      else
      {
        positionY=path[i][j];
      }
    }
    //ctx.drawImage(cheminImg,positionX * 25,positionY * 25,tailleCases,tailleCases);
    //grille[i][j] = "chemin";
  }
  //ctx.drawImage(cheminImg,(positionX )* 25,(positionY+1) * 25,tailleCases,tailleCases);
  //  grille[i][j] = "chemin";
}

console.log(grille);
noLoop();
}

window.requestAnimationFrame(ennemi);

var i = 0;
var j = 0;

function ennemi(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  coloriCanvas(-1,-1);
  
  ctx.drawImage(cheminImg,sortieX , sortieY,tailleCases,tailleCases);
  ctx.drawImage(cheminImg,sortieX - 25 ,sortieY,tailleCases,tailleCases);
  var v = path.length - 1;
  console.log(v);
  if(i == v )
  {
    ctx.drawImage(ennemiImg,sortieX-25,sortieY,tailleCases,tailleCases);
    sleep(100);
  }
  
  if(i == path.length){
    ctx.drawImage(ennemiMortImg,sortieX, sortieY,tailleCases,tailleCases);
    path.length ++;
    i++;
  }
  if(i == path.lenght + 1)
  {
    ///ctx.drawImage(cheminImg,sortieX , sortieY,tailleCases,tailleCases);
  }
  
  
  if(i<path.length){
    j = 0;
    while(j<2){
      if (j==0){
        positionX = path[i][j];
      }
      else{
        positionY=path[i][j];
      }
      j++;
    }
    if(keyIsPressed === true)
    {
      
      ctx.drawImage(ennemiImg,(positionX - 3 ) * 25,(positionY) * 25,tailleCases,tailleCases);
      
    }
    else{
      ctx.drawImage(ennemiImg,positionX * 25,positionY * 25,tailleCases,tailleCases);
    }
    sleep(100);
    
    i++;
    
    window.requestAnimationFrame(ennemi);
    
  }
  
}


function coloriCanvas(coordX,coordY){
  
  for(var a = 0; a<900; a+=tailleCases)// faire des bons en hauteur
  {
    coordY++;
    coordX = -1;
    for(var i = 0; i<path.length;i++){
      for(var j = 0; j<2;j++){
        if (j==0){
          positionX = path[i][j];
          
        } else {
          positionY=path[i][j];
          
        }
      }
      ctx.drawImage(cheminImg,positionX * 25,positionY * 25,tailleCases,tailleCases);
      //grille[i][j] = "chemin";
    }
    
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
      
      if(noir>vert && noir>bleu)
      {
        ctx.drawImage(montagneImg,b,a,tailleCases,tailleCases);
        tabCoord[coordX][coordY] = "montagne";
        
        /*
        if(coordX >= 2)
        {
        if(tabCoord[coordX - 2][coordY] == "montagne" && tabCoord[coordX][coordY] == "montagne")
        {
        ctx.drawImage(montagneImg,b-tailleCases,a,tailleCases,tailleCases);
        tabCoord[coordX-1][coordY]=="montagne";
      }
      
      
    }
    if(coordY >= 2)
    {
    if(tabCoord[coordX ][coordY - 2] == "montagne" && tabCoord[coordX ][coordY] == "montagne")
    {
    ctx.drawImage(montagneImg,b-tailleCases,a,tailleCases,tailleCases);
    tabCoord[coordX][coordY-1]=="montagne";
  }
}
*/

}



if(vert>noir && vert>bleu)
{
  
  ctx.drawImage(plaineImg,b,a,tailleCases,tailleCases);
  
  tabCoord[coordX][coordY] = "plaine";
  
  /*
  if(coordX >= 2)
  {
  if(tabCoord[coordX - 2][coordY] == "plaine" && tabCoord[coordX ][coordY] == "plaine")
  {
  ctx.drawImage(plaineImg,b-tailleCases,a,tailleCases,tailleCases);
  
  tabCoord[coordX-1][coordY]=="plaine";
}
}
if(coordY >= 2)
{
if(tabCoord[coordX ][coordY - 2] == "plaine" && tabCoord[coordX ][coordY] == "plaine")
{

ctx.drawImage(plaineImg,b-tailleCases,a,tailleCases,tailleCases);

tabCoord[coordX][coordY-1]=="plaine";
}
}
*/
}


if(bleu>vert && bleu>noir)
{
  
  ctx.drawImage(oceanImg,b,a,tailleCases,tailleCases);
  
  tabCoord[coordX][coordY] = "ocean";
  /*
  if(coordX >= 2)
  {
  if(tabCoord[coordX - 2][coordY] == "ocean" && tabCoord[coordX ][coordY] == "ocean")
  {
  
  ctx.drawImage(oceanImg,b-tailleCases,a,tailleCases,tailleCases);
  
  tabCoord[coordX-1][coordY]="ocean";
}
}
if(coordY >= 2)
{
if(tabCoord[coordX ][coordY - 2] == "ocean" && tabCoord[coordX ][coordY] == "ocean")
{

ctx.drawImage(oceanImg,b-tailleCases,a,tailleCases,tailleCases);

tabCoord[coordX][coordY-1]=="ocean";
}
}
*/
}

}
}
}

function sleep(miliseconds) {
  var currentTime = new Date().getTime();
  
  while (currentTime + miliseconds >= new Date().getTime()) {
  }
}
