import { reactive } from "vue";

export const store = reactive({
  products: [],
  cart: {},
  addToCart(id) {
    if (id in this.cart) {
      this.cart[id]++;
    } else {
      this.cart[id] = 1;
    }
  },
  getProduct(id) {
    return this.products.find((prod) => prod.id === id);
  },
  cartItems() {
    return Object.values(this.cart).map((id) => this.getProduct(id));
  },
  cartCount() {
    return Object.values(this.cart).reduce((acc, count) => {
      return acc + count;
    }, 0);
  },
  clearCart() {
    this.cart = [];
  },
  cartTotal() {
    return Object.entries(this.cart).reduce((acc, [id, count]) => {
      return acc + this.getProduct(id).price * count;
    }, 0);
  },
});
