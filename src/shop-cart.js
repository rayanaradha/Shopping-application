import {LitElement, html, css} from 'lit-element';
import {buttonStyles } from './shop-button.js';
import {commonStyles } from './shop-common-styles.js';
import {shopFormStyles } from './shop-form-styles.js';
import './shop-cart-item.js';

class ShopCart extends LitElement {
 static get styles() {
       return [
            buttonStyles,
            commonStyles,
            shopFormStyles,    
            css`
 
      .list {
        margin: 40px 0;
      }

      .checkout-box {
        font-weight: bold;
        text-align: right;
        margin-right: 10px;
      }

      .subtotal {
        margin: 0 64px 0 24px;
      }

      @media (max-width: 767px) {

        .subtotal {
          margin: 0 0 0 24px;
        }

      }
    `]
  }
  
 
  
  static get properties() { 
    return {
        checkout: {type:Array},
        total:{ type: Number},
        cart: { type:Array},
        hasItems: { type: Boolean},
        route:{ type: String }
        
    }
  }
  
  updated(changedProperties) {  
    if (changedProperties.has('checkout')) {
    let myEvent  = new CustomEvent('checkout-changed', {
    bubbles: true, 
    composed: true, 
    detail: {
        checkout:this.checkout,
        total: this.total
    }
    });
    this.dispatchEvent(myEvent);  
    }
 }

  
  Items(){
      if(localStorage.getItem('shop-cart-data')){
        this.cart=JSON.parse(localStorage.getItem('shop-cart-data'));
        this.hasItems= true;
        this.total=0;
        for(let i=0; i<this.cart.length ; i++){
            this.total+=this.cart[i].item.price *this.cart[i].quantity;
        }
    }
    
    if(this.cart.length==0){
        this.hasItems= false;
    }
  }

  formatTotal(total) {
        return isNaN(total) ? '' : '$' + total.toFixed(2);
  }


 getPluralizedQuantity(quantity) {
    return quantity + ' ' + (quantity === 1 ? 'item' : 'items');
  }
  
   render(){
      this.Items();
      return html`
    
     <div class="main-frame">
        ${(this.hasItems)? html`
          <header>
            <h1>Your Cart</h1>
            <span>(${this.getPluralizedQuantity(this.cart.length)})</span>
          </header>
       
        <div class="list">
         ${ this.cart.map(entry => html`
              <shop-cart-item .entry=${entry} .route=${this.route}></shop-cart-item>`)}
        </div>
        
         <div class="checkout-box">
           Total: <span class="subtotal">${this.formatTotal(this.total)}</span>
           <shop-button responsive>
             <a href="checkout">Checkout</a>
           </shop-button>
        </div>
            `
        
        :html` <p class="empty-cart">Your <img src="images/shopping-cart.png" id> is empty.</p>`}
    
        `
  }

}

customElements.define('shop-cart', ShopCart);
