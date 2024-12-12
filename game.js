var random=Math.floor(Math.random()*10)+1;
var guess=prompt("guess the number between 1 to 10:");
const userguess=parseInt(guess);
if(userguess===random){
    console.log("Number Matched!.The number was"+userguess)
}
else{
    console.log("Not Matched.The number was"+random)
}