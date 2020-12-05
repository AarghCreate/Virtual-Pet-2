var  dog, happyDog, database, foodS, foodStock;
var dogIMG , dogIMG1 , val ;
var happy;
var buttons;
var lastfeed=0;
var backcolor="green";

function preload()
{
  dogIMG = loadImage( "images/dogImg.png" );
  dogIMG1 = loadImage( "images/dogImg1.png" );
}

function setup()
{
  createCanvas( 500 , 500 );
  database = firebase.database();
  foodStock = database.ref( 'Food' );
  foodS = foodStock.on( "value" , readStock );
  dog = image( dogIMG , 200 , 350 , 100 , 100 );
  happy = "no";
  setfood(20);
  buttons = new elements();
  buttons.display();

}


function draw()
{  
  background(backcolor);
  drawSprites();
  push();
  fill( "black" );
  textSize( 20 );
  text( "Remaining food : "+val , 170 , 100 );
  text( "Last feed : "+Math.round(lastfeed/24)+"s" , 200 , 150 );
  pop();
  ifs();
}

function readStock(data)
{
  val = data.val();
}

function writeStock(x)
{
  if( x<=0 )
  {
    x = 0;
  }else
  {
    x = x - 1;
    happy = "yes"
    backcolor="green";
  }

  database.ref( '/' ).update(
                              {
                                Food:x
                              }
                            );
}
function setfood(num)
{
  database.ref( '/' ).update(
    {
      Food:num
    }
  );
}
function ifs()
{
  if(happy==="u")
  {

  }else
  {
    if(happy==="no")
    {
      dog = image( dogIMG , 200 , 350 , 100 , 100 );
    }else//( happy==="yes" )
    {
      dog = image( dogIMG1 , 200 , 350 , 100 , 100 );
    }
  }
  if( frameCount%240===0 )
  {
    happy="no";
  }
  if(happy==="no")
  {
    lastfeed++;
  }
  if(happy==="yes")
  {
    lastfeed = 0;
  }
  if((Math.round(lastfeed/24))>30)
  {
    backcolor="yellow";
  }
  if((Math.round(lastfeed/24))>60)
  {
    backcolor="red";
  }
  if((Math.round(lastfeed/24))>90)
  {
    backcolor="black";
    buttons.hide();
    push();
    fill( "white" );
    textSize( 20 );
    text("Your dog starved to death", 150 , 250 );
    pop();
    happy="u";
    dog = image( dogIMG , 999 , 999 , 100 , 100 );
  }
}