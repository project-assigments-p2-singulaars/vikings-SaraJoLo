export class Soldier {
    health: number;
    strength: number;
    constructor(health:number, strenght:number){
        this.health = health;
        this.strength=strenght;
    }

    attack() {
        return this.strength;
    }
    receiveDamage(damage:number){
        this.health = this.health - damage;
    }
}