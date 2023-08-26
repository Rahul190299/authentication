function populateProfile(userData) {
    document.getElementById("name").textContent = userData.username;
    document.getElementById("email").textContent = userData.email;
    document.getElementById("pass").textContent =userData.password;
}

window.onload = function() {
    const storedUserData = localStorage.getItem("userState");
    console.log(storedUserData);
    if (storedUserData !== 'null') {
        
        const userData = JSON.parse(storedUserData);
        populateProfile(userData);
    }
    else{
        console.log('index');
        window.location.href="index.html";
    }
};