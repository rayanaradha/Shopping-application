import {LitElement, html, css} from 'lit-element';
import {shopSelectStyles} from './shop-select.js';
import './shop-image.js';

class ShopCartItem extends LitElement  {
 static get styles() {
        return [
            shopSelectStyles,
            css`
       
      :host {
        display: flex;    
        position: relative;
        margin-bottom: 24px;
      }

      shop-image {
        position: relative;    
        width: 72px;
        height: 72px;
        overflow: hidden;    
      }
            
            
      #quantitySelect{    
          width: fit-content;
      }      
            
     shop-select { 
        width: 50%;
     }          

      shop-select > select {
        font-size: 16px;
        padding-left: 40px;
      }

      shop-select > shop-md-decorator {
        font-size: 12px;
        border: none;
      }

      .name {
        disply: flex;
        width: 358px;
        text-align: left;    
        line-height: 20px;
        font-weight: 500;
        float: left;
        margin-top: 26px;
        margin-right: 30px;
      }

      .delete-button a{
        text-decoration: none;
        color:#757575;
        }
    
      .name a {
        padding-top: 5px;  
        display: inline-block;
        max-width: 100%;
        text-decoration: none;
        color: #202020;
        white-space: nowrap;
      
      }
            

      .price, .size {
        font-weight:400;    
        display: inline-block;
        white-space: nowrap;
        color: #757575;
      }

      .size {
        margin-right: 10px;    
        padding-top: 6px;    
        min-width: 70px;
        width: 144px;
      }

      .size > span {
        margin-left: 10px;
      }

      .price {    
        min-width: 70px;
        width: 100px;
      }

      .quantity {
        margin-right: -35px;    
        min-width: 50px;
        width: 160px;
      }

      .delete-button {
        padding-top: 10px;    
        background: none;
        border: none;    
        width: 34px;
        height: 34px;
        color: #757575;
        display: inline-block;
        top: 18px;
        right: 0;
      }
   

      .flex {
        display: table-row;
        margin-left: 24px;
      }

      .detail {
        display: -webkit-box; 
        margin-top: 26px;
        margin-right: 30px;
        height: 20px;
      }
         
         
      @media(max-width: 1000px){
        .name{
            width: 220px;
        }
        .size{
            width: 90px;
        }   
        .quantity{
            width: 90px;
        }
        .price{
            width: 90px;
        }       
      }   
         

      @media (max-width: 667px) {
        .flex {
          margin-left: 10px;
          display:grid;  
        }

        .name {
          margin-top: 16px;
          margin-right: 0;
          width: calc(100% - 40px);
        }

        .detail {
          margin: 10px 10px 0 0;
            
        }

        .quantity, .size, .price {
          text-align: right;
          width: auto;
        }

        .delete-button {
          top: 8px;
        }
      }

     
            `]
      }


  static get properties() { return {

    entry:{type: Array},
    route:{type: String},
    

  }}

  quantityChange() {
    this.setCartItem(parseInt(this.shadowRoot.getElementById("quantitySelect").value, 10));
    if(this.route=="r" || this.route==undefined){
      this.route="s";
  }
  else{
      this.route="r";
  }
  }

  setCartItem(quantity) {
    this.dispatchEvent(new CustomEvent('set-cart-item', {
      bubbles: true, composed: true, detail: {
        item: this.entry.item,
        quantity: quantity,
        size: this.entry.size
      }}));
  }

  formatPrice(price) {
    return price ? '$' + price.toFixed(2) : '';
  }

  removeItem() {
    this.setCartItem(0);
    if(this.route=="r" || this.route==undefined){
      this.route="s";
  }
  else{
      this.route="r";
  }
  }
  
render(){
  
 return html`
    <a href="/list-item/${this.entry.item.category}/${this.entry.item.name}" title="${this.entry.item.title}">
      <shop-image src="${this.entry.item.image}" alt="${this.entry.item.title}"></shop-image>
    </a>
    <div class="flex">
      <div class="name">
        <a href="/list-item/${this.entry.item.category}/${this.entry.item.name}">${this.entry.item.title}</a>
      </div>
      <div class="detail">
      
       <div class="quantity">
          <shop-select>
            <label prefix="">Qty:</label>
           
            <select id="quantitySelect" aria-label="Change quantity" .value=${this.entry.quantity} @click=${this.quantityChange}">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option> 
            </select>
        
            <shop-md-decorator aria-hidden="true"></shop-md-decorator>
          </shop-select>
        </div>
        <div class="size">Size: <span>${this.entry.size}</span></div>
        <div class="price">${this.formatPrice(this.entry.item.price)}</div>
        <button class="delete-button"  @click =${this.removeItem}>
            <a href="/cart/${this.route}"> X  </a>  
        </button>
      </div>
    </div>
    `
  }
} 

customElements.define('shop-cart-item', ShopCartItem);

