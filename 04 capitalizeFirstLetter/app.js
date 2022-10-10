let str1 = "I got up early today"

function capitalizeFirstLetter(text){

    let result = ""    
    let arr = str1.split(" ")
    for(let word of arr){
        let capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1)
        result = result + ' ' + capitalizeWord
    }
    
    return result.trim()
}

function capitalizeFirstLetter2(text) {
    let words = text.split(" ").map(word => {
        return word.charAt(0).toUpperCase() +  word.slice(1)
    })

    return words.join(" ")
}





console.log(capitalizeFirstLetter("I got up early today"))
console.log(capitalizeFirstLetter2("I walked straight to the beach"))