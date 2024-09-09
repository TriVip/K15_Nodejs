import { Animal } from "./Animal";

const horse = new Animal("Horse", 75);
const tiger = new Animal("Tiger", 100);
const dog = new Animal("Dog", 60);

const animals: Animal[] = [horse, tiger, dog];

findWinner(animals);

function findWinner(animals: Animal[]): void {
    let winner = animals[0];

    for (let animal of animals) {
        if (animal.getSpeed() > winner.getSpeed()) {
            winner = animal;
        }
    }

    console.log(`Winner is ${winner.name}, with speed: ${winner.getSpeed()} km/h`);
}