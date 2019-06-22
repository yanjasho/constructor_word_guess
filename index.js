require("fs")
var Word = require("./word")
var inquirer = require("inquirer")

var topic = ["kraken", "bigfoot","chupacabra","dragon","popobawa","unicorn","sphinx","amarok","irkuiem", "elwedritsch", "sirin", "mavka"]
var chosenword = topic[Math.floor(Math.random() * topic.length)]
var word = new Word(chosenword)
var guesses = 15
word.wordtoguess()
inquirer.prompt([
    {
        type: "input",
        name: "usercharacter",
        message: "Guess this cryptocreature: "+word.showstring().join(" ") + "\nNumber of guesses: "+guesses+ "\nYour letter: ",
        validate: function(value) {
            if(value.match(/^[A-Za-z]+$/)&&value.length==1){
                return true
            }
            else {
                return "Please type a letter!"
            }
        }
    }
]).then(function (answers) {
    var usercharacter = answers.usercharacter
    word.showcharacter(usercharacter)
    if(chosenword.indexOf(usercharacter)==-1){
        guesses=guesses-1
    }
    guessprompt()
})

function guessprompt(){
    if(word.showstring().join("")===chosenword){
        console.log(chosenword.toUpperCase() + "\nVictory!!!")
        // inquirer.prompt([
        //     {

        //     }
    }
    else if(guesses>0){
        inquirer.prompt([
        {
        type: "input",
        name: "usercharacter",
        message: "Keep guessing: "+word.showstring().join(" ") + "\nNumber of guesses: "+guesses+ "\nYour letter: ",
        validate: function(value) {
            if(word.showstring().indexOf(value)>-1){
                return "You already have this letter. Don't repeat!"
            }
            else if(value.match(/^[A-Za-z]+$/)&&value.length==1){
                return true
            }
            else {
                return "Please type a letter!"
            }
        }
        }
        ]).then(function eachguess(answers) {
            var usercharacter = answers.usercharacter
            word.showcharacter(usercharacter)
            if(chosenword.indexOf(usercharacter)==-1){
                guesses=guesses-1
            }
            guessprompt()
        })
    }
    else{
        console.log("Gameover!")
    }
}