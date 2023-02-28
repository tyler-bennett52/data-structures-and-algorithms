'use strict';

const AnimalShelter = require('./AnimalShelter');

const dogAnimal = { species: 'dog', name: 'dogName' };
const catAnimal = { species: 'cat', name: 'notADogName' };
const firstChoice = new AnimalShelter();


describe('Animal Shelter', () => {
  it('can enqueue based on species', () => {
    firstChoice.enqueue(dogAnimal);
    firstChoice.enqueue(dogAnimal);
    firstChoice.enqueue(dogAnimal);
    firstChoice.enqueue(catAnimal);
    expect(firstChoice.dogQ.length).toBe(3);
    expect(firstChoice.catQ.length).toBe(1);
    expect(firstChoice.enqueue('doggo')).toBeNull();
  });

  it('can dequeue based on preference', () => {
    let firstDog = firstChoice.dequeue('dog');
    let firstCat = firstChoice.dequeue('cat');
    let firstNull = firstChoice.dequeue('lizard');
    expect(firstCat.species).toBe('cat');
    expect(firstDog.species).toBe('dog');
    expect(firstNull).toBeNull();
  });
});
