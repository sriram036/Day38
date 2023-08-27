let originDogs = ["BullDog", "Beagle", "Labrador"];

let cats = new Array("Americal Curl", "Bengal");

let birds = new Array("Falscon", "Ducks", "Flamingoes");

console.log(originDogs);
console.log(cats);
console.log(birds);

let sliceDogs = originDogs.slice(1, 2);

console.log(sliceDogs);

let copyDogs = [...originDogs];
let dogs = originDogs.slice(0);

console.log(copyDogs)
console.log(dogs)

let pushDog = dogs.push("Golden Retriever");
console.log(pushDog);

let popDog = dogs.pop();
console.log(popDog);

dogs[dogs.length] = "poodle";
console.log(dogs);

let addFirst = dogs.unshift("Golden Retriever");
console.log(addFirst);
console.log(dogs);

dogs.splice(2, 1, "Pug", "Huskey", "Boxer");
console.log(dogs);

let animal = dogs.concat(cats, birds);
console.log(animal);

let newAnimal = [...dogs, ...cats, ...birds].toString();
console.log(newAnimal);

let sortDogs = dogs.slice(0).sort();
console.log(sortDogs);
console.log(dogs);


function scanArray([third, forth]) {
    console.log("scan : " + third + "\t" + forth);
}

scanArray(animal);

let joinAnimal = animal.join("-");
console.log(joinAnimal);

let allAnimal = "";
console.log(allAnimal);

for (let a of animal) {
    allAnimal += a + " ";
}

console.log(allAnimal);