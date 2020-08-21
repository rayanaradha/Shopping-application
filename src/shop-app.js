import {LitElement, html, css} from 'lit-element';
import  'dile-smooth-scroll/dile-smooth-scroll.js';
import "./shop-home.js";
import "./shop-categorydata.js";
import "./shop-tab.js";
import "./shop-list.js";
import "./shop-detail.js";
import "./shop-cart.js";
import "./shop-cart-data.js";
import "./shop-checkout.js";
import "./index.js";


class ShopApp extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        position: relative;
        padding-top: 10px;
        padding-bottom: 64px;
        min-height: 100vh;
        color: #202020;;
      }

      :host(:not([page=detail])) .back-btn {
        display: none;
      }

            
     .logo {
        margin-left: auto;
        text-align: center;
      }

      .logo a {
        padding-left: 50px;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.3em;
        text-decoration: none;
        color: #000;
        /* required for IE 11, so this <a> can receive pointer events */
        display: inline-block;
        pointer-events: auto;
        cursor: pointer;
      }
        
      .cart-buttoon{
            cursor: pointer;
            padding-right: 20px;
            display: block;
            margin-left: auto;
            background: none;
            border: none;
       }  
        
      #tabContainer {
        position: relative;
        height: 50px;
      }

      shop-cart-modal {
        z-index: 2;
      }
      
     shop-tab a:active {         
         border-bottom: 2px solid #172C50;;
      }
     
     shop-tab a:hover {
        background-color: lightgray;
      }

      shop-tabs {
        height: 100%;
      }

      shop-tab {
        margin: 0 10px;
      }

      shop-tab a {
        display: inline-block;
        outline: none;
        padding: 9px 5px;
        font-size: 13px;
        font-weight: 500;
        text-decoration: none;
        color: #202020; 
        cursor: pointer;
      }
        
       .cart-badge {
        position: absolute;
        top: 7px;
        right: 10px;
        width: 20px;
        height: 20px;
        background-color:#172C50;
        border-radius: 50%;
        color: white;
        font-size: 12px;
        font-weight: 500;
        pointer-events: none;
        @apply --layout-vertical;
        @apply --layout-center-center;
      }  

     .app-toolbar{
        display: flex;
        padding-bottom: 25px;
        padding-top: 10px;
     }

      footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        margin-top: 20px;
        line-height: 24px;
      }

      footer > a {
        color: #757575;
        text-decoration: none;
      }

      footer > a:hover {
        text-decoration: underline;
      }

      .demo-label {
        box-sizing: border-box;
        width: 120px;
        padding: 6px;
        margin: 8px auto 0;
        background-color: #202020;
        color: white;
        text-transform: uppercase;
      }

      /* small screen */
      @media (max-width: 767px) {
    
        .menu-btn {
          display: block;
        }

        :host([page=detail]) .menu-btn {
          display: none;
        }
        
        footer {
            display: none;
        }
        
        @media (max-width: 767px) {    
            shop-tab {
                display: contents
            }            
        }
        
        @media (max-width: 467px) {
           
            #tabContainer {
                height: 70px;
            }
        
             shop-tab a {
                margin-left: 10px;
                margin-right: 10px;
            }
        }
      }`
        
 }
  
 static get properties() { 
     return {
      page : {type:String}, 
      cart : {type:String}, 
      tab : {type:Boolean},
      categories: {type: Array},
      pageName: { type: String },
      selectedItem: { type: String },
      selectedCategory: { type: String },
      checkout: {type: Array},
      numItems:{type: String},
      route:{type: String},
      cartRoute:{type: String}
     };
 }
 
       
 handleCategoriesChanged(e) {
    this.categories = e.detail.categories.value;
}

 onAddCartItem(e){
    this.shadowRoot.getElementById("cart").addItem(e.detail);
  }
  
 onSetCartItem(e){
    let detail = e.detail;
    this.shadowRoot.getElementById("cart").setItem(detail); 
 }
 
 onClearCartItem(){
    this.shadowRoot.getElementById("cart").clearCart();     
 }
 
ItemsCount(){
      if(localStorage.getItem('shop-cart-data')){
        this.numItems=JSON.parse(localStorage.getItem('shop-cart-data')).length;
      }
      else{
          this.numItems=0;
      }
       return this.numItems;
 }
 

 pageChanged(){
 this.tab=false; 
     if(this.location.pathname.split('/')[1]=='list'){
         this.page="list";
         this.pageName = this.location.pathname.split('/')[2]
     }
     else if(this.location.pathname.split('/')[1]=='list-item'){
         this.page="detail";
         this.selectedCategory = this.location.pathname.split('/')[2]
         this.selectedItem = this.location.pathname.split('/')[3]
         this.route = this.location.pathname.split('/')[4]
        
     }
     else if(this.location.pathname.split('/')[1]=='cart'){
         this.page="cart";
         this.cartRoute = this.location.pathname.split('/')[2]
         this.tab=true;
     }
     else if(this.location.pathname.split('/')[1]=='checkout'){
         this.page="checkout";
         this.tab=true;
     }
     else if(this.location.pathname.split('/')[1]=='checkout-success'){
         this.page="checkout-success";
         this.tab=true;
     }
      else if(this.location.pathname.split('/')[1]==''){
         this.page="home"
     }
   
    if(this.shadowRoot.getElementById("scroll")!=null){ 
        this.shadowRoot.getElementById("scroll").smoothScrollToTop();
    }
    
 }

 
  render() {
   
    this.pageChanged();
    return html` 
    <dile-smooth-scroll id ="scroll"> </dile-smooth-scroll>
    <shop-categorydata  @categories-changed="${this.handleCategoriesChanged}"></shop-categorydata>
    <shop-cart-data id="cart"></shop-cart-data>
    
    <div class="app-toolbar">
        <div class="logo"><a href="/">SHOP</a></div>  
        <button class="cart-buttoon"> <a href="/cart" ><img src="images/shopping-cart.png" id> </a></button> 
        ${(this.numItems!=0) ? html`<div class="cart-badge">${this.ItemsCount()}</div>`:html``}
    </div>
    
        
                
        ${(this.categories!=undefined && !this.tab) ? 
        html`<div id="tabContainer">  
                ${this.categories.map(item => html`<shop-tab name="${item.name}"><a href="/list/${item.name}">${item.title}</a></shop-tab>`)}
              </div>` :  html``}
        
        ${ (this.page=='home')? 
           html  `<shop-home .categories=${this.categories}></shop-home>` :  html``}
          
        ${ (this.page=='list')? 
           html `<shop-list location=${this.pageName}></shop-list>` :  html``} 
           
        ${ (this.page=='detail')? 
           html ` <shop-detail .item=${this.selectedItem} .category=${this.selectedCategory} .route=${this.route} @add-cart-item=${this.onAddCartItem}></shop-detail>` :  html``} 
           
        ${ (this.page=='cart')? 
           html ` <shop-cart  .route=${this.cartRoute} @set-cart-item=${this.onSetCartItem} ></shop-cart>` :  html``}   
        
        ${ (this.page=='checkout')? 
           html ` <shop-checkout @clear-cart-item=${this.onClearCartItem}></shop-checkout>` :  html``}  
        
        ${ (this.page=='checkout-success')? 
           html ` <shop-checkout-success><shop-checkout-success>` :  html``}     
             
  
    <footer>
      <div class="demo-label">Demo Only</div>
    </footer>
        
    `
    }
}

customElements.define('shop-app', ShopApp);





