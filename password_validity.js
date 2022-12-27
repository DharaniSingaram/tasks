// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CheckPassword(inputtxt) {
    var passw =
        /^[A-Za-z]\w(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{16}$/;
    if (inputtxt.value.match(passw)) {
        return true;
    } else {
        return false;
    }
}
