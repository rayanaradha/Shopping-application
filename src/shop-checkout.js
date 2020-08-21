import {LitElement, html, css} from 'lit-element';
import { buttonStyles } from './shop-button.js';
import { commonStyles } from './shop-common-styles.js';
import { shopFormStyles } from'./shop-form-styles.js';
import { shopInputStyles } from './shop-input.js';
import { shopSelectStyles } from './shop-select.js';
import { shopCheckboxStyles } from'./shop-checkbox.js';

class ShopCheckout extends LitElement {
    static get styles() {
          return [
            buttonStyles,
            commonStyles,
            shopFormStyles,
            shopInputStyles,
            shopSelectStyles,
            shopCheckboxStyles,
            css`
     .main-frame {
        transition: opacity 0.5s;
      }

      :host([waiting]) .main-frame {
        opacity: 0.1;
      }

      shop-input, shop-select {
        font-size: 16px;
      }
            
       

      shop-select {
        margin-bottom: 20px;
      }

      paper-spinner-lite {
        position: fixed;
        top: calc(50% - 14px);
        left: calc(50% - 14px);
      }

      .billing-address-picker {
        margin: 28px 0;
        height: 20px;
        @apply --layout-horizontal;
      }

      .billing-address-picker > label {
        margin-left: 12px;
      }
      
      #billAddressHeading{
         padding-top: 22px;
       }

      .grid {
        margin-top: 40px;
        display: flex;
      }
           
  
  
      .grid > section {
        width: 100%;    
        text-align: left;
      }

      .grid > section:not(:first-child) {
        margin-left: 80px;
      }

      .row {
        width:100%;    
        display: inline-flex ; 
      }

      .column {
         width: 100%; 
         padding-top: 11px;   
      }
   
           
      .row > .flex,
      .input-row > * {
         width: inherit;
         font-weight: 200;   
      }

      .input-row > *:not(:first-child) {
        margin-left: 8px;
      }

      .shop-select-label {
        line-height: 20px;
      }

      .order-summary-row {
        font-weight: 400;    
        line-height: 24px;
      }

      .total-row {
        font-weight: 500;
        margin: 30px 0;
      }
            
    
            
      #pages{
            padding-top:40px;
       }      
        
      @media (max-width: 767px) {

        .grid {
          display: block;
          margin-top: 0;
        }

        .grid > section:not(:first-child) {
          margin-left: 0;
        }
            
        #pages {
         padding-top:0px;
       }
            
        header {
            margin-bottom: 0px;
            margin-top: 0px;
        }    
    }        
            

    `
          ]}
    
    render(){
        this.Items();
      return html`
         <div class="main-frame">
      <div id="pages">
        <div state="init">
            
              <form id="form-id" method="post" action="">

              <header class="subsection">
                <h1>Checkout</h1>
                <span>Shop is a demo app - form data will not be sent</span>
              </header>

              <div class="subsection grid">
                <section>
                  <h2 id="accountInfoHeading">Account Information</h2>
                  <div class="row input-row">
                    <shop-input>
                      <input type="email" id="accountEmail" name="accountEmail"
                          placeholder="Email" autofocus required
                          aria-labelledby="accountEmailLabel accountInfoHeading">
                      <shop-md-decorator error-message="Invalid Email" aria-hidden="true">
                        <label id="accountEmailLabel">Email</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                  </div>
                  <div class="row input-row">
                    <shop-input>
                      <input type="tel" id="accountPhone" name="accountPhone" pattern="\\d{10,}"
                          placeholder="Phone Number" required
                          aria-labelledby="accountPhoneLabel accountInfoHeading">
                      <shop-md-decorator error-message="Invalid Phone Number" aria-hidden="true">
                        <label id="accountPhoneLabel">Phone Number</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                  </div>
                  <h2 id="shipAddressHeading">Shipping Address</h2>
                  <div class="row input-row">
                    <shop-input>
                      <input type="text" id="shipAddress" name="shipAddress" pattern=".{5,}"
                          placeholder="Address" required
                          aria-labelledby="shipAddressLabel shipAddressHeading">
                      <shop-md-decorator error-message="Invalid Address" aria-hidden="true">
                        <label id="shipAddressLabel">Address</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                  </div>
                  <div class="row input-row">
                    <shop-input>
                      <input type="text" id="shipCity" name="shipCity" pattern=".{2,}"
                          placeholder="City" required
                          aria-labelledby="shipCityLabel shipAddressHeading">
                      <shop-md-decorator error-message="Invalid City" aria-hidden="true">
                        <label id="shipCityLabel">City</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                  </div>
                  <div class="row input-row">
                    <shop-input>
                      <input type="text" id="shipState" name="shipState" pattern=".{2,}"
                          placeholder="State/Province" required
                          aria-labelledby="shipStateLabel shipAddressHeading">
                      <shop-md-decorator error-message="Invalid State/Province" aria-hidden="true">
                        <label id="shipStateLabel">State/Province</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                    <shop-input>
                      <input type="text" id="shipZip" name="shipZip" pattern=".{4,}"
                          placeholder="Zip/Postal Code" required
                          aria-labelledby="shipZipLabel shipAddressHeading">
                      <shop-md-decorator error-message="Invalid Zip/Postal Code" aria-hidden="true">
                        <label id="shipZipLabel">Zip/Postal Code</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                  </div>
                  <div class="column">
                    <label id="shipCountryLabel" class="shop-select-label">Country</label>
                    <shop-select>
                      <select id="shipCountry" name="shipCountry" required
                          aria-labelledby="shipCountryLabel shipAddressHeading">
                        <option value="US" selected>United States</option>
                        <option value="CA">Canada</option>
                      </select>
                      <shop-md-decorator aria-hidden="true">
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-select>
                  </div>
                  <h2 id="billAddressHeading">Billing Address</h2>
                  <div class="billing-address-picker">
                    <shop-checkbox>
                      <input type="checkbox" id="setBilling" name="setBilling"
                          checked=${this.hasBillingAddress} @click=${this.toggleBillingAddress}>
                      <shop-md-decorator></shop-md-decorator aria-hidden="true">
                    </shop-checkbox>
                    <label for="setBilling">Use Same shipping address</label>
                  </div>
                  ${(!this.hasBillingAddress)?
                   html`
                    <div class="row input-row">
                      <shop-input>
                        <input type="text" id="billAddress" name="billAddress" pattern=".{5,}"
                            placeholder="Address" required$="[[hasBillingAddress]]"
                            autocomplete="billing street-address"
                            aria-labelledby="billAddressLabel billAddressHeading">
                        <shop-md-decorator error-message="Invalid Address" aria-hidden="true">
                          <label id="billAddressLabel">Address</label>
                          <shop-underline></shop-underline>
                        </shop-md-decorator>
                      </shop-input>
                    </div>
                    <div class="row input-row">
                      <shop-input>
                        <input type="text" id="billCity" name="billCity" pattern=".{2,}"
                            placeholder="City" required$="[[hasBillingAddress]]"
                            autocomplete="billing address-level2"
                            aria-labelledby="billCityLabel billAddressHeading">
                        <shop-md-decorator error-message="Invalid City" aria-hidden="true">
                          <label id="billCityLabel">City</label>
                          <shop-underline></shop-underline>
                        </shop-md-decorator>
                      </shop-input>
                    </div>
                    <div class="row input-row">
                      <shop-input>
                        <input type="text" id="billState" name="billState" pattern=".{2,}"
                            placeholder="State/Province" required$="[[hasBillingAddress]]"
                            autocomplete="billing address-level1"
                            aria-labelledby="billStateLabel billAddressHeading">
                        <shop-md-decorator error-message="Invalid State/Province" aria-hidden="true">
                          <label id="billStateLabel">State/Province</label>
                          <shop-underline></shop-underline>
                        </shop-md-decorator>
                      </shop-input>
                      <shop-input>
                        <input type="text" id="billZip" name="billZip" pattern=".{4,}"
                            placeholder="Zip/Postal Code" required$="[[hasBillingAddress]]"
                            autocomplete="billing postal-code"
                            aria-labelledby="billZipLabel billAddressHeading">
                        <shop-md-decorator error-message="Invalid Zip/Postal Code" aria-hidden="true">
                          <label id="billZipLabel">Zip/Postal Code</label>
                          <shop-underline></shop-underline>
                        </shop-md-decorator>
                      </shop-input>
                    </div>
                    <div class="column">
                      <label id="billCountryLabel" class="shop-select-label">Country</label>
                      <shop-select>
                        <select id="billCountry" name="billCountry" required$="[[hasBillingAddress]]"
                            autocomplete="billing country"
                            aria-labelledby="billCountryLabel billAddressHeading">
                          <option value="US" selected>United States</option>
                          <option value="CA">Canada</option>
                        </select>
                        <shop-md-decorator aria-hidden="true">
                          <shop-underline></shop-underline>
                        </shop-md-decorator>
                      </shop-select>
                    </div>
                  </div>
                `: html``}

                </section>

                <section>
                  <h2>Payment Method</h2>
                  <div class="row input-row">
                    <shop-input>
                      <input type="text" id="ccName" name="ccName" pattern=".{3,}"
                          placeholder="Cardholder Name" required
                          autocomplete="cc-name">
                      <shop-md-decorator error-message="Invalid Cardholder Name" aria-hidden="true">
                        <label for="ccName">Cardholder Name</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                  </div>
                  <div class="row input-row">
                    <shop-input>
                      <input type="tel" id="ccNumber" name="ccNumber" pattern="[\\d\\s]{15,}"
                          placeholder="Card Number" required
                          autocomplete="cc-number">
                      <shop-md-decorator error-message="Invalid Card Number" aria-hidden="true">
                        <label for="ccNumber">Card Number</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                  </div>
                 <label for="ccExpMonth">Expiry</label>
                  <div class="row input-row">
                    <div class="column">
                      <shop-select>
                        <select id="ccExpMonth" name="ccExpMonth" required
                             autocomplete="cc-exp-month" aria-label="Expiry month">
                          <option value="01" selected>Jan</option>
                          <option value="02">Feb</option>
                          <option value="03">Mar</option>
                          <option value="04">Apr</option>
                          <option value="05">May</option>
                          <option value="06">Jun</option>
                          <option value="07">Jul</option>
                          <option value="08">Aug</option>
                          <option value="09">Sep</option>
                          <option value="10">Oct</option>
                          <option value="11">Nov</option>
                          <option value="12">Dec</option>
                        </select>
                        <shop-md-decorator aria-hidden="true">
                          <shop-underline></shop-underline>
                        </shop-md-decorator>
                      </shop-select>
                    </div>
                    <shop-select>
                      <select id="ccExpYear" name="ccExpYear" required
                          autocomplete="cc-exp-year" aria-label="Expiry year">
                        <option value="2016" selected>2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                      </select>
                      <shop-md-decorator aria-hidden="true">
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-select>
                    <shop-input>
                      <input type="tel" id="ccCVV" name="ccCVV" pattern="\\d{3,4}"
                          placeholder="CVV" required
                          autocomplete="cc-csc">
                      <shop-md-decorator error-message="Invalid CVV" aria-hidden="true">
                        <label for="ccCVV">CVV</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                  </div>
                  <h2>Order Summary</h2>
       
          ${ this.cart.map(entry => html`
                      <div class="row order-summary-row">
                        <div class="flex">${entry.item.title}</div>
                        <div>${this.getEntryTotal(entry)}</div>
                      </div>`)}
   
                  <div class="row total-row">
                    <div class="flex">Total</div>
                    <div>${this.formatPrice(this.total)}</div>
                  </div>
                  <shop-button responsive id="submitBox" @click=${this.clearCart}>
                       <a href="/checkout-success">Place Order</a>
                  </shop-button>
                </section>
              </div>
            </form>
        </div>

`
                    
    }

  constructor(){
      super();
      this.hasBillingAddress=true;
  }

 
  static get properties() { 
      return {
        cart:{ type:Array},
        total:{type:String},
          
        hasBillingAddress:{ 
            type: Boolean,
        },
        
      }
   }
   
     Items(){
      if(localStorage.getItem('shop-cart-data')){
        this.cart=JSON.parse(localStorage.getItem('shop-cart-data'));
        this.total=0;
        for(let i=0; i<this.cart.length ; i++){
            this.total+=this.cart[i].item.price *this.cart[i].quantity;
        }
    }
  }


 toggleBillingAddress(e) {
   
        this.hasBillingAddress =e.target.checked;
  }
  
  getEntryTotal(entry) {
    return this.formatPrice(entry.quantity * entry.item.price);
  }
  
  formatPrice(total) {
    return isNaN(total) ? '' : '$' + total.toFixed(2);
  }
  
  clearCart(){
  this.dispatchEvent(new CustomEvent('clear-cart-item', {
      bubbles: true, composed: true
      }));
  }

}
customElements.define('shop-checkout', ShopCheckout);
