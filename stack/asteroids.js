/**
 * We are given an array asteroids of integers representing asteroids in a row.
 *
 * For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
 *
 * Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
 *
 * @param {number[]} asteroids
 * @return {number[]}
 */

let asteroidCollision = function(asteroids) {
  Array.prototype.top = function () {
    return this[this.length - 1];
  }

  Array.prototype.isEmpty = function () {
    return this.length === 0;
  }

  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    let addAsteroid = true;

    while (!stack.isEmpty() && (stack.top() > 0 && asteroids[i] < 0)) {
      if (Math.abs(stack.top()) === Math.abs(asteroids[i])) {
        addAsteroid = false;
        stack.pop();
        break;
      }
      else if (Math.abs(stack.top()) > Math.abs(asteroids[i])) {
        addAsteroid = false;
        break;
      }
      else {
        stack.pop();
      }
    }

    if (addAsteroid === true) stack.push(asteroids[i]);
  }

  return stack;
};

let asteroids = [-2,1,1,-1];
console.log(asteroidCollision(asteroids));

asteroids = [-2,-2,2,-2];
console.log(asteroidCollision(asteroids));

asteroids = [-2,-1,1,2]
console.log(asteroidCollision(asteroids));

asteroids = [5,10,-5];
console.log(asteroidCollision(asteroids));

asteroids = [8,-8];
console.log(asteroidCollision(asteroids));

asteroids = [10,-2,-5];
console.log(asteroidCollision(asteroids));

asteroids = [10,2,-5,-12,5,1];
console.log(asteroidCollision(asteroids));