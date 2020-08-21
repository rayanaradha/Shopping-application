import {LitElement, html, css} from 'lit-element';
import './shop-ripple-container.js';


class ShopTab extends LitElement {    
  static get styles() {
    return css`
      [hidden] {
        display: none !important;
      }

      :host {
        display: inline-block;
        position: relative;
      }

      #overlay {
        pointer-events: none;
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        @apply --shop-tab-overlay;
      }

      :host(.shop-tabs-overlay-static-above) #overlay {
        display: block;
      }
    `;
  }
  
  render() {
    return html`
        <div id="overlay"></div>
        <shop-ripple-container>
            <slot></slot>
        </shop-ripple-container>  
        
   `      
  }
}

customElements.define('shop-tab', ShopTab);

    