// STORING DATA
var noel = {name: "Noel", grade: "101%", age: 24, program: "Year Up - Puget Sound"}
var adrian = {name: "Adrian ", grade: "21%", age: 22, program: "Year Up - Puget Sound"}
var jenisha = {name: "Jenisha", grade: "85.7%", age: 20, program: "Year Up - Puget Sound"}
var theresa = {name: "Theresa", grade: "52.9%", age: 23, program: "Year Up - Puget Sound"}

noelJSON = JSON.stringify(noel);
adrianJSON = JSON.stringify(adrian);
jenishaJSON = JSON.stringify(Jenisha);
theresaJSON = JSON.stringify(Theresa);

localStorage.setItem("noelJSON", noelJSON);
localStorage.setItem("adrianJSON", adrianJSON);
localStorage.setItem("jenishaJSON", jenishaJSON);
localStorage.setItem("theresaJSON", theresaJSON);

// RETRIEVING DATA
var noelText = localStorage.getItem("noelJSON");
var adrianText = localStorage.getItem("adrianJSON");
var jenishaText = localStorage.getItem("jenishaJSON");
var theresaText = localStorage.getItem("theresaJSON");

var noelObj = JSON.parse(noelText);
var adrianObj = JSON.parse(adrianText);
var jenishaObj = JSON.parse(jenishaText);
var theresaObj = JSON.parse(theresaText);

// jQuery noel
$("#noel").click(function(){
  $("#name").html(noelObj.name);
  $("#grade").html(noelObj.grade);
  $("#age").html(noelObj.age);
  $("#prog").html(noelObj.program);
})
// jQuery adrian
$("#adrian").click(function(){
  $("#name").html(adrianObj.name);
  $("#grade").html(adrianObj.grade);
  $("#age").html(adrianObj.age);
  $("#prog").html(adrianObj.program);
})
// jQuery jenisha
$("#jenisha").click(function(){
  $("#name").html(jenishaObj.name);
  $("#grade").html(jenishaObj.grade);
  $("#age").html(jenishaObj.age);
  $("#prog").html(jenishaObj.program);
})
// jQuery theresa
$("#theresa").click(function(){
  $("#name").html(theresaObj.name);
  $("#grade").html(theresaObj.grade);
  $("#age").html(theresaObj.age);
  $("#prog").html(theresaObj.program);
})