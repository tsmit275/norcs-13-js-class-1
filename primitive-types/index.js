console.log("Hello from index.js")

//primitives

//
let userName = "Thomas"
let currentCity = "North Carolina"
console.log("Hello", userName)
console.log("Welcome to", currentCity)
let userAge = 19 //can you rent a car
let preferrredAirline = "United"

//boolean true / false on /off
let canUserRentACar = userAge >= 25
//helpful to know what var i'm printing
console.log("canUserRentACar", canUserRentACar)

//Arrays
let destinations = [
    "Denver",
    "San Francisco",
    "Chicago",
    "Miami",
    "Yelowstone",
    "hawaii"
]
console.log("destinations", destinations)

let cars = [
    "Ford F-150",
    "Honda",
    "mustang",
    "Lexus"
]
//log informational
console.log("cars", cars)

//log warning danger
//can't display username
console.warn("warning danger pay attention")

//report bug
console.error("You broke the app")


//Array methods
//add Bali to list of destinations
destinations.push("Bali")
//see that destinations now has more spots
console.log("destinations",destinations)
console.log("How many destinations", destinations.length)

//remove Bali all tickets sold
destinations.pop()
console.log("destinations",destinations)

console.log("How many destinations", destinations.length)

console.log("get the destination at position 4", destinations[4])


//Objects
let flightKansas = {
    row: "26",
    firstClass: false,
    snacks: ["Ranch doritoes", "apple juice", 'peanuts'],
    announcenments: [
        "Welcome to flight 8912 from Houston to Kansas",
        "Let's get everyone seated so we can prepare for takeoff"
    ],
    durationInMinutes: 260
}

console.log("kansas",flightKansas)

//access part of the data
console.log(flightKansas.snacks)
//changed the destination
flightKansas.destination = "Kansas"
console.log(flightKansas)

console.log("longer than hour", flightKansas.durationInMinutes > 60)

console.log("get the snacks at position 1", flightKansas.snacks[1])


let flightDenver = {
    row: "26",
    firstClass: false,
    snacks: ["Hot cheetos", "Hot chocolate", 'Cold coffee'],
    announcenments: [
        "Welcome to flight 2445 from Houston to Denver",
        "Let's get everyone seated so we can prepare for takeoff"
    ],
    durationInMinutes: 260
}

console.log("denver", flightDenver)

//Array of objects
let availableFlights = [
    flightKansas,
    flightDenver
]
console.log(availableFlights)


//IN JS 
let a = 4
let b = 6
let x = a + b

console.log(x)


let z = "4"
let y = "7"
let zz = z + y
console.log(zz)
//be careful with quotes
let sent1 = "4"
let sent2 = "7"
let paragraph = sent1 + sent2
console.log(paragraph)