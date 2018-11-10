
var game = {
    wins: 0,
    losses: 0,
    userGuess: "",
    remGuesses: 0,
    guessWord: "",
    wordsArray: ["BROWNS","DOLPHINS","COWBOYS","TEXANS","CHARGERS","PACKERS","BEARS","BILLS","BRONCOS","GIANTS"],
    lettersGuessed: [""],
    rightLetters: [""]

    
};
var userClick;
var new_Game;
game.guessWord = game.wordsArray[Math.floor(Math.random() * game.wordsArray.length)];
console.log(game.guessWord);
var lossesId = document.getElementById("losses");
var winsId = document.getElementById("wins");
var remGuessesId = document.getElementById("remGuesses");
var lettersGuessedId = document.getElementById("lettersGuessed");
var wordGuessId = document.getElementById("wordGuess");
var word = game.guessWord.replace(/\w/g, "_"); //use a RegEx to replace all letters with "_";
wordGuessId.textContent = word;
var guessWordsArray;
var NUM_WINS = document.getElementById("numOfWins");
var NUM_LOSSES = document.getElementById("numOfLosses");
var NUM_REM_GUESSES = document.getElementById("numOfRemGuesses");
var NUM_LETTRS_GUESSD = document.getElementById("numOfLettrsGuessd");
//var LOWER_CASE;
var guessWordsArray = word.split("");
var LOWER_CASE = game.guessWord.toLowerCase();
var Guesses = 15;
var restartFunction = function(){
    game.guessWord = game.wordsArray[Math.floor(Math.random() * game.wordsArray.length)];
    console.log("NEWGAMEWORD: ", game.guessWord);
    word = game.guessWord.replace(/\w/g, "_");
    LOWER_CASE = game.guessWord.toLowerCase();
    Guesses = 15;
    NUM_REM_GUESSES.innerHTML = Guesses;
    game.lettersGuessed = Array();
    game.rightLetters = Array();
    //console.log(game.guessWord);
    //console.log(wordGuessId.innerHTML);
    var guessWordsArray = word.split("");
    wordGuessId.textContent = word;
    placeHolder = document.getElementById("wordGuess").innerHTML;
    console.log("NewPlaceHolder: ", placeHolder);
    //LOWER_CASE = game.guessWord.toLowerCase();
    //NUM_REM_GUESSES = Guesses;
}
//console.log(wordGuessId.innerHTML);
var placeHolder = document.getElementById("wordGuess").innerHTML;
document.onkeyup = function(event){  //Main function. (side note, I think MainFunction works I HOPE)//I checked the cars game and it workd. it also add the var's together etc with it to
   game.userGuess = event.key;
   //LOWER_CASE = game.guessWord.toLowerCase();
   
   
   if(game.userGuess){      ////track Guesses  and make sure it is getting subtracted
       Guesses = Guesses - 1;
       NUM_REM_GUESSES.innerHTML = Guesses;
    }
    console.log(Guesses);   
    if(Guesses < 1){       //track losses and if Guesses is down to 0, restart the the main function/game.
        game.losses = game.losses + 1;
        lossesId.textContent = "LOSSES: " + game.losses;
        restartFunction();
    }
    
    var search_;
    var search_ = game.userGuess;
    
    
    
    for(var i = 0; i < game.guessWord.length; i++){
      
        //console.log("lower: ", LOWER_CASE);
        //console.log("GuessWord: ", game.guessWord);
        //console.log("search: ", search_);
        if(LOWER_CASE.charAt(i) === search_){
            //console.log(game.guessWord.charAt(i), search_);
            //console.log("Substring: ", LOWER_CASE.substr(0, i));
            placeHolder = placeHolder.substr(0, i) + search_ + placeHolder.substr(i + 1, placeHolder.length);
            document.getElementById("wordGuess").innerHTML = placeHolder.toUpperCase();

            //console.log("placeHolder: ", placeHolder);

            //wordGuessId.innerHTML = wordGuessId.replace("_", game.userGuess);
        }
        //console.log(game.userGuess);
        /*if(game.userGuess.match(/^[A-Za-z]$/)){
            
            if(game.guessWord[i] === game.userGuess){
                guessWordsArray[i] = game.userGuess;

                word = guessWordArray.join("");
                if (word == game.guessWord){
                    wordGuessId.textContent = word;
                    restartFunction();
                }
            }*/
        }
        checkWord = placeHolder.toUpperCase();
        console.log("END: ", game.guessWord, " & ", checkWord);
        if(game.guessWord === checkWord){
            game.wins = game.wins + 1;
            winsId.textContent = "WINS: " + game.wins;
            restartFunction();
        }
        lettersGuessedId.textContent.innerHTML = game.lettersGuessed;
    
    }
    
            
        
    
    

    
    
    


