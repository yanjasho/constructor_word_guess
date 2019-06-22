require("fs")

var Letter = function (wordcharacter) {
   this.wordcharacter = wordcharacter,
   this.guessed = false,
   this.showletter = function(){
       if(this.guessed){
           return this.wordcharacter
       }
       else{
           return "_"
       }
   },
   this.checkcharacter = function(usercharacter){
       if (usercharacter==this.wordcharacter){
           this.guessed = true
       }
   }
}

module.exports = Letter