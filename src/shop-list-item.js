import {LitElement, html, css} from 'lit-element';

class ShopListItem extends LitElement {
   static get styles() {
    return css`
     text-align: center;
        margin: 0 48px;
      }

      shop-image {
        cursor: pointer;
        margin: 32px 0 16px;
      }
        

      shop-image::before {
        position: relative;
        height: 320px;
        overflow: hidden;
        content: "";
        display: block;
      }

      .title {
        cursor: pointer;
        color: #202020;
        font-weight: bold;
        padding-top: 33px;
      }

      .price {
        color: #757575;
      }    
        
       @media (max-width: 767px) {
           shop-image{
            height: 200px;
            width: 200px;
           } 
          
           .title{
            width: 180px;
           } 

       }  
    `
 }

static get properties() {
    return {
    image: {type: String},
    title: {type: String},
    price: {type: String},
    item: {type: String}
  }
}

 updated(changedProperties) {
     
       if (changedProperties.has('item')) {
       let myEvent  = new CustomEvent('item-changed', {
        bubbles: true, 
        composed: true, 
        detail: {
            item:this.item
        }
        });
        this.dispatchEvent(myEvent);  
    }
}    

 formatPrice(price) {
    return price ? '$' + (price*1).toFixed(2) : '';
  }

  
render(){
    return html`
    ${(this.image!=undefined)?
    html`
        <div class= "item" @click =${(e)=> this.item=this.title}>
        <shop-image src="${this.image}" alt="${this.title}" ></shop-image>
        <div class="title">${this.title}<br>
        <span class="price">${this.formatPrice(this.price)}</span> </div>
    </div>`:html``}`   
}

}

customElements.define('shop-list-item' , ShopListItem);
