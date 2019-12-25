const Aggregate = require("./Aggregate");

class AggregateFactory {
  static create(data) {
    return new Aggregate(data.entities);
  }
}

module.exports = AggregateFactory;
