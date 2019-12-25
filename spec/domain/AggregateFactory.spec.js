const AggregateFactory = require("../../domain/AggregateFactory");
const Aggregate = require("../../domain/Aggregate");
const { fetchData } = require("./../../app/services/fetchData");
const data = fetchData();

describe("AggregateFactory", () => {
  describe("create", () => {
    it("creates new instance of Aggregate", () => {
      expect(AggregateFactory.create(data)).toBeInstanceOf(Aggregate);
    });
  });
});
