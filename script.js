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

let a = parseInt(prompt("Enter value of a "))
let b = parseInt(prompt("Enter value of b "))
a = a + b
b = a - b
a = a - b

document.writeln("value of a is :" + a + " value of b is :" + b)


