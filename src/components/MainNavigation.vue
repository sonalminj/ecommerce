<template>
  <header>
    <div>
      <div class="flex-row">

        <button class="menu-toggle" @click="toggleMenu">
          <font-awesome-icon icon="bars" />
        </button>
        <div class="logo">
          <img src="../assets/logo.png" alt="Logo" />
        </div>
      </div>
      <nav>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About Us</router-link>
        <router-link to="/products" class="nav-link">Products</router-link>
        <router-link to="/contact" class="nav-link">Contact Us</router-link>
      </nav>

      <router-link to="/cart" class="cart flex-row flex-center">
        <font-awesome-icon icon="shopping-cart" />
        <div class="cart-count">{{ store.cartCount() }}</div>
      </router-link>
    </div>
    <nav :class="menuOpen ? 'responsive-nav menu-open' : 'responsive-nav'" @click="toggleMenu">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About Us</router-link>
        <router-link to="/products" class="nav-link">Products</router-link>
        <router-link to="/contact" class="nav-link">Contact Us</router-link>
      </nav>
  </header>
  <!-- Other content of your landing page -->
</template>

<script>
import { store } from '@/store/global';

export default {
  name: 'MainNavigation',
  data() {
    return {
      store,
      menuOpen: false, // Controls the visibility of the navigation links
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style>
header {
  background-color: #333;
  color: white;
  padding: 10px 10px;
  position: sticky;
  top: 0;
  z-index: 100;
}

header> :not(.responsive-nav) {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header>.responsive-nav {
  display: none;
}

.cart {
  gap: 5px;
  color: white;
}

.flex-center {
  align-items: center;
  justify-content: center;
}

.cart-count {
  display: grid;
  place-items: center;
  padding: 1px 6px;
  border-radius: 8px;
  background-color: white;
  color: #333;
}

.logo img {
  max-height: 50px;
}

nav {
  display: flex;
  gap: 30px;
}

nav a {
  margin-right: 20px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav router-link:hover {
  text-decoration: underline;
}

.menu-toggle {
  display: none;
}

/* Responsive styles */
@media (max-width: 768px) {
  .nav-link {
    display: none;
    /* Hide navigation links on smaller screens */
  }

  .menu-toggle {
    display: block;
    /* Show hamburger menu on smaller screens */
  }

  .responsive-nav > *{
    width: 100%;
    padding: 5px;
    text-align: center;
  }

  .responsive-nav.menu-open {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu-open .nav-link {
    display: block;
    /* Show navigation links when menu is open */
  }
}
</style>
