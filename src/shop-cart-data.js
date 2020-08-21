import {LitElement, html, css} from 'lit-element';

class ShopCartData extends LitElement {
  
  static get properties() { 
    return {

        cart: { type: Array },

        numItems: {type: Number },

        total: { type: Number}
    }
}

  

  addItem(detail) {
    if(localStorage.getItem('shop-cart-data')){
        this.cart=JSON.parse(localStorage.getItem('shop-cart-data'));
    }
    else{
        this.cart =[];
    }   
    let i = this._indexOfEntry(detail.item.name, detail.size);
    if (i !== -1) {
      detail.quantity += this.cart[i].quantity;
    }
    this.setItem(detail);
  }
        


  setItem(detail) {
    if(localStorage.getItem('shop-cart-data')){
        this.cart=JSON.parse(localStorage.getItem('shop-cart-data'));
    }
    else{
        this.cart =[];
    }
   
    let i = this._indexOfEntry(detail.item.name, detail.size);
    
    if (detail.quantity === 0) {
       if (i !== -1) {
        this.cart.splice( i, 1);
       }
    }
       
    else if (i != -1 ) {
       if(this.cart[0]== []){
           this.cart[0] = detail;
       }
       else{
           this.cart.splice( i, 1, detail);
       }
    }
    else{
           this.cart.push( detail);
    }
     this.addToLocalStorage();
  }

 

  _indexOfEntry(name, size) {
    if (this.cart) {
      for (let i = 0; i < this.cart.length; ++i) {
        let entry = this.cart[i];
        if (entry.item.name === name && entry.size === size) {
          return i;
        }
      }
    }
    return -1;
  }
  
  clearCart() {
    this.cart = [];
    this.addToLocalStorage()
  }
  
  addToLocalStorage(){
      localStorage.setItem('shop-cart-data', JSON.stringify(this.cart));
  }
 
}

customElements.define('shop-cart-data', ShopCartData);


