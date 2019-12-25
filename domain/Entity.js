class Entity {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.image = data.backgroundImage;
    this.children = data.children.map(entry => new Entity(entry));
  }

  forRender() {
    return {
      title: this.title,
      description: this.description,
      imageUrl: this.image,
      children: this.children
    };
  }
}

module.exports = Entity;
