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
const adminLoginForm = document.getElementById("adminLoginForm");

adminLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        
            const user = userCredential.user;
            console.log("Admin logged in:", user.email);
            
            window.location.href = "admin.portal.html";
        })
        .catch((error) => {
            
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Login error:", errorCode, errorMessage);
            
        });
});


document.getElementById("adminLoginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var username = document.getElementById("adminUsername").value;
    var password = document.getElementById("adminPassword").value;

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        
        this.submit();
    }
});



document.getElementById("adminLoginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("adminUsername").value;
    var password = document.getElementById("adminPassword").value;

    if (username === "admin" && password === "password123") {
       
        window.location.href = "admin portal.html"; 
    } else {
        
        alert("Invalid username or password. Please try again.");
       
        document.getElementById("adminUsername").value = "";
        document.getElementById("adminPassword").value = "";
    }
});



 
 function handleAdminLogin(event) {
    event.preventDefault(); 

    var adminUsername = document.getElementById("adminUsername").value;
    var adminPassword = document.getElementById("adminPassword").value;

    
    if (adminUsername === "admin" && adminPassword === "admin123") {
        
        window.location.href = "admin portal.html";
    } else {
        alert("Invalid admin credentials. Please try again.");
    }
}


