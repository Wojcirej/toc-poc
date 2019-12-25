const fs = require("fs");
class HTMLFileRepository {
  constructor() {}

  async save(htmlContent, path = "/tmp/aggregate.html") {
    try {
      fs.writeFileSync(path, htmlContent);
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = HTMLFileRepository;
