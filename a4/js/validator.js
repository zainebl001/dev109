function isValid() {
    if (firstName() || lastname() || email() || phone() || username() || password() || address() || city() || state() || country() || zipcode()
    )
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}
function firstName(){
    var validFirstname=false;
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };
    document.getElementById("fname").innerHTML = errorMessages;
    return (validFirstname);
};

function lastName() {
    var validLastname=false;
    var validLastname = document.getElementById("LastName").value;
    var errorMessages = "";
    if (lastname === "" || lastname.length > 50 || !lastname.match(/^[a-zA-Z]+$/)) {
        errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
        console.log("Last name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                validLastname = true;
                console.log("Last name valid")
        };
    document.getElementById("lname").innerHTML = errorMessages;
    return (validLastname);
};

function email() {
    var validEmail=false;
    var validEmail = document.getElementById("Email").value;
    var errorMessages = "";
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        (email.match("/^[^\s@]+@[^\s@]+\.[^\s@]+$/")===null)
            errorMessages += "<p>Invalid email (accepts only A-Z, a-z, and must contain @.)/p>";
            console.log("Email invalid — bad characters")
        } else {
                validEmail = true;
                console.log("Email valid")
        };
    document.getElementById("email").innerHTML = errorMessages;
    return (validEmail);
};  

function phone() {
    var validPhone=false;
    var validPhone = document.getElementById("Phone").value;
    var errorMessages = "";
    if (!phone.match(/^[0-9]+$/) || phone.length > 15){ 
        (phone.match("/^[0-9]+$/")===null)
            errorMessages += "<p>Invalid phone number (accepts only 0-9)</p>";
            console.log("Phone number invalid — bad characters")
        } else {
                validPhone = true;
                console.log("Phone number valid")
        };
    document.getElementById("phone").innerHTML = errorMessages;
    return (validPhone);
};  

function username() {
    var validUsername=false;
    var validUsername = document.getElementById("Username").value;
    var errorMessages = "";
    if (username === "" || username.length > 12 || !username.match(/^[a-zA-Z0-9]+$/)) {
        errorMessages += "<p>The username is required and cannot be greater than 12 characters</p>";
        console.log("Username invalid — length")
        } else if (username.match("/^[a-zA-Z0-9]+$/")===null) {
            errorMessages += "<p>Invalid username (accepts only A-Z, a-z, 0-9)</p>";
            console.log("Username invalid — bad characters")
        } else {
                validUsername = true;
                console.log("Username valid")
        };
    document.getElementById("username").innerHTML = errorMessages;
    return (validUsername);
};  
   
function password() {
    var validPassword=false;
    var validPassword = document.getElementById("Password").value;
    var errorMessages = "";
    if (password === "" || password.length > 7) {
        errorMessages += "<p>The password is required and cannot be greater than 7 characters</p>";
        console.log("Password invalid — length")
        } else {
                validPassword = true;
                console.log("Password valid")
        };
    document.getElementById("password").innerHTML = errorMessages;
    return (validPassword);
};  

function address() {
    var validAddress=false;
    var validAddress = document.getElementById("Address").value;
    var errorMessages = "";
    if (address === "") {
        errorMessages += "<p>The address is required</p>";
        console.log("Address invalid — input")
        } else {
                validAddress = true;
                console.log("Address valid")
        };
    document.getElementById("address").innerHTML = errorMessages;
    return (validAddress);
};  

function city() {
    var validCity=false;
    var validCity = document.getElementById("City").value;
    var errorMessages = "";
    if (city === "") {
        errorMessages += "<p>The city is required</p>";
        console.log("City invalid — input")
        } else {
                validCity = true;
                console.log("City valid")
        };
    document.getElementById("city").innerHTML = errorMessages;
    return (validCity);
};  
function state() {
    var validState=false;
    var validState = document.getElementById("State").value;
    var errorMessages = "";
    if (state === "") {
        errorMessages += "<p>The state is required</p>";
        console.log("State invalid — input")
        } else {
                validState = true;
                console.log("State valid")
        };
    document.getElementById("state").innerHTML = errorMessages;
    return (validState);
};  
function country() {
    var validCountry=false;
    var validCountry = document.getElementById("Country").value;
    var errorMessages = "";
    if (country === "") {
        errorMessages += "<p>The country is required</p>";
        console.log("Country invalid — input")
        } else {
                validState = true;
                console.log("Country valid")
        };
    document.getElementById("country").innerHTML = errorMessages;
    return (validCountry);
};  

function zipcode() {
    var validZipcode=false;
    var country = document.getElementById("Country").value;
    var validZipcode = document.getElementById("Zipcode").value;
    var errorMessages = "";
    if (country === "USA") {
        if (zipcode === "" || zipcode.length !== 5 || !zipcode.match(/^\d+$/)) {
        errorMessages += "<p>The zipcode is required and must be 5 characters long</p>";
        console.log("Zipcode invalid — length")
        } else if (zipcode.match("/^\d+$/")===null) {
            errorMessages += "<p>Invalid zipcode</p>";
            console.log("Zipcode invalid — bad characters")
        } else {
                validUsername = true;
                console.log("Zipcode valid")
        };
    document.getElementById("zipcode").innerHTML = errorMessages;
    return (validZipcode);
};  
