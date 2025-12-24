const personPrototype = {
  name: 'Jorge',
  age: 62,

  nameAndAge() {
    return `${this.age} tem ${this.age} anos`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.name = 'Tadeu'
console.log(anotherPerson.nameAndAge);
