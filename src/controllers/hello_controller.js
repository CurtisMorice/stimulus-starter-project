import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["name"]
  greet() {
    console.log(`in the hello_controller, ${this.name}`);
  }
  get name(){
      return this.nameTarget.value;
  }
}
