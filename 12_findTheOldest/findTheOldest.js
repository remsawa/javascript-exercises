const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]
const getAge = function (death, birth) {
    if(death == null) {
        death = new  Date().getFullYear();
    }
    return death - birth;
}
const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(
            oldest.yearOfDeath,
            oldest.yearOfBirth
            );
        const currentPersonAge = getAge(
            currentPerson.yearOfDeath,
            currentPerson.yearOfBirth
            );
        return oldestAge < currentPersonAge ? currentPerson : oldest;
    });
};
findTheOldest(people);
    
// Do not edit below this line
module.exports = findTheOldest;
