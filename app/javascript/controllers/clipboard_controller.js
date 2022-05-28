import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // Reference the "source" target in HTML with sourceTarget
  static targets = [ "source" ]
  // Reference the "supported" CSS class in HTML with supportedClass
  static classes = [ "supported" ]

  // Upon connection, check the clipboard API to see if browser supports it
  // If it does (result.state === "granted"), add the supported class (which displays the clipboard button)
  // Otherwise don't add the supported class; default to not showing the clipboard button
  connect() {
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === "granted") {
        this.element.classList.add(this.supportedClass);
      }
    });
  }

  // After the button is clicked, copy the target text to the clipboard
  copy() {
    navigator.clipboard.writeText(this.sourceTarget.value)
  }
}
