const { fetchData } = require("./../../../app/services/fetchData");

describe("fetchData", () => {
  it("returns parsed JSON as Object", () => {
    expect(fetchData()).toBeInstanceOf(Object);
  });

  it("returns collection of objects with required properties", () => {
    const result = fetchData();
    const entity = result.entities[0];
    expect(Object.keys(entity)).toContain("id");
    expect(entity.id).toBeInstanceOf(Number);
    expect(Object.keys(entity)).toContain("title");
    expect(entity.title).toBeInstanceOf(String);
    expect(Object.keys(entity)).toContain("description");
    expect(entity.description).toBeInstanceOf(String);
    expect(Object.keys(entity)).toContain("backgroundImage");
    expect(Object.keys(entity)).toContain("children");
    expect(entity.children).toBeInstanceOf(Array);
  });
});
