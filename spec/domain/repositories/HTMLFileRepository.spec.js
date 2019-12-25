const fs = require("fs");
const HTMLFileRepository = require("./../../../domain/repositories/HTMLFileRepository");

const htmlContent = "<html><body><p>Some content</p></body></html>";
const path = `/tmp/${new Date().getTime()}_aggregate.html`;

describe("HTMLFileRepository", () => {
  const repository = new HTMLFileRepository();

  describe("save", () => {
    afterEach(() => {
      if (fs.existsSync(path)) fs.unlinkSync(path);
    });

    it("stores HTML content as a file in passed path of the file system", async () => {
      const result = await repository.save(htmlContent, path);
      expect(fs.existsSync(path)).toBe(true);
    });
  });
});
