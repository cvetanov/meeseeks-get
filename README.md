# meeseeks-get
I'm Mr. Meeseeks! Look at me! I can get any nested value for you from the most complex objects.
![Mister Meeseeks](http://img07.deviantart.net/6122/i/2014/051/5/c/meeseeks_by_michaelogicalm-d77a0fl.png)

Simple tool for accessing nested object values
Implemented using Array.prototype.reduce


Install with 
`npm install meeseeks-get --save`

Require with 

`var meeseeksGet = require('meeseeks-get')`

`import meeseeksGet from 'meeseeks-get'`


Function signature

`meeseeksGet(object, path, defaultValue)` where `path` can be both an array of values (keys) for the object or a string with `.` separated keys
(valid path values: `['a', 'b']`, `'a.b'`)

Array objects can be accessed via index directly or with an index in brackets `meeseeksGet(object, '[0]') === meeseeksGet(object, '0')`

Few example usages:
```
var complexObject = {
    person: {
        name: 'Mister Meeseeks'
    },
    friends: [
        {
            name: 'Rick'
        },
        {
            name: 'Morty
        }
    ]
}
// with string path
meeseeksGet(complexObject, 'person.name') === 'Mister Meeseeks'
meeseeksGet(complexObject, 'person.friends.0.name') === 'Rick'
meeseeksGet(complexObject, 'person.friends.[0].name') === 'Rick'

// with array path
meeseeksGet(complexObject, ['person', 'name']) === 'Mister Meeseeks'
meeseeksGet(complexObject, ['person', 'friends', 0, 'name']) === 'Rick'

// with default value
meeseeksGet(complexObject, 'person.race', 'imaginary creature') === 'imaginary creature'
```
