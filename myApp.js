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
  const targetPersonByID = { _id: personId };
  Person.findById(targetPersonByID, function (err, foundPerson) {
    if (err) return console.error(err);

    done(null, foundPerson);
  });
};

const findEditThenSave = (personId, done) => {
  const targetPersonByID = { _id: personId };
  Person.findById(targetPersonByID, function (err, foundPerson) {
    if (err) return console.error(err);

    const foodToAdd = 'hamburger';
    foundPerson.favoriteFoods.push(foodToAdd);

    foundPerson.save(function (err, updatedPerson) {
      if (err) return console.error(err);

      done(null, updatedPerson);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const targetPerson = { name: personName };
  const ageToSet = 20;
  const newAge = { age: ageToSet };

  Person.findOneAndUpdate(
    targetPerson,
    newAge,
    { new: true },
    function (err, updatedPerson) {
      if (err) return console.error(err);

      done(null, updatedPerson);
    }
  );
};

const removeById = (personId, done) => {
  const targetPersonByID = { _id: personId };

  Person.findByIdAndRemove(targetPersonByID, function (err, removedPerson) {
    if (err) return console.error(err);

    done(null, removedPerson);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = 'Spongebob Squarepants';
  const targetPeople = { name: nameToRemove };

  Person.remove(targetPeople, function (err, response) {
    if (err) return console.error(err);

    done(null, response);
  });

  // Person.deleteMany(targetPeople, function (err, response) {
  //   if (err) return console.error(err);

  //   done(null, response);
  // });
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
