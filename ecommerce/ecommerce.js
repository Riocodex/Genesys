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
let userNum ="";

//Here i initialize user details
//here i initialize the items that will be displayed and can be bought in the shop
let listItems = {spoon:20, laptop: 5000, table: 1000, house: 1000, glasses:100, babe:200, car:20000, phone:200};

//here i initalized an array that stores the items bought by the user
let boughtItems=[]


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

let balance = 10000000000;//this is the balance we will be working with for buying stuff


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
 
  // await question3()



   /////////BUYING THINGS///////////////////



   let balance = 10000000000;//this is the balance we will be working with for buying stuff
   const question3 = () => {
     
       //made a condition here for the while loop
       
       
         
         rl.question('What would you like to buy?\nIf you wish to leave the program, type "escape program"\nPlease type in words what youd like to buy eg Spoon ', (answer) => {
          
          
          
           if(answer != "end program"){
             //showing the user the price of what he picked
           console.log("price of what you bought",listItems[answer])
           //removing the value of what the user bought from the balance
           balance = balance - listItems[answer];
           console.log("current Balance : ",balance)
           boughtItems.push(answer);
             
           console.log(`Thank you ${userName} for purchasing ${answer}, it has been added to your loot😉`)
           console.log("You now have")
           console.table(boughtItems)
            question3()
           }
           else{
            return "Successfully left the program see you soon.... :)"
           }
         })
       
     
   }
   question3()
  

}

main()
