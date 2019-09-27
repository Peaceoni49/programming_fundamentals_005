// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/

// Object.size = function (obj) {
//   let count = 0;
//   for (let key in obj) {
//     count++;
//   }
//   return count;
//  }
function size(object) {
  let count = 0;
  for(let key in object){
    count++;
  }
  return count;

}

// or 
// function size(object) {
//   return Object.key(object).length;
// }

/*
  This function receives an object, whose values will all be numbers, 
  and returns the smallest number in the object.
*/
function min(object) {
  const value = Object.values(object);
  let minValue = value[0];
  value.forEach(function (n) {
    if (n < minValue) {
      minValue = n;
    }
  });
  return minValue;
}

/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
  const value = Object.values(object);
  let maxValue = value[0];
  value.forEach(function (n) {
    if (n > maxValue) {
      maxValue = n;
    }
  });
  return maxValue;
}


/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
  const newObj = Object.assign({}, object);
  return newObj;

}

/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) {
  
  for (let k in object) { 
    let getKey = k;
    let value = object[key];
    if (getKey === key) {
      return value;
    }
  }
  return undefined;
}


/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {
  for (let k in object) { 
    let getKey = k;
    if (getKey === key) {
      return true;
    } 
  }
  return false;
}

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {
  let sumTotal = 0;
  for (let k in object) {
    //varialbe needs to be assigned a value
    let value = object[k];
    //check if the value is a number
    if (Number.isInteger(value)) {
      //add the value to the total sum value
     sumTotal += value;
    }
  }
  return sumTotal;
}
/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {}

/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) {}

// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) {}

/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) {}

/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) {}

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
