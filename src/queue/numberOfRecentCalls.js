let RecentCounter = function() {
  this.pings = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    let range = [t-3000,t];
    this.pings.push(t);

    while (this.pings[0] < range[0]) {
      this.pings.shift();
    }

    return this.pings.length;
};

let counter = new RecentCounter();
console.log(counter.ping(1));
console.log(counter.ping(100));
console.log(counter.ping(3001));
console.log(counter.ping(3002));
