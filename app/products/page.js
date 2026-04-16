async function getProducts() {
  const response = await fetch('http://localhost:3000/api/products');
  const data = await response.json();
  return data;
}

export default async function Products() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-yellow-700 text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🥇 BullionShop</h1>
        <div className="flex gap-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/products" className="hover:underline">Products</a>
          <a href="/login" className="hover:underline">Login</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Bullion Products</h2>
        <p className="text-gray-500 mb-8">Live data from database</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <div className="bg-yellow-100 rounded-lg h-32 flex items-center justify-center mb-4">
                <span className="text-5xl">
                  {product.category === 'Silver' ? '🥈' : product.category === 'Platinum' ? '⬜' : '🥇'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-3">{product.description}</p>
              <p className="text-yellow-700 font-bold text-lg">${product.price.toLocaleString()}</p>
              <button className="mt-3 w-full bg-yellow-700 text-white py-2 rounded-lg hover:bg-yellow-800">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}