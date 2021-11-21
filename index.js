/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a, b) {
   return a + b
  }
  
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven() {
    if(sum % 2 ===0){
        return true
    }
    else{
        return false
    }
  }
  
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(personName) {
    let hello = alert(`Hello ${personName}`)
    return hello
  }
  
  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(personAge) {
    if(personAge >= 18){
        return true
    }
    else{
        return false
    }
  }
  
  let yearsLeft = ``
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function yearsToAdulthood(personAge) {
    yearsLeft = 18 - personAge
    return yearsLeft
  }
  

  let personName = prompt(`What is your name?`)
  let personAge = Number(prompt(`Enter your age:`))
  const person = {name: personName, age: personAge}
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit(person) {
    if(isAnAdult(person.age)){
      return greet(personName)
    }
    else{
       let comeBack = alert(`${personName}, please come back in ${yearsToAdulthood(personAge)} years.`)
       return comeBack
    }
    
  }

  admit(person)


  
  
