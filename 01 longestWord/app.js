

function longestWord(text) {
    let words = text.split(" ")
    let index = 0
    for(let i=0; i< words.length; i++){
        if(words[index].length < words[i].length) {
            index = i
        }
    }
    return words[index];
}

function longestWord2(text) {
    let words = text.split(" ")
    let longesWord = ""

    for (let word of words) {
        if(word.length>longesWord.length){
            longesWord = word
        }
    }
    return longesWord
}




console.log(longestWord("I woke up early today"));
console.log(longestWord("I went straight to the beach"));

console.log(longestWord2("I woke up early today"));
console.log(longestWord2("I went straight to the beach"));