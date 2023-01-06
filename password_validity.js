function isValidPassword(password) {
    if (password.length !== 16) {
        return false;
    }

    if (!/[0-9]/.test(password) || !/[a-zA-Z]/.test(password)) {
        return false;
    }

    if (!/[^0-9a-zA-Z]/.test(password)) {
        return false;
    }

    if (/^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        return false;
    }

    return true;
}
