const fs = require("fs");

const AggregateFactory = require("./../../../domain/AggregateFactory");
const HTMLBuilder = require("./../../../domain/services/HTMLBuilder");
const HTMLFileRepository = require("../../../domain/repositories/HTMLFileRepository");
const { fetchData } = require("./../../../app/services/fetchData");
const data = fetchData();

const outputPath = "/tmp/aggregate.html";

describe("HTMLBuilder", () => {
  const repository = new HTMLFileRepository();

  describe("call", () => {
    afterEach(() => {
      if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
    });

    describe("when no errors", () => {
      const aggregate = AggregateFactory.create(data);

      it("returns HTML template", async () => {
        const template = await HTMLBuilder.call(aggregate, repository);
        expect(template).toBeTruthy();
      });

      it("stores HTML file on file system", async () => {
        const template = await HTMLBuilder.call(aggregate, repository);
        expect(fs.existsSync(outputPath)).toBe(true);
      });
    });
  });
});
