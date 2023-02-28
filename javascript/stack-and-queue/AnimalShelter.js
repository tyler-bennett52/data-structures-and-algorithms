'use strict';

const { Queue } = require('./index');

class AnimalShelter {
  constructor() {
    this.catQ = new Queue;
    this.dogQ = new Queue;
  }

  enqueue(Animal) {
    if (Animal.species === 'cat') {
      this.catQ.enqueue(Animal);
    } else if (Animal.species === 'dog') {
      this.dogQ.enqueue(Animal);
    } else return null;
  }

  dequeue(preference) {
    if (preference === 'cat') {
      return this.catQ.dequeue();
    } else if (preference === 'dog') {
      return this.dogQ.dequeue();
    } else return null;
  }
}


module.exports = AnimalShelter;
