import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // Targets the text input in the textbox
  static targets = [ "name" ]

  //Display textbox input in console
  greet() {
     console.log(`Hello, ${this.name}!`)
  }

  // Accessor method for the value in the textbox
  get name() {
    return this.nameTarget.value
  }

}
