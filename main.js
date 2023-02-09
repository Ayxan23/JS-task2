const persons = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];


/* 1) MAP */ console.log("MAP");

// Get an array of all names
function getNames(arr) {
  let nameArr = arr.map((item) => item.name);
  return nameArr;
}
console.log(getNames(persons));

// Get an array of all heights
function getHeights(arr) {
  let heightArr = arr.map((item) => item.height);
  return heightArr;
}
console.log(getHeights(persons));

// Get an array of objects with just name and height properties
function objNameHeight(arr) {
  let resultArr = [];
  arr.map((item) => {
    const { name, height } = item;
    resultArr.push({ name, height });
  });
  return resultArr;
}
console.log(objNameHeight(persons));

// Get an array of all first names
function getFirstName(arr) {
  let resultArr = arr.map((item) => item.name.split(" ")[0]);
  return resultArr;
}
console.log(getFirstName(persons));



/* 2) FILTER */ console.log("\nFILTER");

// Get characters with mass greater than 100
function getGreaterMass(arr) {
  let resultArr = arr.filter((item) => item.mass > 100);
  return resultArr;
}
console.log(getGreaterMass(persons));

// Get characters with height less than 200
function getLesserHeight(arr) {
  let resultArr = arr.filter((item) => item.height < 200);
  return resultArr;
}
console.log(getLesserHeight(persons));

// Get all male characters
function getMale(arr) {
  let resultArr = arr.filter((item) => item.gender == "male");
  return resultArr;
}
console.log(getMale(persons));

// Get all female characters
function getFemale(arr) {
  let resultArr = arr.filter((item) => item.gender == "female");
  return resultArr;
}
console.log(getFemale(persons));



/* 3) SORT */ console.log("\nSORT");

// Sort by name
function sortByName(arr) {
  let resultArr = arr.sort((a, b) => (a.name > b.name ? 1 : -1));
  return resultArr;
}
//console.log(sortByName(persons));

// Sort by mass
function sortByMass(arr) {
  let resultArr = arr.sort((x, y) => x.mass - y.mass);
  return resultArr;
}
//console.log(sortByMass(persons));

// Sort by height
function sortByHeight(arr) {
  let resultArr = arr.sort((x, y) => x.height - y.height);
  return resultArr;
}
//console.log(sortByHeight(persons));

// Sort by gender
function sortByGender(arr) {
  let resultArr = arr.sort((a, b) => (a.gender > b.gender ? 1 : -1));
  return resultArr;
}
//console.log(sortByGender(persons));



/* 4) EVERY */ console.log("\nEVERY");

// Does every character have blue eyes?
function everyBlueEyes(arr) {
  let result = arr.every((item) => item.eye_color == "blue");
  return result;
}
console.log(everyBlueEyes(persons));

// Does every character have mass more than 40?
function everyMassMore(arr) {
  let result = arr.every((item) => item.mass > 40);
  return result;
}
console.log(everyMassMore(persons));

// Is every character shorter than 200?
function everyHeightShort(arr) {
  let result = arr.every((item) => item.height < 200);
  return result;
}
console.log(everyHeightShort(persons));

// Is every character male?
function everyGenderMale(arr) {
  let result = arr.every((item) => item.gender == "male");
  return result;
}
console.log(everyGenderMale(persons));



/* 5) SOME */ console.log("\nSOME");

// Is there at least one male character?
function someGenderMale(arr) {
  let result = arr.some((item) => item.gender == "male");
  return result;
}
console.log(someGenderMale(persons));

// Is there at least one character with blue eyes?
function someBlueEyes(arr) {
  let result = arr.some((item) => item.eye_color == "blue");
  return result;
}
console.log(someBlueEyes(persons));

// Is there at least one character taller than 200?
function someHeightTaller(arr) {
  let result = arr.some((item) => item.height > 200);
  return result;
}
console.log(someHeightTaller(persons));

// Is there at least one character that has mass less than 50?
function someMassLess(arr) {
  let result = arr.some((item) => item.mass < 50);
  return result;
}
console.log(someMassLess(persons));