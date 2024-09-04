const horse = new Horse();
const tiger = new Tiger();
const dog = new Dog();

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