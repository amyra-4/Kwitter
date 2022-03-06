
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyAJBc8KrT3LFDN1YFasXq_iQiODgNzpblA",
      authDomain: "c-93-test-kwitter.firebaseapp.com",
      projectId: "c-93-test-kwitter",
      storageBucket: "c-93-test-kwitter.appspot.com",
      messagingSenderId: "330044057777",
      appId: "1:330044057777:web:0a96f75df5c8e493949a90"
    };
    firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({ 
            purpose : "adding room name" 
      });

      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}




function getData() 
{ firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("remove_name");
window.location="index.html";
}
