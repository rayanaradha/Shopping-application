import {LitElement, html, css} from 'lit-element';

export const buttonStyles = css`

      shop-button {
        cursor: pointer;
        display: inline-block;
      }

      shop-button > * {
        display: inline-block;
        box-sizing: border-box;
        border: 2px solid #000;
        background-color: #FFF;
        font-size: 14px;
        font-weight: 500;
        color: #202020;
        margin: 0;
        padding: 8px 44px;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        border-radius: 0;
        outline: none;
        -webkit-appearance: none;
      }

      shop-button > *:focus {
        background-color: #c5cad3;
      }

      shop-button > *:active {
        background-color: #000;
        color: #FFF;
      }

      @media (max-width: 767px) {

        /* Responsive buttons are used in shop-detail, shop-cart and shop-checkout */
        shop-button[responsive] {
          @apply --layout-fixed-bottom;
          height: 64px;
          z-index: 1;
        }

        shop-button[responsive] > * {
          width: -webkit-fill-available;
          position: absolute;
          height: fit-content;
          left: 0px;
          bottom: 0px;
          background-color: #172C50;
          border: none;
          color: white;
          font-size: 15px;
          padding: 20px;
        }

        shop-button[responsive] > *:focus {
          background-color: #172C50;
        }
            
        
        
      }
  `;

  
 
