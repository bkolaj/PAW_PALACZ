export class Amelka {
    constructor(name, surname, age, price) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.price = price;
        this.wearCondition = 0;
    }

    checkWearCondition = () => this.wearCondition > 10 ? this.price -= 0.1 * this.price : this.price;

    use(user, hours) {
        user.money -= this.price * hours;
        user.happiness += 0.1 * hours;
        user.fallList.push(this.name);

        this.wearCondition += 1;
    }

    toString() {
        return `name: ${this.name}, surname: ${this.surname}, age: ${this.age}, price: ${this.price}, wearCondition: ${this.wearCondition}`;
    }
}