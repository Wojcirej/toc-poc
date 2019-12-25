const Aggregate = require("../../domain/Aggregate");
const Entity = require("../../domain/Entity");
const { fetchData } = require("./../../app/services/fetchData");
const data = fetchData().entities;

describe("Aggregate", () => {
  const aggregate = new Aggregate(data);

  it("aggregates instances of Entity", () => {
    aggregate.collection.forEach(item => {
      expect(item).toBeInstanceOf(Entity);
    });
  });

  describe("forRender", () => {
    it("returns object with all keys necessary for HTML template rendering", () => {
      expect(Object.keys(aggregate.forRender())).toEqual(["entities"]);
    });
  });
});
