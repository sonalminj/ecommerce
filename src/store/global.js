import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  loading: true,
  error: false,
  products: [],
  cart: {},
  async fetchProducts() {
    this.loading = true;
    this.error = false;
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      this.products = res.data;
    } catch (err) {
      console.error(err);
      this.error = true;
    }
    this.loading = false;
  },
  addToCart(id) {
    if (id in this.cart) {
      this.cart[id]++;
    } else {
      this.cart[id] = 1;
    }
  },
  getProduct(id) {
    return this.products.find((prod) => prod.id == id);
  },

  cartCount() {
    return Object.values(this.cart).reduce((acc, count) => {
      return acc + count;
    }, 0);
  },
  setItemCount(id, count) {
    if (count === 0) {
      this.removeItem(id);
    } else {
      this.cart[id] = count;
    }
  },
  removeItem(id) {
    delete this.cart[id];
  },
  cartSubtotal() {
    return (
      Object.entries(this.cart).reduce((acc, [id, count]) => {
        return acc + this.getProduct(id).price * count;
      }, 0) * 80
    );
  },
  cartTotal() {
    return this.cartSubtotal() * 1.18;
  },
  cartItems() {
    console.log(this.cart)
    return Object.keys(this.cart).map((id) => this.getProduct(id));
  },
});
