/**
 *
 * @summary {It is just a remember of how to improve development by using ES6 capabilitites}
 */

/* New ES6 way of using String Function... */
let funk = (x) => `. Your name is ${x}
`; // \n is implicity
console.log(funk`Rogerio`, funk`Regina`, funk("Sofia"));

/* New ES6 way of using String templates */
const string = `/* Markdow Format Test */
    THE WINTER'S TALE ${"<em>"}
    A monologue from the play by Wilhams Shakespare
    
    HERMIONE: ${"</em>"} Since what I am to say must be that
    is said.`;

/* New ES6 String functions */
console.log("Starts With '/'? " + string.startsWith("/"));
console.log("Ends With 'said.'? " + string.endsWith("said."));
console.log("It includes 'em'? " + string.includes("em"));
console.log("Repeate '20x'?" + "-".repeat(20));

/* New array options */
let array = ([a, b, c, d] = ["a", "b", "c", 120]);
let array2 = Array.of("d", "e", "f");
console.log(a, b, c, d);
console.log(array);
console.log(array2);
console.log(...array, string, ...array2);

/* Destructuring Objects | Removing atributes from objects*/
const playerData = (lvl) => {
  return {
    health: lvl * 3 + 100,
    power: lvl - lvl / 2,
    energy: lvl * 2 + 100,
  };
};

let { health, power, energy } = playerData(10);

console.log(health, power, energy);
console.log(playerData(10).energy);

/* how to build clever loops */
let arr = ["Proton", "Neutron", "Electron", "Positron"];
// here x is an index
for (let x in arr) {
  console.log(x);
}
// here x is a value
for (let x of arr) {
  console.log(x);
}
// here x is an entry map with index and value
for (let x of arr.entries()) {
  console.log(x);
}
// here x is an entry map with index and value
for (let [i, x] of arr.entries()) {
  console.log(`Index is ${i} and value is ${x}.`);
}
// here x is an entry map with break
for (let [i, x] of arr.entries()) {
  if (i === 2) break;
  console.log(`Index is ${i} and value is ${x}.`);
}
