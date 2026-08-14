function restrictSpace(event){
    if(event.key==" "){
        return false;
    }
}
function checkStrength(){

    var password = document.getElementById("Pass").value;
    var strength = document.getElementById("strength");

    if(password.length < 5){
        strength.innerHTML = "Weak Password";
    }
    else if(password.match(/[0-9]/) && password.match(/[!@#$%^&*]/)){
        strength.innerHTML = "Strong Password";
    }
    else{
        strength.innerHTML = "Medium Password";
    }
}
function validateForm() {

    var username = document.getElementById("Uname").value;
    var password = document.getElementById("Pass").value;
    var confirmPassword = document.getElementById("Cpass").value;
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    function saveToFile() {
    var username = document.getElementById("Uname").value;
    var password = document.getElementById("Pass").value;

    var data = "Username: " + username + "\nPassword: " + password;

    var blob = new Blob([data], { type: "text/plain" });
    var link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "login.txt"; // file name

    link.click();
}
    alert("Registration Successful!");
    window.location.href = "HomePage.html";
    return false;
}
function saveToFile(){
    var username=document.getElementById("Uname").value;
    var password=document.getElementById("Pass").value;
    //combine data
    var data="Username :"+username + "\nPassword :" + password;
    //create a fine
    var blob=new Blob([data] ,{type:"text/plain"});//"Create a text file in memory and put my username & password inside Tha text file"
    //create a dowbload link
    var link=document.createElement("a");
    link.href=URL.createObjectURL(blob);
    link.download="LoginDetails.txt";
    //download File
    link.click();
}
