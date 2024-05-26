function validateForm() {
    var validFirstname = validateFirstName();
    var validLastname = validateLastName();
    var validEmail = validateEmail();
    var validPhone = validatePhone();
    var validUsername = validateUsername();
    var validPassword = validatePassword();
    var validAddress = validateAddress();
    var validCity = validateCity();
    var validState = validateState();
    var validCountry = validateCountry();
    var validZipcode = validateZipcode();

    if (validFirstname && validLastname && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validState && validCountry && validZipcode) {
        window.location.href = "https://zainebl001.github.io/dev109/a4/thankyou.html";
        return true;
    } else {
        return false;
    }
}

function validateFirstName() {
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    if (firstname === "" || firstname.length > 20 || !firstname.match(/^[a-zA-Z]+$/)) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters. Only alphabetical characters are allowed.</p>";
        document.getElementById("fname").innerHTML = errorMessages;
        return false;
    } else {
        document.getElementById("fname").innerHTML = "";
        return true;
    }
}

function validateLastName() {
    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

    if (lastname === "" || lastname.length > 50 || !lastname.match(/^[a-zA-Z]+$/)) {
        errorMessages += "<p>The last name is required and cannot be greater than 50 characters. Only alphabetical characters are allowed.</p>";
        document.getElementById("lname").innerHTML = errorMessages;
        return false;
    } else {
        document.getElementById("lname").innerHTML = "";
        return true;
    }
}

function validateEmail() {
    var email = document.getElementById("Email").value;
    var errorMessages = "";

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessages += "<p>Invalid email format.</p>";
        document.getElementById("email").innerHTML = errorMessages;
        return false;
    } else {
        document.getElementById("email").innerHTML = "";
        return true;
    }
}

function validatePhone() {
    var phone = document.getElementById("Phone").value;
    var errorMessages = "";

    var phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone) || phone.length > 15) {
        errorMessages += "<p>Invalid phone number.</p>";
        document.getElementById("phone").innerHTML = errorMessages;
        return false;
    } else {
        document.getElementById("phone").innerHTML = "";
        return true;
    }
}

function validateUsername() {
    var username = document.getElementById("Username").value;
    var errorMessages = "";

    if (username === "" || username.length > 12 || !username.match(/^[a-zA-Z0-9]+$/)) {
        errorMessages += "<p>Username is required and cannot be greater than 12 characters. Only alphanumeric characters are allowed.</p>";
        document.getElementById("username").innerHTML = errorMessages;
        return false;
    } else {
        document.getElementById("username").innerHTML = "";
        return true;
    }
}

function validatePassword() {
    var password = document.getElementById("Password").value;
    var errorMessages = "";

    if (password === "" || password.length > 7) {
        errorMessages += "<p>Password is required and cannot be greater than 7 characters.</p>";
        document.getElementById("password").innerHTML = errorMessages;
        return false;
    } else {
        document.getElementById("password").innerHTML = "";
        return true;
    }
}

function validateAddress() {
    var address = document.getElementById("Address").value;
    var errorMessages = "";
}

function validateCity() {
    var city = document.getElementById("City").value;
    var errorMessages = "";
}

function validateState() {
    var state = document.getElementById("State").value;
    var errorMessages = "";
}

function validateCountry() {
    var country = document.getElementById("Country").value;
    var errorMessages = "";

    if (country === "") {
        errorMessages += "<p>Country is required.</p>";
        document.getElementById("country").innerHTML = errorMessages;
        return false;
    } else if (country === "USA") {
        document.getElementById("country").innerHTML = "";
        return true;
    } else {
        document.getElementById("country").innerHTML = "";
        return true;
    }
}

function validateZipcode() {
    var country = document.getElementById("Country").value;
    var zipcode = document.getElementById("ZipCode").value;
    var errorMessages = "";

    if (country === "USA") {
        if (zipcode === "" || zipcode.length > 5 || !zipcode.match(/^\d{5}$/)) {
            errorMessages += "<p>Zipcode is required and must be 5 digits for USA.</p>";
            document.getElementById("zipcode").innerHTML = errorMessages;
            return false;
        } else {
            document.getElementById("zipcode").innerHTML = "";
            return true;
        }
    } else {
        document.getElementById("zipcode").innerHTML = "";
        return true;
    }
}
