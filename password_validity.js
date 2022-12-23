// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CheckPassword(inputtxt) {
    var passw =
        /^[A-Za-z]\w(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{16}$/;
    if (inputtxt.value.match(passw)) {
        alert("Correct, try another...");
        return true;
    } else {
        alert("Wrong...!");
        return false;
    }
}
