// Variables

var crystal = {
    diamond:{
        name: "Diamond",
        value: 0
    },
    emerald:{
        name: "Emerald",
        value: 0
    },
    rock:{
        name: "Rock",
        value: 0
    },
    ruby:{
        name: "Ruby",
        value: 0
    }

};

// Scores
var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

// Functions
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var startGame = function() {
    currentScore = 0;

    targetScore = getRandom(19, 120);

    crystal.diamond.value= getRandom(1, 12);
    crystal.emerald.value= getRandom(1, 12);
    crystal.rock.value= getRandom(1, 12);
    crystal.ruby.value= getRandom(1, 12);

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    // testing
    console.log("Target Score: " + targetScore);
    console.log("Diamond: " + crystal.diamond.value);
};

var addValues = function(crystal) {

    currentScore = currentScore + crystal.value;
    $("#yourScore").html(currentScore);

    checkWin();

    console.log("your score: " + currentScore);
}

var checkWin = function() {

    if(currentScore > targetScore) {
        alert("You lost!");
        console.log("you lost");

        lossCount++;
        $("#lossCount").html(lossCount);

        startGame();
    } 
    else if (currentScore == targetScore) {
        alert("You win!");
        console.log("you win");

        winCount++;
        $("#winCount").html(winCount);

        startGame();
    }
}

startGame();

// processes
$("#diamond").click(function(){
    addValues(crystal.diamond);
});
$("#emerald").click(function(){
    addValues(crystal.emerald);
});
$("#rock").click(function(){
    addValues(crystal.rock);
});
$("#ruby").click(function(){
    addValues(crystal.ruby);
});