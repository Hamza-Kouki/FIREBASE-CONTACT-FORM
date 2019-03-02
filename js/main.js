// Initialize Firebase
var config = {
    apiKey: "AIzaSyCCPAO832mQoO4SwcENH4WI_xPEPUu24oQ",
    authDomain: "ada-students-feedback.firebaseapp.com",
    databaseURL: "https://ada-students-feedback.firebaseio.com",
    projectId: "ada-students-feedback",
    storageBucket: "ada-students-feedback.appspot.com",
    messagingSenderId: "540908607534"
  };
  firebase.initializeApp(config);

  //Reference messages collection 
  var messagesRef = firebase.database().ref('messages');
// Listner for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    //get values
var email = getInputVal('email');
var username = getInputVal('username');
var password = getInputVal('password');
var firstname = getInputVal('firstname');
var lastname = getInputVal('lastname');

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