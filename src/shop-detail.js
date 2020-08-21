import {LitElement, html, css} from 'lit-element';
import {Router} from '@vaadin/router';
import { buttonStyles } from './shop-button.js';
import { commonStyles } from './shop-common-styles.js';
import { shopSelectStyles} from './shop-select.js';
import  'dile-smooth-scroll/dile-smooth-scroll.js';
import "./shop-categorydata.js";
import './shop-image.js';


class ShopDetail extends LitElement {
    static get styles() {
       return [
            buttonStyles,
            commonStyles,
            shopSelectStyles,
            css`
 
      :host {
        display: block;
      }

      #content {
        display: flex
      }
            
      .message-container{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        } 
            
      .message-tab{
        display: inline-flex;
        padding: 9px;
        } 
        
       .modal-button{
          padding-left: 20px;
          padding-right: 20px;  
         } 
       
       .delete-button a{
        text-decoration: none;
        color:#757575;
        }
          
      .label{
        padding-right: 50px;
        padding-top: 10px;  
        font-weight: 400;
        font-size: 16px;    
      }      
            
      .delete-button{
        color:rgb(32, 32, 32);    
        border: none;
        background: none;
        font-size: 18px;
        position: absolute;
        right: 20px;    
       }     

      shop-image {
       width: 80%;
       max-width: 715px;
       margin: 64px 1px 0px 61px; 

      }

      shop-image::before {
        content: "";
        display: block;
      }

      .detail {
        text-align: left;    
        margin: 64px 32px;
        width: 50%;
        max-width: 400px;

      }

      .detail[has-content] {
        opacity: 1;
      }

      h1 {
        font-size: 24px;
        font-weight: 500;
        line-height: 28px;
        margin: 0;
      }

      .price {
        margin: 16px 0 40px;
        font-size: 16px;
        color: #757575;
        font-weight: 400;    
      }

      .description {
        margin: 32px 0;
      }

      .description > h2 {
        margin: 16px 0;
        font-size: 13px;
      }

      .description > p {
        margin: 0;
        color: #757575;
        font-weight: 500;    
      }

      .pickers {
        text-align-last: left;    
        border-top: 1px solid #ccc;
      }

      shop-select > select {   
        font-size: 16px;
        padding: 16px 24px 16px 70px;
      }

      @media (max-width: 767px) {

        #content {
          display: block;
        }

        shop-image {
          height: 400px;
          width: 75%;
          display: list-item;
          margin: 30px;
        }

        .detail {
          box-sizing: border-box;
          margin: 32px 0;
          padding: 0 24px;
          width: 100%;
          max-width: 600px;
        }  
            
        h1 {
          font-size: 20px;
          line-height: 24px;
        }

        .price {
          font-size: inherit;
          margin: 12px 0 32px;
        }
            
        .message-tab{
            bottom: 0px;
        } 
            
         .modal-button{
            padding:2px;
        }
         
        .label{
            padding:2px;
        } 
          
        .message-container{
            display: -webkit-box;
        }    
     }
        @media (max-width: 567px) {
            shop-image {
          height: 240px;
          width: 65%
        }
             
            .delete-button{
                right: 5px;    
            }     
            
        }
     
       
     `] }


 static get properties() {
    return {
        item: { type: String },
        category: { type: String },
        detail: {type:Array},
        isSucess: {type: Boolean},
        location:{ type: String },
        route:{ type: String }
    }
}  

 formatPrice(price) {
    return price ? '$' + (price*1).toFixed(2) : '';
  }
  
  
  Text(){
     this.shadowRoot.getElementById('desc').innerHTML=  this.unescapeText(this.detail.description);
  }
  
  unescapeText(text) {
    let elem = document.createElement('textarea');
    elem.innerHTML = text;
    return elem.textContent;
  }

 addToCart() {
    this.dispatchEvent(new CustomEvent('add-cart-item', {
      bubbles: true, composed: true, detail: {
        item: this.detail,
        quantity: parseInt(this.shadowRoot.getElementById('quantitySelect').value, 10),
        size: this.shadowRoot.getElementById('sizeSelect').value
      }}));
  this.isSucess=true;
  if(this.shadowRoot.getElementById("scroll")!=null){ 
        this.shadowRoot.getElementById("scroll").smoothScrollToTop();
    }
  if(this.route=="r" || this.route==undefined){
      this.route="s";
  }
  else{
      this.route="r";
  }
  } 
  
  
updated(){
    this.Text();
}

handleCategoriesyChanged(e) {

    this.categories = e.detail.categories.value;
    for(let i=0; i<this.categories.length ;i++){
        if(this.category==this.categories[i].name){           
            for(let j=0; j<this.categories[i].items.length ;j++){
                 if(this.categories[i].items[j].name==this.item){
                        this.detail=this.categories[i].items[j];
                   break;
                }
                
            }    
        }
    }
}


render(){
    return html`
        <dile-smooth-scroll id ="scroll"> </dile-smooth-scroll>
       <shop-categorydata  @categories-changed="${this.handleCategoriesyChanged}" categoryName=${this.category}></shop-categorydata>
       ${(this.isSucess)? html`
      <div class="message-container">    
        <div class="message-tab">
            <div class="label">Added to cart</div>
             <shop-button class="modal-button">
                <a href="/cart" on-click="close" id="viewCartAnchor">View Cart</a>
             </shop-button>
            <shop-button class="modal-button">
                <a href="/checkout" on-click="close">Checkout</a>
            </shop-button>
          <button class="delete-button">
                 <a href="/list-item/${this.category}/${this.detail.name}/${this.route}">X</a>
          </button>
        </div>
      </div>`: html``}    

  
 <div id="content">
         ${(this.detail!=undefined) ? 
            html`<shop-image alt="${this.detail.title}" src="${this.detail.largeImage}"></shop-image>
            <div class="detail">
                <h1>${this.detail.title}</h1>
             <div class="price">${this.formatPrice(this.detail.price)}</div>
        
        <div class="pickers">
          <shop-select>
            <label id="sizeLabel" prefix>Size</label>
            <select id="sizeSelect" aria-labelledby="sizeLabel">
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M" selected>M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <shop-md-decorator aria-hidden="true">
              <shop-underline></shop-underline>
            </shop-md-decorator>
          </shop-select><br>
        
          <shop-select>
            <label id="quantityLabel" prefix>Quantity</label>
            <select id="quantitySelect" aria-labelledby="quantityLabel">
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <shop-md-decorator aria-hidden="true">
              <shop-underline></shop-underline>
            </shop-md-decorator>
          </shop-select>
        </div>
        
       <div class="description" >
          <h2>Description</h2>
          <p id="desc"></p>
       </div>
        
        <shop-button responsive>
          <button @click=${this.addToCart} aria-label="Add this item to cart">Add to Cart</button>
        </shop-button>
       </div>
        `:html``}
    </div>
      

    `
}

}

customElements.define('shop-detail', ShopDetail);

