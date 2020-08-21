import {LitElement, html, css} from 'lit-element';
import 'dile-smooth-scroll/dile-smooth-scroll.js';
import { buttonStyles } from './shop-button.js';


class ShopCheckoutSuccess extends LitElement {
    static get styles() {
        return [
            buttonStyles,
            css`
              p{
        font-weight: 300;  
      }      
            
      h1{
        margin: 100px 0 4px 0;
        font-size: 1.3em;
        font-weight: 500;
      }`]}
    

render() {
      return html`
          <h1>Thank you</h1>
          <p>Demo checkout process complete.</p>
          <shop-button responsive>
            <a href="/">Finish</a>
          </shop-button>
                    `
    }
 }    
    
 customElements.define('shop-checkout-success', ShopCheckoutSuccess);   
