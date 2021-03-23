class Crew {
  constructor(crew) {
    this.id = crew.person.id;
    this.type = crew.type;
    this.name = crew.person.name;
    this.image = crew.person?.image?.original || "";
  }
}

export { Crew };
