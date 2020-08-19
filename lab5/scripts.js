// STORING DATA

//stores data 
$("#infoBtn").click(function(){    

  let personInfo = {
  name: document.getElementById('name').value,
  grade: document.getElementById('grade').value,
  age: document.getElementById('age').value,
  program: document.getElementById('prog').value,
}      
    var pInfoJSON = JSON.stringify(personInfo);

    localStorage.setItem("pInfoJSON", pInfoJSON);  

    var pInfoText = localStorage.getItem("pInfoJSON");

    var pInfoObj = JSON.parse(pInfoText);


  $("#pName").html(pInfoObj.name);
  $("#pGrade").html(pInfoObj.grade);
  $("#pAge").html(pInfoObj.age);
  $("#pProg").html(pInfoObj.program);
})
