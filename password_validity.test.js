import { CheckPassword } from "./inputtxt";

const [LENGTH, NUMBER, LETTER, CHARACTER, FIRST_LETTER] =
    // eslint-disable-next-line no-undef
    PASSWORD;


test("Testing the CheckPassword function", () => {
    expect(CheckPassword(LENGTH, "chocolatelab#@96")).toEqual(true);
    expect(CheckPassword(LENGTH, "poodle67@")).toEqual(false);
    expect(CheckPassword(LENGTH, "Alaskan!Husky*Shepard45")).toEqual(false);
    expect(CheckPassword(NUMBER, "beaglelover@*^%8")).toEqual(true);
    expect(CheckPassword(NUMBER, "dachshund!@#$%^&")).toEqual(false);
    expect(CheckPassword(LETTER, "pug1234567890^$&")).toEqual(true);
    expect(CheckPassword(LETTER, "09$8#7&65^43(2*1")).toEqual(false);
    expect(CheckPassword(CHARACTER, "Maltese!04862744")).toEqual(true);
    expect(CheckPassword(CHARACTER, "Newfoundland6259")).toEqual(false);
    expect(CheckPassword(FIRST_LETTER, "ShibaInu1078$*@6")).toEqual(true);
    expect(CheckPassword(FIRST_LETTER, "2terrier$(63%781")).toEqual(false);
    expect(CheckPassword(FIRST_LETTER, "&Yorkshire&!238%")).toEqual(false);
    });
