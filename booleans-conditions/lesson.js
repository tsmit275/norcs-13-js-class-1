console.log("hello from boolean lesson.js")


let isFlightBooked = true
console.log("isFlightBooked", isFlightBooked)

let flightKansas = {
    seatsAvailable: ["26A", "26D", "24B"],
    firstClass: false,
    snacks: ["Ranch doritoes", "apple juice", 'peanuts'],
    announcenments: [
        "Welcome to flight 8912 from Houston to Kansas",
        "Let's get everyone seated so we can prepare for takeoff"
    ],
    durationInMinutes: 260,
    flightNumber: "United-8912",
    destination: "Kansas"
}

let flightDenver = {
    seatsAvailable: ["26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C"],
    row: "26",
    firstClass: false,
    snacks: ["Hot cheetos", "Hot chocolate", 'Cold coffee'],
    announcenments: [
        "Welcome to flight 2445 from Houston to Denver",
        "Let's get everyone seated so we can prepare for takeoff"
    ],
    durationInMinutes: 260,
    flightNumber: "Delta-2445",
    destination: 'denver'
}

//How many seats are available on flight 8912
console.log("kansas",flightKansas.seatsAvailable.length)
//displaying in the page
//are the seats available greater than 20?
console.log("Is greater than 20", flightKansas.seatsAvailable.length > 20)
//are the seats available greater than 0
console.log("Any seats available", flightKansas.seatsAvailable.length > 0)

//How many seats are available on flight 2445
console.log("denver more than 20", flightDenver.seatsAvailable.length > 20)


let ticketZachary = {
    name: "Zachary Fountain",
    seat: "26A",
    rewardsProgram: "FirstClass",
    flight: "United-8912",
    destination: "Kansas"
}

let ticketJohn = {
    name: "John Vieth",
    seat: "26A",
    rewardsProgram: "FirstClass",
    flight: "Delta-2445",
    destination: "Houston"
}

//simple boolean expression of strings
console.log("is this right destination", flightKansas.destination === ticketZachary.destination)
console.log("is this right destination", flightKansas.destination === ticketJohn.destination)


//compare flights probably a stronger guarantee of correct
console.log("is this right destination", flightKansas.flightNumber === ticketZachary.flight)
console.log("is this right destination", flightKansas.flightNumber === ticketJohn.flight)
//data might not exist
console.log(flightKansas.flight)

//is 26B available on flight to denver?
//Book that seat
//is it still available?


//example of weird comparisons
let userName = "vader"

let villain = "Vader"
console.log('"vader" === "Vader"',"vader" === "Vader")

console.log('userName === villain',userName.toLowerCase() === villain.toLowerCase())
console.log('"2" == 2',"2" == 2)

let flightNumber = "2455"
let flightNumberTicket = 2455

console.log('flight vs ticket', flightNumber === flightNumberTicket)


//Practice we - do

let groceries = ['spagetti', 'apples','dog food']

//tell me what each will output
console.log("groceries.length === 3",groceries.length === 3)
console.log("groceries[1] === 'oranges'",groceries[1] === 'oranges')
console.log("groceries[3] === 'dog food'",groceries[3] === 'dog food')
console.log(groceries[3])


// let flightKansas = {
//     seatsAvailable: ["26A", "26D", "24B"],
//     firstClass: false,
//     snacks: ["Ranch doritoes", "apple juice", 'peanuts'],
//     announcenments: [
//         "Welcome to flight 8912 from Houston to Kansas",
//         "Let's get everyone seated so we can prepare for takeoff"
//     ],
//     durationInMinutes: 260,
//     flightNumber: "United-8912",
//     destination: "Kansas"
// }

// let flightDenver = {
//     seatsAvailable: ["26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C","26B", "21F", "24C"],
//     row: "26",
//     firstClass: false,
//     snacks: ["Hot cheetos", "Hot chocolate", 'Cold coffee'],
//     announcenments: [
//         "Welcome to flight 2445 from Houston to Denver",
//         "Let's get everyone seated so we can prepare for takeoff"
//     ],
//     durationInMinutes: 260,
//     flightNumber: "Delta-2445",
//     destination: 'denver'
// }

//is dog food in my groceries list?
// this is correct but tedious
groceries[0] === 'dog food'
groceries[1] === 'dog food'
groceries[2] === 'dog food'

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
console.log("has dog food", groceries.includes('dog food'))

//Help me find if there is apple juice on kansas
//check snacks section for apple juice
console.log("has apple juice", flightKansas.snacks.includes("apple juice"))

// help me find if there is hot chocolate on denver
console.log("has apple juice", flightDenver.snacks.includes("apple juice"))

//if statements


let userAge = prompt("Tell me your age")
console.log("userAge",userAge)

//if this evaulates to true, do what is in curly brackets
if (userAge >= 25){
    //showing a prompt to user
    let userAnswer = prompt("What color car are you looking for?")
    console.log("my answer", userAnswer)
}
//they cannot rent a car
else {
    let userAnswer = prompt("SHould we order you an uber?")
    console.log("order uber?", userAnswer)
}

let favoriteCar = prompt("Favorite car?")
console.log("favCar", favoriteCar)
if (favoriteCar === 'chevy'){
    console.log("pick a chevy model")
}
else if (favoriteCar === 'tesla'){
    console.log("no available evs")
}
else {
    console.log("we don't have that car availabe")
}