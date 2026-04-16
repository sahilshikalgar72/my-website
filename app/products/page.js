export default function Products() {
  const products = [
    { id: 1, name: "1oz Gold Bar", price: 3150, description: "999.9 Pure Gold Bar - LBMA Certified" },
    { id: 2, name: "1oz Silver Bar", price: 38, description: "999 Fine Silver Bar" },
    { id: 3, name: "1oz Gold Krugerrand", price: 3200, description: "South African Gold Coin" },
    { id: 4, name: "10oz Silver Bar", price: 360, description: "999 Fine Silver - Low Premium" },
    { id: 5, name: "1oz Platinum Bar", price: 1050, description: "999.5 Pure Platinum Bar" },
    { id: 6, name: "100g Gold Bar", price: 10100, description: "999.9 Pure Gold - PAMP Suisse" },
    { id: 7, name: "1oz Silver Coin", price: 42, description: "American Silver Eagle - BU" },
    { id: 8, name: "1kg Silver Bar", price: 1100, description: "999 Fine Silver - Best Value" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-yellow-700 text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🥇 BullionShop</h1>
        <div className="flex gap-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/products" className="hover:underline">Products</a>
          <a href="/login" className="hover:underline">Login</a>
        </div>
      </nav>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Bullion Products</h2>
        <p className="text-gray-500 mb-8">Buy gold, silver & platinum bullion at competitive prices</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <div className="bg-yellow-100 rounded-lg h-32 flex items-center justify-center mb-4">
                <span className="text-5xl">
                  {product.name.includes("Silver") ? "🥈" : product.name.includes("Platinum") ? "⬜" : "🥇"}
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