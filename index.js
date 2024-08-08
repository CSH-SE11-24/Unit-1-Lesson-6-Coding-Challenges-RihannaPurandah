// MILD
// Create an array called truths and store 3 true facts about yourself
let truths = ["I have 6 siblings","Im 5'7", "Im Carribbean"]

// console log the 1st element (element is not same as index!)
console.log(truths[0])

// change the value of the last element
truths[2] = "I have a niece and nephew"

// console log the last element to check that it's changed
console.log(truths)

// MEDIUM
// Create a second array calles lies and store 3 fake facts about yourself
let lies = ["I am a mother","I don't have a best friend","I have a personal laptop"]

// delete a value from the lies array
lies.pop()

// console log the second list to confirm the value is gone
console.log(lies)

// add a new lie to the lies array
lies.push("I don't have a new sister")

// SPICY
// pick the truths or lies array and console log the 1st element
console.log("The truth is", truths[1], "and the lie is", lies[0])

// prompt the user to guess if it was true or false
let question = prompt("Which one is the lie")

// stretch: how could you check they are right or wrong?
if(lies = truths){
  console.log("Sorry buddy but your wrong")
}else{
  console.log("Your Correct!!!!")
}