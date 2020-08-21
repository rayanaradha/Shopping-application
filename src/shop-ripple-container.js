import {LitElement, html, css} from 'lit-element';

class ShopRippleContainer extends LitElement {    
  static get styles() {
    return css`
      :host {
        display: inline-block;
        position: relative;
      }
    `;
  }

  render() {
    return html`
        <slot></slot>
    `      
  }
}

customElements.define('shop-ripple-container', ShopRippleContainer);
