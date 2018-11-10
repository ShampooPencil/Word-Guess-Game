
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
var guessWordsArray;
var NUM_WINS = document.getElementById("numOfWins");
var NUM_LOSSES = document.getElementById("numOfLosses");
var NUM_REM_GUESSES = document.getElementById("numOfRemGuesses");
var NUM_LETTRS_GUESSD = document.getElementById("numOfLettrsGuessd");
//var LOWER_CASE;
var guessWordsArray = word.split("");
var LOWER_CASE = game.guessWord.toLowerCase();
var Guesses = 15;
var resartFunction = function(){
    game.guessWord = game.wordsArray[Math.floor(Math.random() * game.wordsArray.length)];
    Guesses = 16;
    game.lettersGuessed = Array();
    game.rightLetters = Array();
    console.log(game.guessWord);
    console.log(wordGuessId.innerHTML);
    var guessWordsArray = word.split("");
    //LOWER_CASE = game.guessWord.toLowerCase();
    //NUM_REM_GUESSES = Guesses;
}
console.log(wordGuessId.innerHTML);

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
        lossesId.textContent = game.losses;
        resartFunction();
    }
    
    var search_;
    var search_ = game.userGuess;
    
    //console.log(trueOrFalse);//var trueOrNot = (game.userGuess == game.guessWord.charCodeAt(search_)); //if a userGuess pressed on a key that has a letter in the team that was selected, replace "_" to the letter
    //console.log(game.guessWord[search_] === game.userGuess);
    
    /*if (game.guessWord(game.guessWord) === game.userGuess) {
    wordGuessId.innerHTML = wordGuessId + game.userGuess;
    } */
    //console.log(game.guessWord[search_].toString() === game.userGuess);

    
    for(var i = 0; i < game.guessWord.length; i++){
        //var makeToString = "";
        //makeToString = game.guessWord[i].toString();
        console.log(game.guessWord.charAt() === game.userGuess);
        if(game.guessWord.charAt(i).toString() === search_){
            console.log(game.guessWord.charAt(i), search_);
            word = word.replace("_", search_);
            wordGuessId.innerHTML = word;
            //wordGuessId.innerHTML = wordGuessId.replace("_", game.userGuess);
        }
        console.log(game.userGuess);
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
        if(game.guessWord === wordGuessId.innerHTML){
            game.wins = game.wins + 1;
            restartFunction();
        }
        lettersGuessedId.textContent = game.lettersGuessed;
        wordGuessId.textContent = word;
    
    }
    
            
        
    
    

    
    
    


