"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isbnTag = void 0;
const isbnTag = (isbn) => {
    if (isbn.length != 10) { // if length is not 10, ISBN is invalid & returns false
        console.log(isbn);
        return false;
    }
    else { // if length is 10
        let sum = 0; // initialize the sum
        for (let i = 0; i < isbn.length - 1; i++) { // loop from the 1st to 9th digit
            let num = parseInt(isbn[i]) * (i + 1); // parse each element and multiply by (i + 1)
            sum += num; // compute the sum of the first 9 digits
        }
        if (isbn.charAt(isbn.length - 1) === "X") { // check if the last digit is X
            sum += 100; // add 10 * 10 = 100 to the sum
        }
        else {
            sum += parseInt(isbn.charAt(isbn.length - 1)) * (isbn.length);
        }
        console.log(isbn); // print the ISBN tag 
        if (sum % 11 == 0) { // check if the sum is divisible by 11
            return true;
        }
        else {
            return false;
        }
    }
};
exports.isbnTag = isbnTag;
console.log((0, exports.isbnTag)("1112223339")); // this is a valid ISBN
console.log((0, exports.isbnTag)("123456789X")); // this is a valid ISBN
console.log((0, exports.isbnTag)("0111111111")); // this is an invalid ISBN
console.log((0, exports.isbnTag)("X123456789")); // this is an invalid ISBN
