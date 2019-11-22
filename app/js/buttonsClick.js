//import $ from 'jQuery';

var clickerOne = function(){
    document.getElementById("funnyButtonOne").onclick = function(){
        alert("fBut");        
    };
}
var clickerTwo = function(){
    $("#funnyButtonTwo").click(function(){
        alert("sBut");
    });
}

module.exports= {clickerOne,clickerTwo};