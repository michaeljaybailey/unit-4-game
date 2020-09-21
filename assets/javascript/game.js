var crystals = {
    blue:
    {
    name: "Blue",
    value:0
    },
    green:
    {
        name:"Green",
        value:0
    },
    red:
    {
        name: "Red",
        value: 0
    },

    yellow:{ 
    name: "Yellow",
    value: 0,
    }
};

var curentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

var RandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var gameStart = function () {
    currentScore = 0;

    targetScore = RandomNumber(19, 120);

    crystals.blue.value = RandomNumber(1, 12);
    crystals.red.value = RandomNumber(1, 12);
    crystals.green.value = RandomNumber(1, 12);
    crystals.yellow.value = RandomNumber(1, 12);

    $("#your-score").text(currentScore);
  $("#target-score").text(targetScore);


};
var checkWin = function() {

    
    if (currentScore > targetScore) {
      alert("Sorry. You lost!");
      console.log("You Lost");
  
      lossCount++;
  
      
      $("#loss-count").text(lossCount);
  
      
      gameStart();
    }
  
    else if (currentScore === targetScore) {
      alert("Congratulations! You Won!");
      console.log("You Won!");
  
      
      winCount++;
  
      
      $("#win-count").text(winCount);
  
      
      gameStart();
    }
  
  };

  var addValues = function(clickedCrystal) {

    
    currentScore += clickedCrystal.value;
  
    
    $("#your-score").text(currentScore);
  
    
    checkWin();
  
   
   
  };
  
  
  gameStart();
  
  $("#blue").click(function() {
    addValues(crystals.blue);
  });
  
  $("#red").click(function() {
    addValues(crystals.red);
  });
  
  $("#green").click(function() {
    addValues(crystals.green);
  });
  
  $("#yellow").click(function() {
    addValues(crystals.yellow);
  });
  
  
  