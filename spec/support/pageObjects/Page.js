const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const EntitySection = require("./EntitySection");

class Page {
  constructor(htmlContent) {
    this.document = new JSDOM(htmlContent).window.document;
    this.entitySections = this._prepareEntitySections;
  }

  allEntitySections() {
    return this.entitySections;
  }

  _prepareEntitySections() {
    return Array.from(this.document.querySelectorAll(".entity")).map(
      entity => new EntitySection(entity)
    );
  }
}

module.exports = Page;
