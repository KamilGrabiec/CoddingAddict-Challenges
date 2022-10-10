// return true only if all values are unique, otherwise false
//using Array, Object, string method lastIndexOf()
//no Set Data Structure



function isUnique(str1) {
    for(let i = 0; i< str1.length; i++) {
        if(i != str1.lastIndexOf(str1.charAt(i))){
            return false
        }
    }
    return true
}


console.log(isUnique("abcde"))
console.log(isUnique("abacdefb"))