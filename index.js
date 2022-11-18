let email = document.getElementById("email");
let pwd = document.getElementById('pwd');
let mobile = document.getElementById('mobile');

function validate() {
    console.log(errorEmail.innerText);
    console.log(errorMobile.innerText);
    let temp = errorEmail.innerText;
    if (temp == "valid") {
        console.log(errorMobile.innerText);
        return true;
    } else {
        console.log(errorMobile.innerText);
        return false;
    }
}

function emailValidate() {

    let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3}).([a-z]{1,2})?$/;
    errorEmail.style.display = "block";
    if (email.value != "") {
        if (regexp.test(email.value)) {
            errorEmail.innerHTML = "Your Email Address is valid <br>";
            errorEmail.style.color = "green";
            return true;
        } else {
            errorEmail.innerHTML = "Please Enter Vaild Email Address<br>";
            errorEmail.style.color = "red";
            return false;

        }
    } else {
        errorEmail.innerHTML = "Please Enter Vaild Email Address<br>";
        errorEmail.style.color = "#1490c9";
        return false;

    }
}

function mobileValidate() {

    let regexp2 = /^([0-9]{3})([0-9\ -.]{1})([0-9]{3})([0-9\ -.]{1})([0-9]{2,4})$/;
    console.log(mobile.value);

    // console.log(result);

    errorMobile.style.display = "block";
    if (mobile.value != "") {
        if (regexp2.test(mobile.value)) {
            // console.log(result);
            let result = mobile.value.match(/\d/g).length;
            if (result == 10) {
                console.log(mobile.value.length);
                errorMobile.innerHTML = "Your Mobile number is Valid <br>";
                errorMobile.style.color = "green";
                return true;
            } else {
                errorMobile.innerHTML = "Supported Formats: XXXXXXXXXX, XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX <br>";
                errorMobile.style.color = "red";
                return false;

            }
        } else {
            errorMobile.innerHTML = "Supported Formats: XXXXXXXXXX, XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX <br>";
            errorMobile.style.color = "red";
            return false;

        }
    } else {
        errorMobile.innerHTML = "Supported Formats: XXXXXXXXXX, XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX <br>";
        errorMobile.style.color = "#1490c9";
        return false;

    }
}

function passValidate() {
    errorPwd.style.display = "block";
    errorPwd.innerHTML = "Minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number";
    errorPwd.style.color = "#1490c9";





}


function clear1() {
    if (errorEmail.innerHTML == "Your Email Address is valid <br>") {
        errorEmail.style.display = "none";
        email.style.border = "none";
    } else {
        email.style.border = "2px solid red";
    }
}

function clear2() {
    if (errorMobile.innerHTML == "Your Mobile number is Valid <br>") {
        errorMobile.style.display = "none";
        mobile.style.border = "none";
    } else {
        mobile.style.border = "2px solid red";
    }
}

function clear3() {
    let temp = document.getElementById('password-text');
    console.log(temp.innerHTML);
    if (temp.innerHTML == '<small class="progress-bar bg-success" style="width: 100%">Strong</small>') {
        errorPwd.style.display = "none";
        password.style.border = "none";
    } else {
        password.style.border = "2px solid red";
    }
}

function isGood(password) {
    var password_strength = document.getElementById("password-text");

    //TextBox left blank.
    if (password.length == 0) {
        password_strength.innerHTML = "";
        return;
    }

    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
            if (passed < 2) {
                passed++;
            } else if (password.length >= 8) {
                passed++;
            } else {}


        }
    }

    //Display status.
    var strength = "";
    switch (passed) {

        case 0:
        case 1:
            strength = "<small class='progress-bar bg-danger' style='width: 40%'>Weak</small>";
            break;
        case 2:
            strength = "<small class='progress-bar bg-warning' style='width: 60%'>Medium</small>";
            break;
        case 3:
            strength = "<small class='progress-bar bg-success' style='width: 100%'>Strong</small>";
            break;

    }
    password_strength.innerHTML = strength;

}