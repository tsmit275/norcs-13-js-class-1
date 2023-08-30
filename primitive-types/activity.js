console.log("helo from actiivt.js")

//This is where you can play with the examples from https://digitalskills.instructure.com/courses/10576/pages/activity-code-review-js-1-primitive-types-and-objects?module_item_id=1426794
// feel free to copy paste them or practice other examples to understand what I showed in my presentation
let empty = [] // An array with no elements
console.log(empty)
let numbers = [2, 3, 5, 7, 11]  // An array with 5 numeric elements
console.log(numbers)
let various = [ 1.1, true, "a"] // 3 elements of various types
console.log(various)

let a = []           // Start with an empty array
a.push("zero")       // Add a value at the end.  a = ["zero"]
a.push(["zero","one", "two"]) // Add two more values.  a = ["zero", "one", "two"])

Number("15")    // => 15
String(15)      // => "15" 
Boolean("true") // => true

82 + ""         // Output: "82" (number 82 converts to string "82")
"15" + 2        // Output: "152" (string 2 converts to number "2")
"77" - "10"     // Output: 67 (both strings convert to numbers)
undefined + 6   // Output: NaN (undefined could not be converted to number)

//Issue #1
let products = 92 + 8 
console.log(products)

//Issue #2
let millimeters = 5 
let centimeters = 10
let totalBitSize = millimeters + centimeters;
console.log(totalBitSize) // "15"                     

//Issue #3
let partNumber = "15"
let yearMade = "2000"
let idNumber =  String(partNumber) + String(yearMade)
console.log(idNumber) // "152000"

//Issue #4
let count
let drillBits = ["standard", "premium,", "select", "special"]        
console.log("number of elements in drillBits",drillBits.length)

//Issue #5
let colorOptions = ["blue", "yellow", "white", "green"]                        
console.log("colorOptions", colorChoice = colorOptions[1])