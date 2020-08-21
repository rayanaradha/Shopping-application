import {LitElement, html, css} from 'lit-element';

export const shopFormStyles  = css`
     :host {
        display: block;
      }

      .main-frame {
        margin: 0 auto;
        padding: 0 24px 48px 24px;
        max-width: 900px;
        overflow: hidden;
      }

      .empty-cart {
        text-align: center;
        white-space: nowrap;
        color: #757575;
      }

      h2 {
        font-size: 13px;
      }
    `;