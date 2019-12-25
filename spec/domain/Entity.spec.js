const Entity = require("../../domain/Entity");
const { fetchData } = require("./../../app/services/fetchData");
const data = fetchData().entities[0];

describe("Entity", () => {
  const entity = new Entity(data);

  describe("forRender", () => {
    it("returns object with all keys necessary for HTML template rendering", () => {
      expect(Object.keys(entity.forRender())).toEqual([
        "id",
        "title",
        "titleClass",
        "description",
        "imageUrl",
        "hasChildren",
        "children"
      ]);
    });
  });
});
