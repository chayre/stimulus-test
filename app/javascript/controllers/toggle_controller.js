import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // Reference the "show" class that will be added to the element
  static classes = [ "show", "hide" ]
  // Reference the target text
  static targets = [ "text", "one", "two" ]

 

  // When the toggle method is triggered, toggle the target's show class
  show() {
    this.textTarget.classList.toggle(this.showClass);
  }
  // When the toggle method is triggered, toggle the target's show class
  switch() {
    this.oneTarget.classList.toggle(this.hideClass);
    this.twoTarget.classList.toggle(this.showClass);
  }
}
