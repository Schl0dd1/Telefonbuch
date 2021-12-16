import Person_Container from "./person_container.js";

export default class Adressbuch {
  constructor(count) {
    this._count = count;
  }

  generate_adressbuch = () => {
    for (let i = 0; i < this._count; i++) {
      let person = new Person_Container();
      let container = person.fetch_user();
    }
  };
}
