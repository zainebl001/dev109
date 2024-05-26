function validateForm() {
    var validFirstname = validateFirstName();
    var validLastname = validateLastname();
    var validEmail = validateEmail();
    var validPhone = validatePhone();
    var validUsername = validateUsername();
    var validPassword = validatePassword();
    var validAddress = validateAddress();
    var validCity = validateCity();
    var validState = validateState();
    var validCountry = validateCountry();
    var validZipcode = validateZipcode();

    var errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = "";

    if (!validFirstname) {
        errorMessages.innerHTML += "<p>Please enter a valid first name.</p>";
    }
    if (!validLastname) {
        errorMessages.innerHTML += "<p>Please enter a valid last name.</p>";
    }
    if (!validEmail) {
        errorMessages.innerHTML += "<p>Please enter a valid email address.</p>";
    }
    if (!validPhone) {
        errorMessages.innerHTML += "<p>Please enter a valid phone number.</p>";
    }
    if (!validUsername) {
        errorMessages.innerHTML += "<p>Please enter a valid username.</p>";
    }
    if (!validPassword) {
        errorMessages.innerHTML += "<p>Please enter a valid password.</p>";
    }
    if (!validAddress) {
        errorMessages.innerHTML += "<p>Please enter a valid address.</p>";
    }
    if (!validCity) {
        errorMessages.innerHTML += "<p>Please enter a valid city.</p>";
    }
    if (!validState) {
        errorMessages.innerHTML += "<p>Please select a state.</p>";
    }
    if (!validCountry) {
        errorMessages.innerHTML += "<p>Please select a country.</p>";
    }
    if (!validZipcode) {
        errorMessages.innerHTML += "<p>Please enter a valid zipcode.</p>";
    }

    if (!validFirstname || !validLastname || !validEmail || !validPhone || !validUsername || !validPassword || !validAddress || !validCity || !validState || !validCountry || !validZipcode) {
        return false;
    }
    return true;
}

function validateFirstName() {
    var firstname = document.getElementById("FirstName").value;
    if (firstname === "" || firstname.length > 20 || !firstname.match(/^[a-zA-Z]+$/)) {
        return false;
    }
    return true;
}

function validateLastname() {
    var lastname = document.getElementById("LastName").value;
    if (lastname === "" || lastname.length > 50 || !lastname.match(/^[a-zA-Z]+$/)) {
        return false;
    }
    return true;
}

function validateEmail() {
    var email = document.getElementById("Email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return false;
    }
    return true;
}

function validatePhone() {
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
