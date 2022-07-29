// Your web app's Firebase configuration
constapp = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


const firebaseConfig = {
    apiKey: "AIzaSyBgWlQwBA0lLJMJ5puT41HDIKMtrWEaj8c",
    authDomain: "letschat-web-app---part-cf5ae.firebaseapp.com",
    databaseURL: "https://letschat-web-app---part-cf5ae-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app---part-cf5ae",
    storageBucket: "letschat-web-app---part-cf5ae.appspot.com",
    messagingSenderId: "847526673212",
    appId: "1:847526673212:web:6525ce740cf4226a0d3c39"
  };
  
 
  constapp = initializeApp(firebaseConfig);    


function addUser()
{
    user_name = document.getElementById("user_name").value;
        
    user_name = localStorage.getItem("user_name");
   
    window.location = "chat_room.html";

}
function addRoom()
    {

      room_names = document.getElementById("room_name").value;

      firebaseConfig.database().ref("/").child(room_names).updata({

      });

      user_name = localStorage.getItem("user_name");

      window.location = "Kwitter_page.html";
    }



