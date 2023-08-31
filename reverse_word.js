var str = "Satyam Singh";
var savedStr = str.split(" ")
.map(function(word){
    return word.split("").reverse().join("")
})
console.log(savedStr.join(" "));