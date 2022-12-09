//to get inputs from users from the terminal in javascript..we use the readline package
//i will initalize the readline package below
const readline = require('readline')

//next we create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
//i initialized empty user inputs ..will add values to them soon
let userName ="";
let userEmail ="";

var userOne={
    email: userEmail,
    namer: userName,
    login(){
        return new Promise((resolve, reject) => {
            // for a readline the 2parameters are 1) a string usually in form of a question or anything  that will prompt the user to put an input
          //2) a callback function with the value of the input of the user as the parameter
            rl.question('What is your name?', (answer) => {
              //here we added the value of the input to the user inputs
                userName = answer;
              console.log(`Thank you for your valuable feedback: ${userName}`)
              resolve()
              r1.close()
            })
          })
    }

};

const {email,namer}=userOne;
console.log(namer)
console.log(userOne.login())

    