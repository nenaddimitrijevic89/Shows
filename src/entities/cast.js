class Cast {
  constructor(cast) {
    this.id = cast.character.id;
    this.name = cast.person.name;
    this.image = cast.character.image.medium;
  }
}

export { Cast };