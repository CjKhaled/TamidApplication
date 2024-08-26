const findLongestWord = (arr) => {
    let max = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i];
        }
    }

    return max;
}

const boxedStrings = (arr) => {
    const boxLength = findLongestWord(arr).length + 2 + 2; // account for extra 2 spaces, and 2 stars
    console.log("*".repeat(boxLength));
    for (let i = 0; i < arr.length; i++) {
        const lengthOfWord = arr[i].length
        const line = "* " + arr[i] + (" ".repeat(boxLength - 2 - 2 - lengthOfWord)) + " *" // account for extra spaces between last word and last star
        console.log(line)
    }
    console.log("*".repeat(boxLength));
}

boxedStrings(["TAMID", "IS", "THE", "COOLESTTTTTT"])