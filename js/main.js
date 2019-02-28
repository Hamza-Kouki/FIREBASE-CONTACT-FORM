//Listner for form submit
var evt = 5;
document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(evt){
    evt.preventDefault();
    //getvalues
    var name= getInputVal('name');
    console.log(nom);
}

//Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}