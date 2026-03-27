import Component from "../../services/component.js";

export default class NavBar extends Component {
  templateURL = "./core/components/navbar/component.html";

  constructor() {
    super();
  }
}

customElements.define("app-navbar", NavBar);
