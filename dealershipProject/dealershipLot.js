  function carRequest(){
let wMake = prompt("Please enter the make of the car you'd like.");
let wModel = prompt("Please enter the model of the vehicle you'd like.");
let hMany = prompt("Please enter how many vehicles you'd like to buy.");
}

class cars {
  constructor(inventory){
    this.inventory = Math.random();   
  }
  countInventory(){
    console.log(`We have ${inventory} cars in our inventory.`);
  }
}// end of cars class
class myCar extends cars {
  constructor(make, model, amount){
    this.make = make;
    this.model = model;
    this.amount = amount
  }
  get amount(){
    return this.amount = amount;
  }
  set amount(){
    this.amount = inventory - hMany;
  }// end of getters and setters for amount 
  get model(){
    return this.model = model;
  }
  set model(){
    this.model = wModel // reference input value model
  }// end of getters and setters for model 
  get make(){
    return this.make = make;
  }
  set make(){
    this.make = wMake // reference input value make
    }// end of getters and setters for make 
  }//end of myCar Class
