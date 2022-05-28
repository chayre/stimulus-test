import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "source" ]
  static classes = [ "supported" ]

  connect() {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === "granted") {
        this.element.classList.add(this.supportedClass);
      }
    });
  }

  copy() {
    navigator.clipboard.writeText(this.sourceTarget.value)
  }
}
