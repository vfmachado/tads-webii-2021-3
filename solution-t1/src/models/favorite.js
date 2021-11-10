class Favorite {
  constructor(title, description, createdAt) {
    this.title = title;
    this.description = description;
    this.createdAt = createdAt ? createdAt : new Date();
    this.items = [];
  }
}

module.exports = Favorite;