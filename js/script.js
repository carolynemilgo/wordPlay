$(document).ready(function(){
  // function splitSentence(sentence,seperator){
  //   var words=sentence.split(seperator);
  //
  //   console.log("The elements are "+words);
  // }
  $(".sents").submit(function(event){
    var sentence1 = $("#sent").val();
    var words = sentence1.split(" ");
    var newArray=[];
    words.forEach(function(word){
      if (word.length>=3) {
         newArray.push(word);
      }

    });

    newArray.reverse();
    alert(newArray);
    event.preventDefault();
  });

});
