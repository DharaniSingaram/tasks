import { describe, test, expect } from "jest";

describe("Password validation", () => {
    function isValidPassword(password) {
        // Implementation of password validation function
    }

    // Tests for valid passwords
    test("Valid password: length = 16 characters, at least one number, at least one letter, at least one special character, first character is letter", () => {
        expect(isValidPassword("poodleabcdefghijk")).toBe(false);
        expect(isValidPassword("poodleabcdefghijk1")).toBe(true);
        expect(isValidPassword("poodleabcdefghijk!")).toBe(true);
        expect(isValidPassword("poodleabcdefghijk1!")).toBe(true);
    });
    test("Valid password: length = 16 characters, at least one number, at least one letter, at least one special character, first character is letter", () => {
        expect(isValidPassword("beagleabcdefghijk")).toBe(false);
        expect(isValidPassword("beagleabcdefghijk1")).toBe(true);
        expect(isValidPassword("beagleabcdefghijk!")).toBe(true);
        expect(isValidPassword("beagleabcdefghijk1!")).toBe(true);
    });
    test("Valid password: length = 16 characters, at least one number, at least one letter, at least one special character, first character is letter", () => {
        expect(isValidPassword("german shepherdabcdefg")).toBe(false);
        expect(isValidPassword("german shepherdabcdefg1")).toBe(true);
        expect(isValidPassword("german shepherdabcdefg!")).toBe(true);
        expect(isValidPassword("german shepherdabcdefg1!")).toBe(true);
    });

    // Tests for invalid passwords
    test("Invalid password: length < 16 characters", () => {
        expect(isValidPassword("poodleabcdefghij")).toBe(false);
    });
    test("Invalid password: length > 16 characters", () => {
        expect(isValidPassword("poodleabcdefghijkl")).toBe(false);
    });
    test("Invalid password: no number", () => {
        expect(isValidPassword("poodleabcdefghijk!")).toBe(false);
    });
    test("Invalid password: no letter", () => {
        expect(isValidPassword("1234567890!@#$%")).toBe(false);
    });
    test("Invalid password: no special character", () => {
        expect(isValidPassword("poodleabcdefghijk")).toBe(false);
    });
    test("Invalid password: first character is number", () => {
        expect(isValidPassword("1poodleabcdefghijk")).toBe(false);
    });
    test("Invalid password: first character is special character", () => {
        expect(isValidPassword("!poodleabcdefghijk")).toBe(false);
    });
});
