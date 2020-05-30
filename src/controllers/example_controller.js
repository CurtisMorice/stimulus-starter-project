import { Controller } from "stimulus"

export default class extends Controller {
  greet() {
    console.log('Hi', this.element)
    this.element.textContent = "It works!"
  }
}
