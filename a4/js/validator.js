function isValid() {
    if (firstName() || lastname() || !validEmail || !validPhone || !validUsername || !validPassword || !validAddress || !validCity || !validState || !validCountry || !validZipcode
    )
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

    var warning = document.getElementById("warning");
    warning.innerHTML = "";
    }
    if (!validEmail) {
        warning.innerHTML += "<p>Please enter a valid email address. Email must contain @ & .com</p>";
    }
    if (!validPhone) {
        warning.innerHTML += "<p>Please enter a valid phone number. No (, -, or .</p>";
    }
    if (!validUsername) {
        warning.innerHTML += "<p>Please enter a valid username. Username may only contain a maximum of 12 characters</p>";
    }
    if (!validPassword) {
        warning.innerHTML += "<p>Please enter a valid password. Must be 7 characters long or less.</p>";
    }
    if (!validAddress) {
        warning.innerHTML += "<p>Please enter a valid address.</p>";
    }
    if (!validCity) {
        warning.innerHTML += "<p>Please enter a valid city.</p>";
    }
    if (!validState) {
        warning.innerHTML += "<p>Please select a state.</p>";
    }
    if (!validCountry) {
        warning.innerHTML += "<p>Please select a country.</p>";
    }
    if (!validZipcode) {
        warning.innerHTML += "<p>Please enter a valid zipcode. Zip codes are 5 digits long</p>";
    }

    if (!validFirstname || !validLastname || !validEmail || !validPhone || !validUsername || !validPassword || !validAddress || !validCity || !validState || !validCountry || !validZipcode) {
        return false;
    }
    warning.innerHTML = "";
    return true;
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

function lastname() {
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
    if (!emailRegex.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        } else if (lastname.match("/^[^\s@]+@[^\s@]+\.[^\s@]+$/")===null) {
            errorMessages += "<p>Invalid email. Email must contain @ & .com</p>";
            console.log("Email invalid — bad characters")
        } else {
                validEmail = true;
                console.log("Last name valid")
        };
    document.getElementById("email").innerHTML = errorMessages;
    return (validEmail);
};  

function phone() {
    var phone = document.getElementById("Phone").value;
    var phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone) || phone.length > 15) {
        return false;
    }
    return true;
}

function validateUsername() {
    var username = document.getElementById("Username").value;
    if (username === "" || username.length > 12 || !username.match(/^[a-zA-Z0-9]+$/)) {
        return false;
    }
    return true;
}

function validatePassword() {
    var password = document.getElementById("Password").value;
    if (password === "" || password.length > 7) {
        return false;
    }
    return true;
}

function validateAddress() {
    var address = document.getElementById("Address").value;
    if (address === "") {
        return false;
    }
    return true;
}

function validateCity() {
    var city = document.getElementById("City").value;
    if (city === "") {
        return false;
    }
    return true;
}

function validateState() {
    var state = document.getElementById("State").value;
    if (state === "") {
        return false;
    }
    return true;
}

function validateCountry() {
    var country = document.getElementById("Country").value;
    if (country === "") {
        return false;
    }
    return true;
}

function validateZipcode() {
    var country = document.getElementById("Country").value;
    var zipcode = document.getElementById("ZipCode").value;
    if (country === "USA") {
        if (zipcode === "" || zipcode.length !== 5 || !zipcode.match(/^\d+$/)) {
            return false;
        }
    }
    return true;
}
