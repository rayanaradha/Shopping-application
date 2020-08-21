import {Router} from '@vaadin/router';
import './shop-app.js';
import './shop-404-warning.js';
import './shop-list.js';
import './shop-checkout-success.js';


const outlet = document.getElementById('outlet');
const router = new Router(outlet);

router.setRoutes([
  {path: '/', component: 'shop-app'},
  {path: '/cart', component: 'shop-app'},
  {path: '/cart/(.*)', component: 'shop-app'},
  {path: '/list/(.*)', component: 'shop-app'},
  {path: '/list-item/(.*)', component: 'shop-app'},
  {path: '/checkout', component: 'shop-app'},
  {path: '/checkout-success', component: 'shop-app'},
  {path: '(.*)', component: 'shop-404-warning'},
]);