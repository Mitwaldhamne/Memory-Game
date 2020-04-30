var userClickedPattern=[];
var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
var level=0;
var started=false;
function nextSequence(){
  userClickedPattern = [];
var  randomNumber=Math.floor(Math.random()*4);

var randomChosenColor=buttonColours[randomNumber];
gamePattern.push(randomChosenColor);

var newAudio = new Audio("sounds/" + randomChosenColor + ".mp3");
newAudio.play();

   $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

   level++;
   $("#level-title").text("level "+level);
}



  $(".btn").click(function() {
var userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

  var userAudio = new Audio("sounds/" + userChosenColour + ".mp3");
  userAudio.play();

 animatePress(userChosenColour);
 checkAnswer(userClickedPattern.length-1);
  });
function checkAnswer(currentLevel){
if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
  if (userClickedPattern.length === gamePattern.length){
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }} else {
  var wrongAudio=new Audio("sounds/wrong.mp3")
  wrongAudio.play();
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
   $("#level-title").text("Game Over, Press Key to Restart or click here");
   startAgain();
}}

$(document).on("keydown",function(event){
//  console.log("In function");
 if(!started){
   // console.log("In if");
   nextSequence();
   $("#level-title").text("level "+level);
   started = true;}
});
$("h1").on("click",function(){
    console.log("In function");
   if(!started){
      console.log("In if");
     nextSequence();
     $("#level-title").text("level "+level);
     started = true;}
});
// document.addEventListener("keydown",function(event){
//   console.log("In function");
//  if(!started){
//    console.log("In if");
//    nextSequence();
//    $("#level-title").text("level "+level);
//    started = true;}
// });

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startAgain(){
  level=0;
  gamePattern=[];
  started=false;
}
