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
    let regexp3 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (regexp3.test(pwd.value)) {
        errorPwd.innerHTML = "valid <br>";
        errorPwd.style.color = "green";
        return true;
    } else {
        errorPwd.innerHTML = "invalid <br>";
        errorPwd.style.color = "red";
        return false;

    }
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