const Entity = require("./Entity");

class Aggregate {
  constructor(data) {
    this.collection = data.map(entity => new Entity(entity));
  }

  forRender() {
    return {
      entities: this.collection
    };
  }
}

module.exports = Aggregate;
