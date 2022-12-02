let balance = 10000000000;//this is the balance we will be working with for buying stuff
const question3 = () => {
  
    //made a condition here for the while loop
    condition =false
    
      console.log("Here is your data")
      let userDetails = {Username:userName , Email:userEmail, Balance: balance}
      console.table(userDetails)
      //here i display the list of things in the app for the user to buy..not quite much tho😅
      console.log("Here are the items on list today")
      console.table(listItems)
      rl.question('What would you like to buy?\nPlease type in words what youd like to buy eg Spoon ', (answer) => {

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
      })
    
  
}
question3()