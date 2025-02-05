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

function convert() {
    let a = parseInt(prompt("Enter number a"))
    let b = parseInt(prompt("Enter number b"))
    let c = parseInt(prompt("Enter number c"))
    let res
    if (a >= b && a >= c) {
        res = `${a} is greater which is a`

    } else if (b >= a && b >= c) {
        res = `${b} is greater which is b`

    }
    else if (c >= a && c >= b) {
        res = `${c} is greater which is c`

    }
    else {
        res = `Enter valid number `

    }
    document.querySelector("#answer").innerHTML = res
}