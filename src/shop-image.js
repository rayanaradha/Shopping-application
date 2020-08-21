import {LitElement, html, css} from 'lit-element';

class ShopImage extends LitElement {
    static get styles() {
    return css`
     :host {
        display: block;
        position: relative;
        overflow: hidden;
        background-size: cover;
        background-position: center;
      }

      img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: -9999px;
        right: -9999px;
        margin: 0 auto;
        transition: 0.5s opacity;
        width: inherit;
      }
       
        @media (max-width: 767px){
            img {
                top: inherit;
            }
      }
    `;
  }
    
static get properties() { 
    return {
        alt: { type: String},
        src: { type: String},
    }
}    


 render() {
    return html`
     <img id="img" alt\=${this.alt} src=${this.src} margin:0;>
    `;
 }
 
}

customElements.define('shop-image', ShopImage);


