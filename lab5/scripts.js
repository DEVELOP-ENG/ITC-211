
//function 
$("#infoBtn").click(function(){    

//gathers input
  let personInfo = {
  name: document.getElementById('name').value,
  gpa: document.getElementById('gpa').value,
  age: document.getElementById('age').value,
  program: document.getElementById('prog').value,
}  

//stores data     
    var pInfoJSON = JSON.stringify(personInfo);

    localStorage.setItem("pInfoJSON", pInfoJSON);  

//gathers stored data
    var pInfoText = localStorage.getItem("pInfoJSON");

    var pInfoObj = JSON.parse(pInfoText);

//displays data
  $("#pName").html(pInfoObj.name);
  $("#pGpa").html(pInfoObj.gpa);
  $("#pAge").html(pInfoObj.age);
  $("#pProg").html(pInfoObj.program);
})
