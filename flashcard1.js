"use strict"


var jsonfile = require('jsonfile')
var file = 'data.json'
jsonfile.readFile(file,function(err,obj){
  console.dir(obj)
})

console.log(`Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go !`)
