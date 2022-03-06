//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAJBc8KrT3LFDN1YFasXq_iQiODgNzpblA",
      authDomain: "c-93-test-kwitter.firebaseapp.com",
      projectId: "c-93-test-kwitter",
      storageBucket: "c-93-test-kwitter.appspot.com",
      messagingSenderId: "330044057777",
      appId: "1:330044057777:web:0a96f75df5c8e493949a90"
    };
    firebase.initializeApp(firebaseConfig);
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send()
{
      msg=document.getElementById("msg").value;
      getData();firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}
//End code
      } });  }); }
