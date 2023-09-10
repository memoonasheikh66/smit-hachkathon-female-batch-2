const firebaseConfig = {
    apiKey: "AIzaSyCj_bYvRUz3G5ZVbu4_2d37fnbfoLl9nms",
    authDomain: "attendance-app-fc479.firebaseapp.com",
    databaseURL: "https://attendance-app-fc479-default-rtdb.firebaseio.com",
    projectId: "attendance-app-fc479",
    storageBucket: "attendance-app-fc479.appspot.com",
    messagingSenderId: "870283060155",
    appId: "1:870283060155:web:5df5c89b89b26f10ca9a9e",
    measurementId: "G-D13Z8W3SS9"
  };

    function handleStudentLogin(event) {
        event.preventDefault(); 

        var studentUsername = document.getElementById("studentUsername").value;
        var studentPassword = document.getElementById("studentPassword").value;

    
        alert("Student login successful.");
        window.location.href = "profile.html"; 

        
        document.getElementById("studentUsername").value = "";
        document.getElementById("studentPassword").value = "";
    }

    document.addEventListener("DOMContentLoaded", function () {
        
        var studentLoginForm = document.getElementById("studentLoginForm");

        studentLoginForm.addEventListener("submit", handleStudentLogin);
    });

