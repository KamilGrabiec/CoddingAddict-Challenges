function longestWords(text) {
    let result = ""
    let index = 0
    let words = text.split(" ")
    for(let i = 1; i<words.length; i++){
        if(words[index].length = words[i].length){
            result = result + ', ' + words[i]
        }
        if(words[index].length < words[i].length){
            index = i
            result = words[i]
        }

    }
    return result

}



 console.log(longestWords("I woke up early today"));
// console.log(longestWords("I went straight to the beach"));
