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


//Here i initialize user details
//here i initialize the items that will be displayed and can be bought in the shop in an object with an item and the cost of that item
let listItems = {spoon:20, laptop: 5000, table: 1000, house: 1000, glasses:100, babe:200, car:20000, phone:200};

//here i initalized an array that stores the items bought by the user
let boughtItems=[]


//used arrow functions and promise because nested codes and callbacks are terrible to read and maintain..wouldnt want to stress you😉

//notice the settimeout functions? its to slow down the app so it wont 
//display a lotta junk at once...its a ui display feature 🙃
const question1 = () => {
  return new Promise((resolve, reject) => {
    // for a readline the 2parameters are 1) a string usually in form of a question or anything  that will prompt the user to put an input
  //2) a callback function with the value of the input of the user as the parameter
    rl.question('What is your name?', (answer) => {
      //here we added the value of the input to the user inputs
        userName = answer;
      console.log(`Thank you for your valuable feedback: ${userName}`)
      resolve()
    })
  })
}

//same process as question 1
const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('What is your email? ', (answer) => {
        userEmail = answer;
      console.log(`Thank you for your valuable feedback: ${userEmail}`)
      resolve()
    })
  })
}


const main = async () => {
  
   //here i made a cool welcome text and a cool puma😼 to welcome users hopefully this makes the user smile 
   console.log(
    '\n' +
    'Hi there , Welcome to Puma Ecommerce! Thanks for your patronage.\n' +
    'Puma Ecomerce is the first ever ecommerce app to run on terminal,\n' +
    '\n' +
    'Built and founded by Onwuka Rosario,                    ("\`-’-/").___..--’’"\`-._\n' +
    'Enjoy yourself!                                          \`6_ 6  )   \`-.  (     ).\`-.__.‘)\n' +
    '                                                         (_Y_.)’  ._   )  \`._ \`. \`\`-..-’\n' +
    'https://riomax.netlify.app/                            _..\`--’_..-_/  /--’_.’ ,’\n' +
    '                                                      (il),-’‘  (li),’  ((!.-‘\n' +
    'I’d love to hear what you think!\n' +
    '\n' +
    '— Rio\n'+
    '\n'+
    'Please sign up and enjoy!\n'
  );
  
  await question1()
  await question2()

 
 
 
  



   /////////BUYING THINGS///////////////////



   let balance = 10000000000;//this is the balance we will be working with for buying stuff
   const question3 = () => {
     
       //made a condition here for the while loop
       
        
       
       //here i display the list of things in the app for the user to buy..not quite much tho😅
       console.log("Here are the items on list today")
       console.table(listItems)
       
         //here i ask the user if he wishes to leave the program, or proceed with it
         //my program is case sensitive , so i specified how users will type an item they need else 
         //else the code wont run, type any item just make sure its in the list and with the same
         //case example, babe , spoon etc...
         rl.question('What would you like to buy?\nIf you wish to leave the program, type "end program"\nPlease type in words what youd like to buy eg spoon ', (answer) => {
          
          //here i create code that should run depending on what the user inputs
          
          //this should run if the user inserts end program
          //it shows the user a message telling them they have exited the program and immediately 
          //the program ends
           if(answer == "end program"){
              console.log("You have successfully exited the program\nHope you enjoyed :)")
            return;
           }
           else{
            console.log("processing.................")
                         //showing the user the price of what he picked
                         
          setTimeout(() => {
            console.log("price of what you bought",listItems[answer])
          }, 2000);
           //removing the value of what the user bought from the balance
           balance = balance - listItems[answer];
           setTimeout(() => {
            console.log("current Balance : ",balance)
           }, 4000);
           boughtItems.push(answer);
             
         setTimeout(() => {
          console.log(`Thank you ${userName} for purchasing ${answer}, it has been added to your loot ;)`)
          console.log("You now have")
          console.table(boughtItems)
          console.log("Going Back to Home page......")
         }, 6000);

           setTimeout(() => {
            question3()
           }, 10000);
           //this is the function and yes i am calling it again its called recursion , for some 
           //reason loops dont really work with readline..weird right? anyways i still got the 
           //job done😎 Calling this function will make the program start over and over when a user 
           //is done buying items , only if the user doesnt end the program of course
           }
         })
       
     
   }
  
    //here i display the user data in a more elegant way using console.table , i gave the users a default balance to buy stuff they want .
   console.log("Here is your data")
   let userDetails = {Username:userName , Email:userEmail, Balance: balance}
       console.table(userDetails)
  //calling the function
   question3()
  

}

main()
