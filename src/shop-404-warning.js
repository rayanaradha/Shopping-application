import {LitElement, html, css} from 'lit-element';
import { buttonStyles } from  './shop-button.js';

class Shop404Warning extends LitElement {

 static get styles() {
        return [
            buttonStyles,
            css`

      :host {
        display: block;
        text-align: center;
        color: #757575;
      }

      h1 {
        margin: 50px 0 50px 0;
        font-weight: 300;
      }`
  ]}

render(){
    return html`
    
     <div>
        <h1>Sorry, we couldn't find that page</h1>
     </div>
    <shop-button>
        <a href="/">Go to the home page</a>
    </shop-button>
    `
}

}

customElements.define('shop-404-warning', Shop404Warning);
