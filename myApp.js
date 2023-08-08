require('dotenv').config();

const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  const person = new Person({
    name: 'Kenny Vo',
    age: 28,
    favoriteFoods: ['Banh mi'],
  });

  person.save(function (err, person) {
    if (err) return console.error(err);

    done(null, person);
  });
};

const people = [
  { name: 'Spongebob Squarepants' },
  { name: 'Patrick Star' },
  { name: 'Squidward Tentacles' },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.error(err);

    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  const targetPerson = { name: personName };
  Person.find(targetPerson, function (err, foundPerson) {
    if (err) return console.error(err);

    done(null, foundPerson);
  });
};

const findOneByFood = (food, done) => {
  const targetPersonByFood = { favoriteFoods: food };
  Person.findOne(targetPersonByFood, function (err, foundPerson) {
    if (err) return console.error(err);

    done(null, foundPerson);
  });
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = 'hamburger';

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = 'Mary';

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = 'burrito';

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
