const { s3Adapter } = require("./../../../lib");
const config = require("./../../../config/application.json")[
  process.env.NODE_ENV
];
const { s3BucketName } = config;

const HTMLs3Repository = require("./../../../domain/repositories/HTMLs3Repository");
const htmlContent = "<html><body><p>Some content</p></body></html>";

describe("HTMLs3Repository", () => {
  const repository = new HTMLs3Repository();

  describe("save", () => {
    beforeAll(async () => {
      await s3Adapter.createBucket(s3BucketName);
    });

    afterAll(async () => {
      await s3Adapter.deleteObject(s3BucketName, "index.html");
      await s3Adapter.deleteBucket(s3BucketName);
    });

    it("stores HTML content as a file on s3 bucket under 'index.html' key", async () => {
      const result = await repository.save(htmlContent);
      expect(result).toBe(true);
    });
  });
});
