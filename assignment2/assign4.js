
let isPalindromeString = "gfg"  // "gfg", "lol"

function checkPalindromeString(str){

if (str === str.split("").reverse().join("")) return true

return false
}

console.log(checkPalindromeString(isPalindromeString))//true