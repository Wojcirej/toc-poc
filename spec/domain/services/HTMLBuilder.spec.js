const AggregateFactory = require("./../../../domain/AggregateFactory");
const HTMLBuilder = require("./../../../domain/services/HTMLBuilder");
const { fetchData } = require("./../../../app/services/fetchData");
const data = fetchData();

describe("HTMLBuilder", () => {
  describe("call", () => {
    it("builds HTML template without errors", () => {
      const aggregate = AggregateFactory.create(data);
      const template = HTMLBuilder.call(aggregate);
    });
  });
});
