// at least 8 characters long
// has at least one letter
// has at least one number

// has at least one UPPERCASE letter
// has at least one symbol
// has at least one lowercase letter
// is not longer than 20 chars

const checkPassword = (password) => {
    const isNotValid = !/[a-zA-Z0-9]/g.test(password) || password?.length <= 8 || password?.length >= 20 || !/[!@#$%^&*(),.?":{}|<>]/g.test(password)
    return isNotValid ? false : true
};




// export checkPassword function
module.exports = checkPassword;