import { HeaderComponent } from "./HeaderComponent";

customElements.define('header-component', HeaderComponent);

const app = document.querySelector<HTMLDivElement>('#app')!;

function render(){
  app.innerHTML = /*HTML*/ `
  <header-component></header-component>
  `
}
render();