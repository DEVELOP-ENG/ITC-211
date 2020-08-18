/*
Create a Web Application that demonstrates the use of inserting,
appending, removing, replacing DOM Nodes in the Document
Object Module 
*/
//disable the last three buttons and text field
document.getElementById("qtnBtn").disabled = true;
document.getElementById("myQuestion").disabled = true; 

document.getElementById("appendBtn").disabled = true;
document.getElementById("removeBtn").disabled = true;

//inserting dom nodes 
function insert(){
    var para = document.createElement("p");
    var node = document.createTextNode(document.getElementById("myText").value);
    para.appendChild(node);

    var element = document.getElementById("div2");
    var child = document.getElementById("p1");
    element.insertBefore(para, child);

    document.getElementById("qtnBtn").disabled = false;
    document.getElementById("myQuestion").disabled = false;
    
}
//replacing dom nodes 
function replace(){
    var para = document.createElement("p");
    var node = document.createTextNode(document.getElementById("myQuestion").value);
    para.appendChild(node);
    
    var parent = document.getElementById("div2");
    var child = document.getElementById("q1");
    parent.replaceChild(para, child); 

    document.getElementById("appendBtn").disabled = false;
}

//appending dom nodes 
function append(){
    var para = document.createElement("p");
    var node = document.createTextNode("This seems awfully familiar...");
    para.appendChild(node);
    
    var element = document.getElementById("appendBtn");
    element.appendChild(para);  

    document.getElementById("removeBtn").disabled = false;
}

//removing dom nodes

function move(){
    var cancel = document.getElementById("main");
    cancel.remove(); 
}

