function add(a, b) {
   return a + b
  }
  

  function isEven() {
    if(sum % 2 ===0){
        return true
    }
    else{
        return false
    }
  }

  function greet(personName) {
    let hello = alert(`Hello ${personName}`)
    return hello
  }
  
  function isAnAdult(personAge) {
    if(personAge >= 18){
        return true
    }
    else{
        return false
    }
  }
  
  let yearsLeft = ``

  function yearsToAdulthood(personAge) {
    yearsLeft = 18 - personAge
    return yearsLeft
  }
  

  let personName = prompt(`What is your name?`)
  let personAge = Number(prompt(`Enter your age:`))
  const person = {name: personName, age: personAge}

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


  
  
