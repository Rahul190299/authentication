window.onload = function() {
    var storedUserData = localStorage.getItem("userState");
    console.log(storedUserData);
    if (storedUserData !== 'null') {
        window.location.href="profile.html";
    }
    
};

const btn=document.getElementById('signUp');
btn.addEventListener('click',signup);
const profileBtn =document.getElementById("profile");

profileBtn.addEventListener('click',function(){
    if(storedUserData== 'null'){
        window.location.href="index.html";
    }
});
function generateAccessToken() {
    // Generate a random 16-byte string for the access token
    const randomBytes = new Uint8Array(16);
    window.crypto.getRandomValues(randomBytes);
    const token = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
    return token;
}

function signup() {
    const username = document.getElementById("username").textContent;
    console.log(username);
    const email = document.getElementById("email").textContent;
    const password = document.getElementById("password").textContent;
    const changepass = document.getElementById("changepass").textContent;

    // Generate an access token
    const accessToken = generateAccessToken();

    if(username === ""){
        showErrorDOM("Error : Username is required","red")
        
        return;
    }
    else if(email === ""){
        showErrorDOM("Error : Email is required","red");
        return;
    }
    else if(password === ""){
        showErrorDOM("Error : Please enter a valid password","red");
        return;
    }
    else if(password!=changepass){
        showErrorDOM("Error : Password and confirm password should match","red");
        return;
    }

    // Create user state object
    const userState = {
        username: username,
        email: email,
        password: password,
        accessToken: accessToken
    };

    // Save user state in localStorage
    localStorage.setItem("userState", JSON.stringify(userState));
    showErrorDOM("Succesfully Signed Up!","green");
    window.location.href="profile.html";
     
    
}

function showErrorDOM(message,color) {
    const errorContainer = document.getElementById("errorContainer");
    errorContainer.textContent = "Error: " + message;
    errorContainer.style.color=color;

}
