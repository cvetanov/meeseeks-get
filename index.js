function meeseeksGet(object, path, defaultValue) {

  var reduce = Array.prototype.reduce, keys = getKeysFromInput(path);

  var reducedValue = reduce.call(keys, function(acc, curr) {
    var key = getKey(curr);

    return isNullOrUndefined(acc)
      ? defaultValue
      : acc[key];
  }, object);

  return reducedValue || defaultValue;
}


function getKey(key) {
  return isKeyAnArrayIndexInBrackets(key)
    ? key.substring(1, key.length - 1)
    : key;
}

function isKeyAnArrayIndexInBrackets(key) {
  return isString(key)
    ? key[0] === '[' && key[key.length - 1] === ']'
    : false;
}

function getKeysFromInput(path) {

  if (isArray(path)) {
    return path;
  }

  if (isString(path)) {
    return path.split('.');
  }

  throw new Error('Invalid usage. Path is not a string or an array.');
}

// utils
function isNullOrUndefined(object) {
  return object === undefined || object === null;
}

function isString(object) {
  return object && typeof object === 'string';
}

function isArray(object) {
  return object && object.constructor === Array;
}

module.exports = meeseeksGet;
