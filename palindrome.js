const readline = require('readline')

const isPalindrome = (word) => {
    const origWord = [...word].map((letter) => letter.toLowerCase());
    const revWord = [...origWord].reverse();
    // iterate through both wordsa
    for (let i = 0; i < word.length; i++) {
        if (origWord[i] !== revWord[i]) {
            return "is not a palindrome"
        }
    }

    return "is a palindrome"
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Please enter a string: ', (word) => {
    console.log(word, isPalindrome(word))
    rl.close()
})

