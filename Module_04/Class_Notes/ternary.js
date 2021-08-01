//What is ternary?

//An easier, more compact and concise way of writing an if else statement 

//Basic if/else statement

const number = Math.floor(Math.random() * 100)
let pass 

if (number > 65) {
    pass = true
} else {
    pass = false 
}

console.log(pass) 

// lets use a ternary statement instead of an if statement 
//condition? truthy value : falsey Value

pass = number > 65 ? true : false