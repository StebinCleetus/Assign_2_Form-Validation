let email = document.getElementById("email");
let pwd = document.getElementById('pwd');
let mobile = document.getElementById('mobile');



function emailValidate() {

    let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3}).([a-z]{1,2})?$/;

    if (regexp.test(email.value)) {
        errorEmail.innerHTML = "valid <br>";
        errorEmail.style.color = "green" ;
        return true;
    }

    else {
        errorEmail.innerHTML = "invalid <br>";
        errorEmail.style.color = "red";
        return false;

    }
}
function clear1()
{
    if (errorEmail.innerHTML=="valid <br>")
    {errorEmail.innerHTML = "";
    email.style.border = "none";
}
    else
    {email.style.border = "2px solid red";}
}