// function fullName(firstName, lastName){

// return `${firstName} ${lastName}`
// }

// console.log(fullName)
// //
// function addNumbers(num1, num2){

//     let sum = num1+num2
//     return sum
// }

// console.log(addNumbers(3, 4))


// //

function area(r){
    return Math.PI*r*r
}
console.log(area(4))

function convertTemp(cels){
    return (cels*9/5)+32

}
console.log(convertTemp(5))


function print(arr){
    for (let i=arr.length-1; i>=0; i--){
    return arr
}
}
const numbers=[1,2,3,4]
console.log(print(numbers))

//

const changeToUpper =(arr)=>{
    const newArr=[]
    for (const element of arr){
        newArr.push(element.toUpperCase())
    }
    return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpper(countries))