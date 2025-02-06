// console.log("Hii")

// alert("Hii")

// document.writeln("hiiiii")

// Que 1


// Que 2

// -------Static
// let a = 5
// let b = 10
// let c = a + b
// document.writeln(c)

// ------ Dynamic

// let a = parseInt(prompt("enter value of a"))
// let b = parseInt(prompt("Enter value of b"))
// let c = a + b
// document.writeln(c)



//  Que-3 Sqe root of number

// let a = 8
// let sqr1 = a * a
// document.writeln("Sqr root of a is " + sqr1)
// let b = parseInt(prompt("enter value of b "))
// let s5qr2 = b * b
// document.writeln("Sqr root of b is " + sqr2)

// Que-4 Area of traingle

// 2
// using heron's formula

// let a = parseInt(prompt("Enter value of a : "))
// let bb = parseInt(prompt("Enter value of b : "))
// let c = parseInt(prompt("Enter value of c : "))
// let s = (a + bb + c) / 2

// document.write("s is :" + s)

// let temp = s * (s - a) * (s - b) * (s - c)
// let area = Math.sqrt(temp)
// document.write("a is: " + area)



// Que 5 Swa[ two number

// using temp variable
// let a = parseInt(prompt("Enter value of a"))
// let b = parseInt(prompt("Enter value of b"))


// let c = b
// b = a
// a = c
// document.writeln("value of a is :" + a + " value of b is :" + b)

// without using temp variable

// let a = parseInt(prompt("Enter value of a "))
// let b = parseInt(prompt("Enter value of b "))
// a = a + b
// b = a - b
// a = a - b

// document.writeln("value of a is :" + a + " value of b is :" + b)




// Que 6 kilometers to miles

// let km = parseInt(prompt("Enter value in kms "))
// const factor = 0.621371
// let miles = km * factor
// document.writeln("kilomters in miles is: " + miles)


// function convert() {
//     const kms = document.querySelector("#km").value
//     console.log(kms);
//     const factor = 0.621371
//     let miles = kms * factor
//     const answer = document.querySelector("#answer")
//     answer.innerHTML = `${miles} miles`


// }

// Que 7 ======= celsius to fahrenheit


// let celsius = parseFloat(prompt("Enter celsius :"))
// let faherenheit = celsius * 1.8 / 32
// document.writeln("answer in faherheit :" + faherenheit)

// function convert() {
//     const data = document.querySelector("#data").value
//     // console.log(kms);
//     // const factor = 0.621371
//     let faherenheit = (data * 1.8) + 32
//     // const answer = document.querySelector("#answer")
//     // answer.innerHTML = `${miles} miles`

//     document.querySelector("#answer").innerHTML = `${faherenheit} faherenheit`


// }


// Que 8 check if +ve -ve or 0


// function convert() {
//     const data = document.querySelector("#data").value
//     // console.log(kms);
//     // const factor = 0.621371
//     // let faherenheit = (data * 1.8) + 32
//     // const answer = document.querySelector("#answer")
//     // answer.innerHTML = `${miles} miles`
//     // let res = Math.sign(data)


//     if (data >= 0) {
//         res = `${data} is Positive Number`
//     } else if (data == 0) {
//         res = `${data} is Zero `

//     } else if (data < 0) {
//         res = `${data} is Negative Number`

//     }
//     else {
//         res = `${data} is not a Number`

//     }
//     document.querySelector("#answer").innerHTML = `${res} `


// }


// que 9 generate random  number


// function convert() {
//     let n = Math.floor(Math.random() * (100 - 1) + 1)

//     document.querySelector("#answer").innerHTML = n
// }


// ----Que 10 odd or even

// function convert() {
//     const data = document.querySelector('#data').value
//     let res = data % 2 == 0 ? "even" : "odd"
//     // if (data % 2 == 0) {
//     //     res = `${data} is even`
//     // } else if (data % 2 != 0) {
//     //     res = `${data} is odd`
//     // } else {
//     //     res = `${data} is nan`
//     // }

//     document.querySelector("#answer").innerHTML = res
// }


// === Que 11 prime number


// function convert() {
// const data = document.querySelector('#data').value
// let res = data % 2 == 0 ? "even" : "odd"
// let res
// if (data % 2 == 0) {
//     res = `${data} is even`
// } else if (data % 2 != 0) {
//     res = `${data} is odd`
// } else {
//     res = `${data} is nan`
// }
//     if (data === 1) {
//         res = `${data} is neither prime nor composite`
//     }
//     else if (data < 1) {
//         res = `${data} is not prime `
//     }
//     else {
//         for (let i = 2; i < data; i++) {
//             if (data % i == 0) {
//                 res = `${data} is not prime `
//                 break
//             }
//             else {
//                 res = `${data} is  prime `

//             }

//         }

//     }

//     document.querySelector("#answer").innerHTML = res
// }


// Que 12 Largest among 3 numbers

// function convert() {
//     let a = parseInt(prompt("Enter number a"))
//     let b = parseInt(prompt("Enter number b"))
//     let c = parseInt(prompt("Enter number c"))
//     let res
//     if (a >= b && a >= c) {
//         res = `${a} is greater which is a`

//     } else if (b >= a && b >= c) {
//         res = `${b} is greater which is b`

//     }
//     else if (c >= a && c >= b) {
//         res = `${c} is greater which is c`

//     }
//     else {
//         res = `Enter valid number `

//     }
//     document.querySelector("#answer").innerHTML = res
// }

// Que 13 factorial\

// function convert() {
//     const data = document.querySelector("#data").value
//     let res = 1
//     // let sum = 0
//     if (data == 0) {
//         res = "factorial of 0 is 0 "
//         document.querySelector("#answer").innerHTML = res
//         return
//     }
//     else if (data < 0) {
//         res = "there is no factorial for -ve number "
//         document.querySelector("#answer").innerHTML = res
//         return
//     }
//     for (let i = 1; i <= data; i++) {
//         res = res * i
//     }
//     document.querySelector("#answer").innerHTML = `factorial of ${data} is ${res}`
// }

// que 14 print table


// function convert() {
//     const data = document.querySelector("#data").value
//     let res
//     for (let i = 1; i <= 10; i++) {
//         res = `${data} X ${i} = ${data * i} `
//         console.log(res);

//     }
//     // document.querySelector("#answer").innerHTML = `${data} X ${i} = ${data * i} `
//     document.querySelector("#answer").innerHTML = `${res} `


// }



// Que 15 Armstrong


// function convert() {
//     const data = document.querySelector("#data").value
//     let res
//     let temp = data
//     let sum = 0
//     if (data == 0 || data < 0) {
//         res = ` there is no armstrong number for ${data}`
//     } else {

//         while (temp > 0) {
//             let moretemp = temp % 10
//             sum += (moretemp ** 3)
//             temp = parseInt(temp / 10)
//         }
//         console.log(data);
//         console.log(sum);
//         if (sum == data) {
//             res = `${data} is an Armstrong number`
//         }
//         else {
//             res = `${data} is not an Armstrong number`

//         }

//     }

//     // document.querySelector("#answer").innerHTML = `${data} X ${i} = ${data * i} `
//     document.querySelector("#answer").innerHTML = `${res} `


// }


// QUe 16 remainder


// function convert() {
//     const data = document.querySelector("#data").value

//     let a = parseInt(prompt("ENter value "))
//     let b = parseInt(prompt("ENter value "))
//     let c = parseInt(prompt("ENter value "))

//     let res1 = a % 10
//     let res2 = b % 10
//     let res3 = c % 10

//     if (res1 == res2 && res1 == res3) {
//         document.querySelector("#answer").innerHTML = `last digit is ${res1} which is same for all `

//     } else {
//         document.querySelector("#answer").innerHTML = `last digit is ${res1} which is not same for all `
//     }

// }


// Que 17 check palindrome


// function convert() {
//     const data = document.querySelector('#data').value
//     let temp = data.split('')
//     // console.log(temp);
//     let strArrRev = temp.reverse()
//     // console.log(strRev);
//     let strRev = strArrRev.join('')
//     console.log(data);
//     if (strRev == "") {
//         document.querySelector("#answer").innerHTML = "Enter value"

//     }
//     else if (strRev == data) {
//         document.querySelector("#answer").innerHTML = "Palindrome"
//     } else {
//         document.querySelector("#answer").innerHTML = "not Palindrome"

//     }
// for (let i = 0; i < temp)
// }


// function convert() {
//     // const data = document.querySelector('#data').value

//     let data = prompt("Enter String")
//     let len = data.length
//     let msg = "it is a palindrome string"
//     for (let i = 0; i < len / 2; i++) {
//         if (data[i] != data[len - 1 - i]) {
//             msg = "not palindrome"
//         }
//     }
//     document.querySelector("#answer").innerHTML = `${msg}`
// }



// Que 18 -- check number of occurrneces of a character in a string using for loop

// function convert() {
//     let str = prompt("Please enter a string")
//     let letter = prompt("Please enter a letter")
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (letter == str[i]) {
//             count++
//         }
//     }
//     console.log(count);
// }


// que 19  check whether a string starts and ends woth certain characters

let str = prompt("Please enter a string")
console.log(str);
let teststart = str.startsWith("W")
let testend = str.endsWith("e")
console.log(`Start ${teststart}`);
console.log(`end ${testend}`);
if (teststart == true && testend == true) {
    console.log(`${str}starts with W and ends with e`);
}
else if (teststart == true && testend == false) {
    console.log(`${str}starts with W `);

}
else if (teststart == false && testend == true) {
    console.log(`${str}ends with e`);

}
else {
    console.log(`${str} not start with W and ends with e`);

}

