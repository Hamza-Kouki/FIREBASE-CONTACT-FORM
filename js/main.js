// Initialize Firebase
var config = {
    apiKey: "AIzaSyBR7YJgRtM4yz_L28SHarwUh_SEBCOl6QQ",
    authDomain: "fir-contact-form-14137.firebaseapp.com",
    databaseURL: "https://fir-contact-form-14137.firebaseio.com",
    projectId: "fir-contact-form-14137",
    storageBucket: "fir-contact-form-14137.appspot.com",
    messagingSenderId: "715334786610"
  };
  firebase.initializeApp(config);

  //Reference messages collection 
  var messagesRef = firebase.database().ref('messages');
// Listner for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    //get values
var email = getInputVal('email') ; 
var username = getInputVal('username');
var password = getInputVal('password');
var firstname = getInputVal('firstname');
var lastname = getInputVal('lastname');
var comment = getInputVal('comment');
//--------
/*var email = document.getElementById('email').value;
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
var firstname = document.getElementById('firstname').value;
var lastname = document.getElementById('lastname').value;
var comment = document.getElementById('comment').value;*/
//-----------

//save message
saveMessage(email , username , password , firstname , lastname);
}

//Function to get form values 
function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(email , username , firstname , lastname){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        email : email,
        username : username,
        password : password,
        firstname : firstname , 
        lastname : lastname 
    });
}