class Entity {
  constructor(data, level = 1) {
    this.id = data.id;
    this.level = level;
    this.title = data.title;
    this.description = data.description;
    this.image = data.backgroundImage;
    this.children = data.children.map(entry => new Entity(entry, level + 1));
  }

  hasChildren() {
    return this.children.length > 0;
  }

  titleClass() {
    return `entity__title-level${this.level}`;
  }

  imageUrl() {
    return this.image
      ? this.image
      : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
  }

  forRender() {
    return {
      id: this.id,
      title: this.title,
      titleClass: this.titleClass(),
      description: this.description,
      imageUrl: this.imageUrl(),
      hasChildren: this.hasChildren(),
      children: this.children
    };
  }
}

module.exports = Entity;
