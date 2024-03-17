// Q no:2 

let personName = "Shaoib Ali";
console.log("hello Shaoib Ali would you like to learn some python today?");

// Q no:3

let yourName:string = "Shoaib"
console.log(yourName.toUpperCase());
console.log(yourName.toLowerCase());
console.log(yourName.charAt(0).toUpperCase() + yourName.slice(1).toLowerCase())


// Q no:4

let quote: string= "A person who never made a mistake never tried anything new";
let author: string="Albert Einstien"
console.log(`${author} once said, "${quote}`);

// Q no:5
var qoute = "A person who never made a mistake never tried anything new";
var famous_person = "Albert Einstien";
var message = "".concat(famous_person, " once said, ").concat(qoute);
console.log(message);

// Q no:6
let personName: string =`\n\t SHOAIB ALI\t\n`;
console.log(personName);
let stripped: string = personName.trim();
console.log(stripped);

// Q no 7,8
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);

// Q no:9
let favouriteNumber: number = 4;
console.log(`My favourite numberis ${favouriteNumber}`);

// Q no:10
//My name is Shoaib
// Dated:22/02/2024
console.log(`hello world simple program`);

in Second File

//My name is Shoaib
// Dated:22/02/2024
console.log(5 * 2);

// Q no:11
let names1 = ["Shaoib", "Sameer", "Waqar", "Ali ", "Rizwan"];
console.log(names1);

//  Q no:12
let names = ["Shoaib", "Nawaz", "Rizwan", "Ali ", "Qasim"];
console.log("how are you", names[0]);
console.log("how are you", names[1]);
console.log("how are you", names[2]);
console.log("how are you", names[3]);
console.log("how  are you", names[4]);

// Q no:13
let cars = ["HONDA", "CIVIC", "ALTO", "CULTUS", "RIVO"];
console.log("i would like to own a ", cars[0]);
console.log("i would like to own a ", cars[1]);
console.log("i would like to own a ", cars[2]);
console.log("i would like to own a ", cars[3]);
console.log("i would like to own a ", cars[4]);

// Q no:14
let guest1 = ["waqar", "shoaib", "Ali"];
console.log(guest1[0], "I like to invite you for a dinner plz come my home at 7pm");
console.log(guest1[1], "I like to invite you for a dinner plz come my home at 7pm");
console.log(guest1[2], "I like to invite you for a dinner plz come my home at 7pm");

// Q no:15
let guest2 = ["sameer", "danyal", "majid"];
console.log(guest2[0], "I like to invite you for a dinner plz come my home at 9pm");
console.log(guest2[1], "I like to invite you for a dinner plz come my home at 9pm");
console.log(guest2[2], "I like to invite you for a dinner plz come my home at 9pm");
let newguest1 = guest2[2] = "Ali raza";
console.log(newguest1);
console.log(guest2);

// Q no:16
let guest3:string[]= ["Ali","Samad","Waqar"];
console.log(guest3[0],"I like to invite you for a dinner plz come my home at 9pm");
console.log(guest3[1],"I like to invite you for a dinner plz come my home at 9pm");
console.log(guest3[2],"I like to invite you for a dinner plz come my home at 9pm");
let newguest2:string = guest3[2] = "Shoaib";
console.log(newguest2);
 console.log(guest3);
 console.log("I would like to inform all my guest that now I found bigger dinner table so i would like to invite more friends")
 guest3.unshift("Rizwan");
 console.log(guest3);
 guest3.splice(2,0,"Danyal");
 console.log(guest3);

// Q no:17
let guest3:string[]= ["Ali","Samad","Waqar"];
console.log(guest3[0],"I like to invite you for a dinner plz come my home at 9pm");
console.log(guest3[1],"I like to invite you for a dinner plz come my home at 9pm");
console.log(guest3[2],"I like to invite you for a dinner plz come my home at 9pm");
let newguest2:string = guest3[2] = "Shoaib";
console.log(newguest2);
 console.log(guest3);
 console.log("I would like to inform all my guest that now I found bigger dinner table so i would like to invite more friends")
 guest3.unshift("Rizwan");
 guest3.unshift("Waheed");
 console.log(`guest`);
 guest3.splice(2,0,"Furqan");
 console.log(`guest`);
 guest3.push("Nveed");
 console.log(`guest`);
 console.log("sorry friends now i found a emergency thats why i cannot invite more friends  because i have only two peoples limit")


console.log(guest3,"sorry i cannot invite you")
console.log(guest3.pop(),"sorry i cannot invite you")
console.log(guest3.pop(),"sorry i cannot invite you")
console.log(guest3.pop(),"sorry i cannot invite you")
console.log(guest3.splice(2,4)) 
console.log(guest3,"you both are still invited");
guest3.splice(0,2);
console.log(guest3);

// Q no:18
let countries = ["Pakistan", "Saudi arabia", "Dubai", "India", "England"];
console.log(countries.sort());
console.log(countries.reverse());
let newcountries = ["England", "India", "Dubai", "Saudi arabia", "Pakitan"];
console.log(newcountries);
console.log(countries);

// Q no:19
console.log("now I invit 5 peoples for dinner");

// Q no:20
let cities:string[]= ["shahdadkot","karachi","jamshoro","sukker","hyderabab"];
console.log(cities);

// Q no:21
let person = { name: "Shoaib", age: 24 };
console.log("Person:", person);

let product = { name: "Shirt", price: 15.5 };
console.log("Product:", product);

let book = { title: "A Case of Exploding Mangoes", author: "Waqar" };
console.log("Book:", book);

// Q no:22
let myArray: number[] = [1, 2, 3]; // Array of numbers

// Check if the index is within bounds before accessing
if (myArray.length > 3) { // This condition will always be false
  console.log(myArray[3]);
} else {
  console.log("Index out of bounds. Array only has", myArray.length, "elements.");
}

// Q no: 23
let age = 30;
console.log(age > 25); // true
let Myname = "Shaoib";
console.log(Myname === "Shaoib"); // True
let isLearning = true;
console.log(isLearning === true); // True
let favoriteNumber = 7;
let luckyNumbers = [3, 7, 13];
console.log(luckyNumbers.includes(favoriteNumber)); // True
let personName = "Shoaib";
console.log(typeof personName === "string"); // True
let myage = 30;
console.log(typeof myage === "string"); // False
let goodname = "Shoaib";
console.log(goodname === "Qasim"); // False

// Q no:24

let myName4:string = "Shoaib"
console.log( myName4 == "Shoaib");
      // LOWER CASE;
 let cname:string = "Shoaib";
 console.log(cname == "Shoaib");
console.log( cname == "SHOAIB");

          // NUMBER COMPARASION;
console.log(4 == 4);
console.log(1 != 1);
console.log(3 < 4);
console.log(3 > 4);
console.log( 5 <= 5);
console.log( 9 >= 9);

let num1:number = 5;
 let num2:number = 6;
console.log(num1 < num2 && num2 > num1);
console.log(num1 > num2 && num2 < num1);

console.log( num1 < num1 || num1 == num2);
console.log(num1 == num2 || num1 > num2);
    let num4: number[] = [1,2,3,4,];
   console.log(num4[0] == 1);
   console.log(num4[4] == 4);


// Q no:25
let alien_color = 'green'; // Assign alien color
// Version 1: Passes the if test (earns 5 points)
if (alien_color === 'green') {
    console.log("You just earned 5 points!");
}
// Version 2: Fails the if test (no output)
alien_color = 'red'; // Change alien color to fail the test
if (alien_color === 'green') {
    console.log("You just earned 5 points!"); // This won't be printed
}
export {};

// Q no:26
 alien_color: string = 'yellow'; // Assign alien color

// Version 1: Runs the if block (earns 5 points for green)
if (alien_color === 'green') {
  console.log("You just earned 5 points for shooting the alien.");
} else {
  console.log("You just earned 10 points!"); // This won't be printed in this version
}

// Version 2: Runs the else block (earns 10 points for non-green)
alien_color = 'red'; // Change alien color to non-green
if (alien_color === 'green') {
  console.log("You just earned 5 points for shooting the alien."); // This won't be printed
} else {
  console.log("You just earned 10 points!");
}

// Q no:27
let alien_color: string = "red";

if (alien_color === "green") {
  console.log("Player earned 5 points for shooting the green alien.");
} else if (alien_color === "yellow") {
  console.log("Player earned 10 points for shooting the yellow alien!");
} else if (alien_color === "red") {
  console.log("Player earned 15 points for shooting the red alien!");
} else {
  console.log("Unknown alien color. Please enter 'green', 'yellow', or 'red'.");
}

// Q no:28
let age: number = 30; // Assign a value to age

if (age < 2) {
  console.log("You are a baby.");
} else if (age < 4) {
  console.log("You are a toddler.");
} else if (age < 13) {
  console.log("You are a kid.");
} else if (age < 20) {
  console.log("You are a teenager.");
} else if (age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are an elder.");
}

// Q no:29

let favorite_fruits: string[] = ["mango", "apple", "grapes"];

if (favorite_fruits.includes("mango")) {
  console.log("You really like mangoes!");
}

if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes("grapes")) {
  console.log("You really like grapes!");
}

if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!"); 
}

if (favorite_fruits.includes("kiwi")) { 
  console.log("You really like kiwis!"); 
}

// Q no:30
let usernames: string[] = ["admin", "Shoaib", "Waqar", "Ali", "Mawaz"]; 

for (let username of usernames) {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

// Q no:31
let usernames: string[] = []; 

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let username of usernames) {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}


// Q no:32
let current_users: string[] = ["Shoaib", "Nawaz", "Ali", "Khan", "Qasim"];
let new_users: string[] = ["Haider", "Saleem", "Akhtar", "Shoaib", "Manzoor"];

for (let new_username of new_users) {
  let usernameFound = false; 

  for (let currentUser of current_users) {
    if (new_username.toLowerCase() === currentUser.toLowerCase()) {
      usernameFound = true;
      break; 
    }
  }

  if (usernameFound) {
    console.log(`${new_username} is already taken. Please choose a new username.`);
  } else {
    console.log(`${new_username} is available.`);
  }
}

// Q no:33
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numbers) {
  let ordinalSuffix: string;

  if (num === 1) {
    ordinalSuffix = "st";
  } else if (num === 2) {
    ordinalSuffix = "nd";
  } else if (num === 3) {
    ordinalSuffix = "rd";
  } else {
    ordinalSuffix = "th";
  }

  console.log(`${num}${ordinalSuffix}`);
}

// Q no:34
let favorite_pizzas: string[] = ["cheesiPizza", "cheese", "chickenPizza"]; 
for (let pizza of favorite_pizzas) {
  console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");

// Q no:35
let animals: string[] = ["dog", "cat", "rabbit"]; 
for (let animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great furry friend!");

// Q no:36
function make_shirt(size: string, message: string): void {
    console.log(`I would like a ${size} t-shirt with '${message}' printed on it.`);
  }
  make_shirt('large', 'I love Python!');
  make_shirt('medium', 'Hello, World!')

// Q no:37
let makeShirt = function (size = "large", message = "I love TypeScript") {
    console.log(`Making a ${size} shirt that says: ${message}`);
  };
  makeShirt();
  
  makeShirt("medium");
  
  makeShirt("small", "Learning is Fun!");

// Q no:38
let describeCity = function (city: string, country = "USA") {
    console.log(`${city} is in ${country}`);
  };
  describeCity("Karachi", "Pakistan");
  
  describeCity("Berlin");

  describeCity("Tokyo", "Japan");

// Q no:39
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  console.log(city_country("Pakistan", "India"));
  console.log(city_country("Toronto", "Canada"));
  console.log(city_country("Sydney", "Australia"));

// Q no:40
function makeAlbum(artist: string, title: string, tracks?: number): object {
    return { artist, title, tracks };
  }

  let album1 = makeAlbum("Ali raza","myalbum");
  let album2 = makeAlbum("Furqan","bigalbum");
  let album3 = makeAlbum("Shoaib","smallalbum");
  
  console.log(album1);
  console.log(album2);
  console.log(album3);

// Q no:41
let magicians: string[] = ["David Copperfield", "Penn & Teller", "Criss Angel"];

function showMagicians(magicians: string[]) {
  magicians.forEach(magician => console.log(magician));
}

showMagicians(magicians);
 
// Q no:42
let make_great1 = (() => {

    let magician_names: string[] = ["dai vernon", "harry", "david", "doug henning"];
  
    console.log("Initial magician names:", magician_names);
  
    
  })();

// Q no:43 
const magicians: string[] = ["magician1", "magician2"];

function makeGreat(magicians: string[]): string[] {
  return magicians.map((magician) => `Great ${magician}`);
}

function showMagicians(magicians: string[]): void {
  console.log(magicians);
}

const greatMagicians = makeGreat(magicians.slice());

showMagicians(magicians);
showMagicians(greatMagicians);

// Q no:44

    let sandwiches = ((items:string, moreitems:string)=>{
    let newitems:string[] =[items,moreitems]; 
    
   return newitems;
    

    })
     let sanditems = sandwiches("egg","chees");
     let sandwiches1 = sandwiches("chicken","butter")
     let sandwiches2 = sandwiches("mutton","chees");

     
    console.log(sandwiches1)

// Q no:45
let cars_information = ((modle_name:string, manufacture:string,color:string ,price?:number)=>{
    let carsobject = {
    modle_name : modle_name,
    manufacture : manufacture,
    color : color,
    price : price,
    }
    return carsobject
})

 let newinformation = cars_information("civic","honda","red",4500000)
    console.log(newinformation);






  



  

  


  
  
  
  

  













