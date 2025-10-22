import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];

  constructor() {
    // load existing items from localStorage if available
    const stored = localStorage.getItem('cartItems');
    if (stored) this.cartItems = JSON.parse(stored);
  }

  addToCart(product: any) {
    this.cartItems.push(product);
    this.saveCart();
  }

  getCartItems() {
    return this.cartItems;
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.saveCart();
  }

  clearCart() {
    this.cartItems = [];
    this.saveCart();
  }

  private saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}
