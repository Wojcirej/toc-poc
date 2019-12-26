const { fetchData } = require("./fetchData");
const AggregateFactory = require("./../../domain/AggregateFactory");
const HTMLBuilder = require("./../../domain/services/HTMLBuilder");
const HTMLs3Repository = require("./../../domain/repositories/HTMLs3Repository");

exports.handler = async () => {
  const data = fetchData();
  const aggregate = AggregateFactory.create(data);
  const repository = new HTMLs3Repository();
  await HTMLBuilder.call(aggregate, repository);
};

this.handler();
