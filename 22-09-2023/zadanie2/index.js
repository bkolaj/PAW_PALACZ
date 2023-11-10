const prompt = require("prompt-sync")({ sigint: true });

const abs = () => {
    let a = prompt("Enter a")
 
    return Math.abs(a);  
}

const cos = () => {
    let a = prompt("Enter a: ")
 
    return Math.cos(a);  
}


const round = () => {
    let a = prompt("Enter a: ")
 
    return Math.cos(a);  
}

const age = prompt("1. ABS 2. Cosinus 3. Round")
switch(age){
    case '1':
        console.log(`Result of abs: ${abs()}`)
        break
    case '2':
        console.log(`Result of abs: ${cos()}`)
        break
    case '3':
        console.log(`Round nr: ${round()}`)
        break
    default:
        console.log("invalid operation")
        break
}

