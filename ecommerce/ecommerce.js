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


//used arrow functions and promise because nested codes and callbacks are terrible to read and maintain..wouldnt want to stress you😉
const question1 = () => {
  return new Promise((resolve, reject) => {
    //here the 2parameters are 1) a string usually in form of a question or anything  that will prompt the user to put an input
  //2) a callback function with the value of the input of the user as the parameter
    rl.question('q1 What is your name?', (answer) => {
      //here we added the value of the input to the user inputs
        userName = answer;
      console.log(`Thank you for your valuable feedback: ${userName}`)
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('q2 What is your email? ', (answer) => {
        userEmail = answer;
      console.log(`Thank you for your valuable feedback: ${userEmail}`)
      resolve()
    })
  })
}

const main = async () => {
  //here we call the functions...that is questions
  await question1()
  await question2()

  //here i made a cool welcome text and a cool tiger😼 to welcome users hopefully this makes the user smile 
  console.log(
    '\n' +
    'Hi there, Welcome to Puma Ecommerce! Thanks for your patronage.\n' +
    'Puma Ecomerce is the first ever ecommerce app to run on terminal,\n' +

    'Built and founded by Onwuka Rosario,                    ("\`-’-/").___..--’’"\`-._\n' +
    'Enjoy yourself!                                          \`6_ 6  )   \`-.  (     ).\`-.__.‘)\n' +
    '                                                         (_Y_.)’  ._   )  \`._ \`. \`\`-..-’\n' +
    'https://riomax.netlify.app/                            _..\`--’_..-_/  /--’_.’ ,’\n' +
    '                                                      (il),-’‘  (li),’  ((!.-‘\n' +
    'I’d love to hear what you think!\n' +
    '\n' +
    '— Rio\n'
  );
  
  //here i display the user data in a more elegant way using console.table , i gave the users a default balance to buy stuff they want .
  console.log("Here is your data")
  let userDetails = {Username:userName , Email:userEmail, Balance: 1000000000000000000000}
  console.table(userDetails)
  //here i display the list of things in the app for the user to buy..not quite much tho😅
  let listItems = {Spoon:20, Laptop: 500000, Table: 1000, House: 10000000, Glasses:100, Babe:20000000, Car:200000, Phone:200};
  console.log("Here are the items on list today")
  console.table(listItems)

  
  rl.close()


  /////////BUYING THINGS///////////////////


}

main()
