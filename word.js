require("fs")
var Letter = require("./letter")

var Word = function(wordtoguess){
    this.wordarray=[]
    this.wordtoguess = function(){
        wordtoguess.split("").forEach(element => {
            letter = new Letter(element)
            this.wordarray.push(letter)
        })
    }
    this.showstring = function(){
        var wordwith_=[]
        this.wordarray.forEach(element => {
            wordwith_.push(element.showletter())
        })
        return wordwith_
    },
    this.showcharacter = function(){
        this.wordarray.forEach(element => {
           element.checkcharacter(usercharacter)
        })  
    }  
}
// var word = new Word("table")
// word.wordtoguess()
// var usercharacter = "a"
// word.showcharacter()
// console.log(word.showstring())

module.exports = Word