import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  //Reference the class which makes text red
  static classes = ["red"]
  // Reference the text, length elements in DOM
  static targets = [ "text", "length" ]
  

  // When the toggle method is triggered, toggle the target's show class
  warn() {
    this.lengthTarget.innerHTML = `${this.input}/280`
    if (this.input >= 260) {
      this.lengthTarget.classList.add(this.redClass);
    } else if ((this.input <= 259) && (this.lengthTarget.classList.contains("red"))) {
      this.lengthTarget.classList.toggle(this.redClass);
    }
  
  }

  // When the toggle method is triggered, toggle the target's show class
  get input() {
    return this.textTarget.value.length
  }
}