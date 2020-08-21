import {LitElement, html, css} from 'lit-element';

export const commonStyles = css`
      [hidden] {
        display: none !important;
      }

      header {
        text-align: center;
        margin-bottom: 35px;
        margin-top: 30px;
      }

      header > h1 {
        margin: 0 0 4px 0;
        font-size: 1.3em;
        font-weight: 500;
      }

      header > span {
        font-weight: 500;
        color: #757575;
        font-size: 12px;
      }

      header > shop-button[responsive] {
        margin-top: 20px;
      }

      @media (max-width: 767px) {

        header > h1 {
          font-size: 1.1em;
        }

      }

`;


