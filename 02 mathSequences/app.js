// Aritmetic, Geometric or No pattern
// no negative numbers




function matSequences(arr) {
    //Case 1: aritmetic - each next number is equal to previous number + arr[0]
    //Case 2: geometric - each next number is equal to previous number multiplied by arr[0] 
    //Case 3: neighter case 1 or case 2 

    let arith = new Set()
    let geo = new Set()

    for(let i = 1; i<arr.length; i++){
        let num1 = arr[i] - arr[i-1]
        arith.add(num1)

        let num2 = arr[i] / arr[i-1]
        geo.add(num2)
    }

    console.log(arith)
    console.log(geo)

    if(arith.size === 1) { return "Aritmetic"}
    if(geo.size === 1) {return "Geometric"}
    if(arith.size !==1 && geo.size !== 1) {return "No pattern"}

    //return result
}



console.log(matSequences([2,4,6,8]));
// Aritmetic
console.log(matSequences([3, 9, 27]))
// Geometric
console.log(matSequences([2, 5, 14, 89]))
// no pattern