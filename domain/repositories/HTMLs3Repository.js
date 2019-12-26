const { s3Adapter } = require("./../../lib");
const config = require("./../../config/application.json")[process.env.NODE_ENV];
const { s3BucketName } = config;

class HTMLs3Repository {
  constructor() {
    this.s3Adapter = s3Adapter;
  }

  async save(htmlContent) {
    return !!(await this.s3Adapter.uploadObject(
      s3BucketName,
      "index.html",
      "text/html",
      htmlContent
    ));
  }
}

module.exports = HTMLs3Repository;
