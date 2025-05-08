
function validateUser(name, age) {

    if (typeof name === String, age >= 0) {
        return(true)
    }

    else {
        return(false)
    }
}

console.log(validateUser());