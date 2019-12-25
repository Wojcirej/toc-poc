const path = require("path");
const fs = require("fs");
const ejs = require("ejs");

class HTMLBuilder {
  constructor(aggregate) {
    this.model = aggregate;
    this.templateDirectory = path.join(
      __dirname,
      "./../assets/html/root.html.ejs"
    );
  }

  static async call(aggregate) {
    const builder = new HTMLBuilder(aggregate);
    return await builder.call();
  }

  async call() {
    const htmlContent = await this.generateFullTemplate();
    return htmlContent;
  }

  async generateFullTemplate() {
    return await ejs.renderFile(this.templateDirectory, this.model.forRender());
  }
}

module.exports = HTMLBuilder;
