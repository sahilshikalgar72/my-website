'use client';

import Link from 'next/link';
import { useState } from 'react';

const CART_STORAGE_KEY = 'bullionshop-cart';

function readCart() {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  } catch {
    return [];
  }
}

function writeCart(cartItems) {
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
}

export default function ProductsClient({ products }) {
  const [cartCount, setCartCount] = useState(() =>
    readCart().reduce((sum, item) => sum + item.quantity, 0)
  );
  const [addedProductId, setAddedProductId] = useState(null);

  const addToCart = (product) => {
    const existingCart = readCart();
    const existingProduct = existingCart.find((item) => item.id === product.id);

    let nextCart;
    if (existingProduct) {
      nextCart = existingCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      nextCart = [
        ...existingCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ];
    }

    writeCart(nextCart);
    setCartCount(nextCart.reduce((sum, item) => sum + item.quantity, 0));
    setAddedProductId(product.id);

    window.setTimeout(() => {
      setAddedProductId(null);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-yellow-700 text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🥇 BullionShop</h1>
        <div className="flex gap-6 items-center">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/login" className="hover:underline">Login</Link>
          <span className="bg-white/20 rounded-full px-3 py-1 text-sm font-semibold">
            Cart: {cartCount}
          </span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Bullion Products</h2>
        <p className="text-gray-500 mb-8">Live data from database</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <div className="bg-yellow-100 rounded-lg h-32 flex items-center justify-center mb-4">
                <span className="text-5xl">
                  {product.category === 'Silver'
                    ? '🥈'
                    : product.category === 'Platinum'
                      ? '⬜'
                      : '🥇'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-3">{product.description}</p>
              <p className="text-yellow-700 font-bold text-lg">${product.price.toLocaleString()}</p>
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="mt-3 w-full bg-yellow-700 text-white py-2 rounded-lg hover:bg-yellow-800"
              >
                {addedProductId === product.id ? 'Added ✓' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
