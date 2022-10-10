

function checkArraySum(arr) {

    arr.sort((a,b) => a-b)
    let sum = 0
    for(let i = 0; i<arr.length-1;i++){
        sum = sum + arr[i]
    }
    return (sum === arr[arr.length-1])? "true" : "false"
}



console.log(checkArraySum([1,2,4,6,13]))
console.log(checkArraySum([1,2,4,34,22]))