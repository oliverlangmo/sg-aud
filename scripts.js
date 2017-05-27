var outputText = '';

var displayEvens = function(){
  console.log("click happened");
  var startNum = Number(document.getElementById('startNum').value);
  var endNum = Number(document.getElementById('endNum').value);
  var step = Number(document.getElementById('stepAmt').value);

  if (endNum <= startNum){
    outputText = 'Start Number Cannot be greater than or equal to the End Number';
    document.getElementById('error').innerHTML = outputText;
    return;
 } else if (startNum !== parseInt(startNum, 10) || endNum !== parseInt(endNum, 10) )  {
   outputText = 'Please only enter numbers in the fields';
   document.getElementById('error').innerHTML = outputText;
   return;
 } else if (step < 0){
   outputText = 'Step cannot be a negative number';
   document.getElementById('error').innerHTML = outputText;
   return;
 } else {
    outputText = '';
    outputText = "Here are the even numbers between " + startNum + " and "+ endNum + " by " + step + "'s" ;
    document.getElementById('outputDiv').innerHTML = outputText;
 }
 

for (var i = startNum; i < endNum; i+=step) {
  if (i % 2 === 0){
    outputText += "<li>"+ i + "</li>";
    document.getElementById('outputDiv').innerHTML = outputText;
    }
  }
};
