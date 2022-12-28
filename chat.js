// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

// Initialize Firebase



function addUser()
{
    username = document.getElementById("user_name").value;
    
    /*
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
    */
   localStorage.setItem("username",username)
   window.location="chat_room.html"
}



