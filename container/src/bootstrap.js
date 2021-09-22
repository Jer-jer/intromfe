import { mount as prodMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartIndex';

console.log('hello world');

prodMount(document.querySelector('#the-products'));
cartMount(document.querySelector('#shop-cart'));