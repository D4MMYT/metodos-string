//Instructions  
//1.1 Create a variable hacker1 with the driver's name.
//1.2 Print "The driver's name is XXXX".
//1.3 Create a variable hacker2 with the navigator's name.
//1.4 Print "The navigator's name is YYYY".
let hacker1 = 'Tilin98';
let hacker2 = 'Twitter';
let mensaje1 = `The driver's name is ${hacker1}`;
let mensaje2 = `The navigator's name is ${hacker2}`;

console.log(mensaje1);
console.log(mensaje2);

//Iteration 2: Conditionals
//2.1. Depending on which name is longer, print:
//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} 
else if (hacker2.length > hacker1.length) {
  console.log(`Parece que el navegador tiene el nombre más largo, tiene ${hacker2.length} caracteres.`);
} 
else {
  console.log(`Wow, ambos tienen nombres igualmente largos, ¡${hacker1.length} caracteres!`);
}
