export default class Component extends HTMLElement {
  static #templateCache = new Map();
  static #templateURL = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    console.log("attaching shadow");
  }

  static async #getTemplateContent(url) {
    console.log("fetching content");
    if (!Component.#templateCache) {
      Component.#templateCache = new Map();
    }

    if (Component.#templateCache.has(url)) {
      return Component.#templateCache.get(url);
    }

    const promise = fetch(`http://localhost:3000/${url}`)
      .then((res) => {
        console.log("res", res);
        if (!res.ok)
          throw new Error(`HTTP ${res.status} - Could not load ${url}`);
        return res.text();
      })
      .then((htmlString) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        const template = doc.querySelector("template");
        console.log("what");

        if (!template) {
          throw new Error(
            `No <template> element found in the fetched HTML from ${url}`,
          );
        }
        return template.content;
      })
      .catch((err) => {
        Component.#templateCache.delete(url);
        throw err;
      });

    Component.#templateCache.set(url, promise);
    return promise;
  }

  set templateURL(value) {
    Component.#templateURL = value;
  }

  get templateURL() {
    return Component.#templateURL;
  }

  async connectedCallback() {
    if (!this.templateURL) {
      console.error("No templateURL set for", this.tagName);
      return;
    }

    try {
      const content = await Component.#getTemplateContent(this.templateURL);
      this.shadowRoot.innerHTML = ""; // Clear any error messages
      this.shadowRoot.appendChild(content.cloneNode(true));

      if (this.onRendered) this.onRendered();
    } catch (error) {
      this.shadowRoot.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
  }

  async disconnectedCallback() {
    Component.#templateCache = null;
  }
}
