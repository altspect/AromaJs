export default class Page extends HTMLElement {
  static #templatePromise = null;
  static #templateURL = "";

  constructor() {
    super();
    console.log("yes");
    this.attachShadow({ mode: "open" });
  }

  static async #getTemplateContent() {
    if (Page.#templatePromise === null) {
      Page.#templatePromise = fetch(Page.#templateURL)
        .then((response) => response.text())
        .then((htmlString) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlString, "text/html");

          const template = doc.querySelector("template");
          console.log(template.content);

          if (!template) {
            throw new Error(`Template element not found in ${TEMPLATE_URL}.`);
          }

          return template.content;
        })
        .catch((error) => {
          Page.#templatePromise = null;
          throw error;
        });
    }

    return Page.#templatePromise;
  }

  set templateURL(value) {
    Page.#templateURL = value;
  }

  get templateURL() {
    return Page.#templateURL;
  }

  async connectedCallback() {
    try {
      const templateContent = await Page.#getTemplateContent();

      this.shadowRoot.appendChild(templateContent.cloneNode(true));
    } catch (error) {
      this.shadowRoot.innerHTML =
        '<p style="color: red;">Failed to load component content.</p>';
    }
  }
  async disconnectedCallback() {
    Page.#templatePromise = null;
  }
}
