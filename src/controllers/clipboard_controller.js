import { Controller } from "stimulus"

export default class extends Controller {
  static targets= [ "pizza" ]
  copy() {
    event.preventDefault();
    this.pizzaTarget.select()
    document.execCommand("copy")
    console.log(`Pizza? ${this.pizzaTarget.value}`)
  }
  connect() {
    if (document.queryCommandSupported("copy")) {
      this.element.classList.add("clipboard--supported");
    }
  }
}