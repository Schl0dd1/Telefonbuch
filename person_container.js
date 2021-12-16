"use strict";

export default class Person_Container {
  constructor() {
    this._name = "Name";
    this._phone = 12345;
    this._pic = "#";
  }

  fetch_user = () => {
    let url = "https://randomuser.me/api/";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        display(data);
      })
      .catch((error) => {
        console.log("error");
      });

    function display(data) {
      let person = data.results[0];
      let full_name = `${person.name.first} ${person.name.last}`;
      let phone = person.phone;
      let pic = person.picture.large;

      let card = document.createElement("div");
      card.setAttribute("class", "flex-container");
      card.innerHTML = `
        <div class="foto"><img src='${pic}' alt="Friend" /></div>
        <div class="text">
        <h2>${full_name}</h2>
        <a href="#">${phone}</a>
        </div>
        `;
      let anker = document.querySelector(".container-groß");
      anker.insertAdjacentElement("beforeend", card);
    }
  };
}
