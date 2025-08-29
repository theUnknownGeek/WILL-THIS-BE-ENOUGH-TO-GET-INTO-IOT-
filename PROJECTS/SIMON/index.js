var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var level = 0;

function newSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  animatePress(randomChosenColour);

  playSound(randomChosenColour);

  level++;
  $("h1").text("level " + level);
}

function playSound(name) {
  var audio = new Audio(name + ".mp3");
  audio.play();
}

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(() => {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

$(document).keydown(function (event) {
  if (level == 0) {
    newSequence();
  }
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(() => {
        userClickedPattern = [];
        newSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);

    gameOver();
  }
}

function gameOver() {
  userClickedPattern = [];
  gamePattern = [];
  level = 0;
}
