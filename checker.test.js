const checkPassword = require("./checker")



// 1st test

//'expect' is from Jest (it takes function we want to test)
//toBe refers to what comes back from the function being tested

test("return false when given an empty string", () => {
    expect(checkPassword("")).toBe(false);
});

test("returns false when the password length is not 8 characters or more", () => {
    expect(checkPassword("1234567")).toBe(false);
});

test("return false when the password doesn't contain a letter", () => {
    expect(checkPassword("123456789")).toBe(false);
});

test("return false when the password doesn't contain a number", () => {
    expect(checkPassword("aaaaaaaaaa")).toBe(false);
});

test("return false when the password doesn't contain one uppercase letter", () => {
    expect(checkPassword("helloworld123")).toBe(false);
})

test("return false when the password doesn't contain one symbol", () => {
    expect(checkPassword("helloworld123")).toBe(false);
})

test("return false when the password is longer than 20 characters", () => {
    expect(checkPassword("helloworld123")).toBe(false);
})

test("return true when the password is 8 chars or more, contains a letter, contains one uppercase letter, contains one lowercase letter, contains a number, contains a symbol, is not longer than 20 characters ", () => {
     expect(checkPassword("Helloworld123$")).toBe(true);
})


// check now to see if it fails when given a password of 8 characters but has no letters

// test("returns false when given a password of 8 characters but has no letters", () =+ {
//     expect(checkPassword("12345678")).toBe(false)
// })