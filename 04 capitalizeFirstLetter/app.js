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







console.log(capitalizeFirstLetter("I got up early today"))