import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // Reference the class which makes text red
  static classes = ["red"]
  // Reference the text, length elements in DOM
  static targets = [ "text", "length" ]
  

  // By default, tell the user how many characters they've written. If it's over 260 characters, make the text red. If it goes back under 260, remove the red
  warn() {
    this.lengthTarget.innerHTML = `${this.input}/280`
    if (this.input >= 260) {
      this.lengthTarget.classList.add(this.redClass);
    } else if ((this.input <= 259) && (this.lengthTarget.classList.contains("red"))) {
      this.lengthTarget.classList.toggle(this.redClass);
    }
  
  }

  // this.input will now return the length of the user-inputted text
  get input() {
    return this.textTarget.value.length
  }
}