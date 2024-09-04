class Animal {
    name: string;
    maxSpeed: number;
    speed: number;

    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.speed = this.getRandomSpeed();
    }

    // Method to return random speed based on max speed
    getRandomSpeed(): number {
        return Math.floor(Math.random() * this.maxSpeed) + 1;
    }

    // Method to return animal's speed
    getSpeed(): number {
        return this.speed;
    }
}