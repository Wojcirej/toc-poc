const path = require("path");
const fs = require("fs");
const ejs = require("ejs");

class HTMLBuilder {
  constructor(aggregate, repository) {
    this.model = aggregate;
    this.repository = repository;
    this.templateDirectory = path.join(
      __dirname,
      "./../assets/html/root.html.ejs"
    );
  }

  static async call(aggregate, repository) {
    const builder = new HTMLBuilder(aggregate, repository);
    return await builder.call();
  }

  async call() {
    const htmlContent = await this.generateFullTemplate();
    const saveSuccess = await this.repository.save(htmlContent);
    if (saveSuccess) return htmlContent;
  }

  async generateFullTemplate() {
    return await ejs.renderFile(this.templateDirectory, this.model.forRender());
  }
}

module.exports = HTMLBuilder;
