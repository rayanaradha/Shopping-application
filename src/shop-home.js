import {LitElement, html, css} from 'lit-element';
import { buttonStyles } from './shop-button.js';
import './shop-image.js';

class ShopHome extends LitElement {
    static get styles() {
        return [
            buttonStyles,
            css`
            .image-link {
                outline: none;
              }

              .image-link > shop-image::after {
                display: block;
                content: '';
                position: absolute;
                transition-property: opacity;
                transition-duration: 0s;
                transition-delay: 90ms;
                pointer-events: none;
                opacity: 0;
                top: 5px;
                left: 5px;
                right: 5px;
                bottom: 5px;
                outline: #2196F3 auto 5px;
                outline: -moz-mac-focusring auto 5px;
                outline: -webkit-focus-ring-color auto 5px;
              }

              .image-link:focus > shop-image::after {
                opacity: 1;
              }


            .item {
                cursor: pointer;
                display: block;
                text-decoration: none;
                text-align: center;
                margin-bottom: 40px;      
              }

            .item:nth-of-type(3),
              .item:nth-of-type(4) {
                display: inline-block;
                width: 50%;
                margin-left:-3px;

              }

             shop-image {
                position: relative;
                height: 320px;
                overflow: hidden;
            }

             h2 {
                font-size: 1.3em;
                font-weight: 500;
                margin: 32px 0;
                 cursor: text;
              }


              .item:nth-of-type(3) > h2,
              .item:nth-of-type(4) > h2 {
                font-size: 1.1em;
              }

             @media (max-width: 767px) {
                shop-image {
                  height: 240px;
                }

                h2 {
                  margin: 24px 0;
                }

                .item:nth-of-type(3) > shop-button > a,
                .item:nth-of-type(4) > shop-button > a {
                  padding: 8px 24px;
                }
              }


            `]
    }

    static get properties() {
        return {
            categories: { type: Array },
            page: { type: String },
        }
    }
    
    
    
    render() {
      return html`
             ${this.categories.map(item => html`
                <div class="item">
                    <a class="image-link" a href="/list/${item.name}">     
                        <shop-image .src=${item.image} .alt=${item.title} .placeholder-img=${item.placeholder}></shop-image>
                    </a>
                    <h2>${item.title}</h2>
                    <shop-button> <a aria-label=${item.title} Shop Now" a href="/list/${item.name}" >Shop Now</a></shop-button>   
                    <shop-categorydata categoryName=${item.title}></shop-categorydata>
                </div> `
             )}
        
    `}
}

customElements.define('shop-home', ShopHome);




