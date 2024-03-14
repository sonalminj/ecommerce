<template>
    <main class="cart-page">
        <h1>Your Cart</h1>

        <br>
        <hr>
        <br>
        <br>

        <div v-if="Object.keys(store.cart).length == 0" class="text-center">
            Cart Empty
        </div>
        <table v-else class="cart-list full-width">
            <thead>
                <tr>
                    <th></th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th class="totals"> Subtotal </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="count, id in store.cart" :key="id" :set="item = store.getProduct(id)">
                    <td class="item-preview-container flex-row align-center" colspan="2">
                        <button class="remove-item-desktop" @click="() => store.removeItem(id)">X</button>
                        <img class="cart-item-preview" :src="item.image" />
                        <div class="cart-product-title flex-1">

                            <div>{{ item.title }}</div>
                            <div class="product-category">{{ item.category }}</div>
                        </div>
                    </td>
                    <td col-name="Price">{{ "₹ " + (item.price * 80).toFixed(2) }}</td>
                    <td col-name="Quantity"> <input class="item-quantity" type="number" :value="count"
                            @input="(e) => store.setItemCount(id, e.target.valueAsNumber)" /></td>
                    <td col-name="Subtotal" class="totals">{{ "₹ " + (item.price * 80 * 1.18 * count).toFixed(2) }}</td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <th colspan="3">Total (Excluding Tax)</th>
                    <td class="totals">{{ "₹ " + store.cartSubtotal().toFixed(2) }}</td>
                </tr>

                <tr>
                    <th colspan="3">GST (18%)</th>
                    <td class="totals">{{ "₹ " + (store.cartSubtotal() * 0.18).toFixed(2) }}</td>
                </tr>

                <tr>

                    <th colspan="3">Total</th>
                    <td class="totals">{{ "₹ " + store.cartTotal().toFixed(2) }}</td>
                </tr>
            </tfoot>
        </table>
        <div class="order-now">
            <button>Proceed to Payment</button>
        </div>
    </main>
</template>

<script>
import { store } from '@/store/global';

export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<style>
.full-width {
    width: 100%;
}

td.cart-list.align-left {
    text-align: left;
}

.order-now {
    display: flex;
    justify-content: flex-end;
    width: 100%
}

.cart-list td.totals,
.cart-list th.totals {
    text-align: right;
}

.cart-list td {
    text-align: center;
}

.item-quantity {
    height: 30px;
    width: 50px;
}

.item-quantity::-webkit-inner-spin-button,
.item-quantity::-webkit-outer-spin-button {
    opacity: 1;
}

:where(th, td):not(.expand) {
    width: 0;
    white-space: nowrap;
}

.cart-product-title {
    width: 100%;
    white-space: wrap;
    text-align: left;
}

.cart-list tfoot th,
.totals {
    text-align: right;
}

.flex-1 {
    flex: 1;
}



.full-width {
    width: 100%
}

.align-center {
    align-items: center;
}

.cart-page {
    margin: 50px;
}

.cart-list {
    border-collapse: separate;
    border-spacing: 0 1em;
    table-layout: auto;
}

.item-preview-container {
    gap: 40px;
    width: 100%;
}

img.cart-item-preview {
    width: 150px;
    height: 150px;
    object-fit: contain;
}

@media screen and (max-width: 800px) {
    .cart-list {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: stretch;
    }
    .cart-list thead {
        display: none;
    }

    .item-preview-container .cart-product-title {
        text-align: center;
    }

    .remove-item-desktop {
        display: none;
    }

    .cart-list>tr:nth-child(even) td,
    .cart-list>tbody>tr:nth-child(even) th {
        background-color: #eee;
    }


    .cart-list tbody tr {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 10px;
    }

    .cart-list tbody {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
    .cart-list tbody td {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .cart-list tfoot  {
        display: flex;
        flex-direction: column;
        margin-top: 100px;
    }

    .cart-list tfoot tr {
        display: flex;
        justify-content: flex-end;
        gap: 50px
    }
    :where(th, td):not(.expand) {
        width: unset;
        white-space: nowrap;
    }

    [col-name] {
        position: relative;
        /* width: 50%;*/
        vertical-align: middle;

    }

    [col-name]:before {
        content: attr(col-name);
        display: inline-block;
        vertical-align: middle;
        text-align: left;
        width: 50%;
        white-space: nowrap;
        overflow: hidden;
        font-weight: 600;
    }
    .item-preview-container {
        flex-direction: column;
    }
    .cart-list .item-preview-container .cart-product-title {
        text-align: left;
    }
}



</style>