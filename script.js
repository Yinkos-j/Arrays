
// printReverse()
function printReverse(names){
    console.log(names.reverse());
}
printReverse([1,2,3,4])
printReverse(["a","b","c"])
function isUniform(letter){
 
}
// is Uniform
//didnt get it
// function isUniform(numbers){
//     for (let i = 0; i < numbers.length; i++) {
//          if(numbers[i] > 1){ 
//             console.log("true");
//         }
//        else if (numbers[i] === 0) {
//             console.log("False");
//         }
//     }
// }
// isUniform([1,1,1,1])
// isUniform([2,1,1,1])
// isUniform(["a","b","p"])
// isUniform(["b","b","b"])
// Sum Array()
function sumArray(num){
    console.log(
        num.reduce((a, b) => a + b, 0)
      )
}
sumArray([1,2,3])
sumArray([10,3,10,4])
sumArray([-5,100,])

// max()
function max(numArray) {
    console.log(Math.max.apply(null, numArray)); 
  }
max([1,2,3])  
max([10,3,10,4]) 
max([-5,100]) 
// Contains
function contains(a,b){
 console.log(a.includes(b)); 
}
contains([10,15,20],15)
contains(["hello","bye"],"bye")
contains([10,15,20],11)
// reverse()
//Didnt get it