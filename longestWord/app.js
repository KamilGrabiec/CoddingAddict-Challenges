

function longestWord(text) {
    let words = text.split(" ")
    console.log(words.length)
    let index = 0
    for(let i=0; i< words.length; i++){
        if(words[0].length < words[i].length) {
            index = i
        }
    }
    return words[index];
}


console.log(longestWord("I woke up early today"));
console.log(longestWord("I went straight to the beach"));