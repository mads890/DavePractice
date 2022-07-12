import { animalsToSort } from './sortables/AnimalsA';
import { foodToSort } from './sortables/FastFoodA';
import { peopleToSort } from './sortables/PeopleA';

function sortAnimals(a, b) {
    // your code here
}

function sortFastFood(a, b) {
    // your code here
}

function sortPeople(a, b) {
    // your code here
}

// the following calls the sort method on each array
// the parameter given to the sort method is the function that we have defined above
animalsToSort.sort(sortAnimals);
foodToSort.sort(sortFastFood);
peopleToSort.sort(sortPeople);