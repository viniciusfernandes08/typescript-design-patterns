function Person(name, age) {
  this.name = name;
  this.age = age;
}

const personPrototype = {
  name: 'Jorge',
  age: 62,

  nameAndAge() {
    return `${this.age} tem ${this.age} anos`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(name, age) {
  Person.call(this, name, age)
  this.fromSubClass = 'Hello'
}

SubPerson.prototype = Object.create(Person.prototype)
SubPerson.prototype.constructor = SubPerson

const person1 = new Person('Amadeu', 80);
console.log(person1.nameAndAge);

const person2 = new SubPerson('Helena', 18)
console.log(person2.fromSubClass)
