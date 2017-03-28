var meeseeksGet = require('./index');
var assert = require('assert');

var johnCena = {
  name: {
    first: 'John',
    last: 'Cena'
  },
  age: 46
};

var truthyFalsyTest = {
  a: {
    b: 0
  }
};

var complexObject = {
  person: {
    name: {
      first: 'Joe',
      last: 'Doe'
    },
    age: 42,
    friends: [
      {
        name: {
          first: 'Jane',
          last: 'Doe'
        },
        age: 37,
        friends: [
          johnCena
        ]
      },
      johnCena
    ]
  },
  dogs: [
    {
      name: 'Marco'
    },
    {
      name: 'Polo'
    }
  ]
};

// when path is string
console.log('should get plain properties with string path');
assert(meeseeksGet(complexObject, 'person.name.last') === 'Doe');
assert(meeseeksGet(complexObject, 'person.age') === 42);
assert(meeseeksGet(complexObject, 'person.friends.[0].friends.[0].age') === 46);
assert(meeseeksGet(truthyFalsyTest, 'a.b', -1) === 0);

console.log('should get array properties with string path');
assert(meeseeksGet(complexObject, 'dogs.0') === complexObject.dogs[0]);
assert(meeseeksGet(complexObject, 'dogs.[0]') === complexObject.dogs[0]);

// when path is array
console.log('should get plain properties with array path');
assert(meeseeksGet(complexObject, ['person', 'name', 'last']) === 'Doe');
assert(meeseeksGet(complexObject, ['person', 'age']) === 42);
assert(meeseeksGet(complexObject, ['person', 'friends', '[0]', 'friends', 0, 'name', 'last']) === 'Cena');

console.log('should get array properties with array path');
assert(meeseeksGet(complexObject, ['dogs', 1, 'name']) === 'Polo');
assert(meeseeksGet(complexObject, ['dogs', '[1]', 'name']) === 'Polo');

// errors
console.log('should throw error for invalid path');
try {
  meeseeksGet(complexObject, {});
} catch (e) {
  console.log('caught error ', e);
}

// defaultValue
console.log('should return default value when path not found');
assert(meeseeksGet(complexObject, ['dogs', 0, 'age'], 1) === 1);

console.log('should return default value when given empty path');
assert(meeseeksGet(complexObject, 'person.', 3) === 3);

console.log('all tests passed');