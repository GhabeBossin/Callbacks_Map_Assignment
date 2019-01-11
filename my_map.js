//given Array of strings:
var wordsArr = ["ground", "control", "to", "major", "tom"];

function map (wordsArr, cbFunc) {
   var newArr = [];
   wordsArr.forEach(function(word){
      newArr.push(cbFunc(word));
   });
   console.log(newArr);
};

//call examples:
map(wordsArr, function(word) {
   return word.length;
});

map(wordsArr, function(word) {
return word.toUpperCase();
});

map(wordsArr, function(word) {
return word.split('').reverse().join('');
});

//output should be: 
// [6, 7, 2, 5, 3]
// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]
// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]