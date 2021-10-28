var firebaseConfig = {
      apiKey: "AIzaSyD1_Xgwa_tZZa-hEnepc6ULTqsEJibE-iE",
      authDomain: "kkkkk-78570.firebaseapp.com",
      projectId: "kkkkk-78570",
      databaseURL:"https://kkkkk-78570-default-rtdb.firebaseio.com/",
      storageBucket: "kkkkk-78570.appspot.com",
      messagingSenderId: "546345555285",
      appId: "1:546345555285:web:dff8c00e0cc61e73e28bdc"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";

 function addRoom() {
       room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"; 
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirect(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"; 
}



function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"; 
}