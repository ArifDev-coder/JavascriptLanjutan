function tryPassword(password) {
    console.log('run?');
    for(let i = 0; i <= password.length; i++) {
        checkPassword(i, password);
    }
}
function checkPassword(i, password) {
    if(i == password) {
        return `Password has Cracked !! : "${i}" is the password`;
    }else {
        return `cracking password... ${i}`;
    }
}

tryPassword(123445);

















// result from chatgpt 4o-mini
// function tryPassword(password) {
//     console.log('run?');
//     password = password.toString(); // Convert password to string
//     for (let i = 0; i <= password.length; i++) {
//         let result = checkPassword(i, password);
//         console.log(result); // Output the result of each check
//     }
// }

// function checkPassword(i, password) {
//     if (i === parseInt(password)) { // Compare i with the numeric value of the password
//         return `Password has Cracked !! : "${i}" is the password`;
//     } else {
//         return `Cracking password... ${i}`;
//     }
// }

// tryPassword(123445);
