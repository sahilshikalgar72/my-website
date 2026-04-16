export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">MyShop</h1>
        <div className="flex gap-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/products" className="hover:underline">Products</a>
          <a href="/login" className="hover:underline">Login</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to MyShop!
        </h2>
        <p className="text-xl text-gray-500 mb-8">
          Find the best products at the best prices.
        </p>
        <a href="/products"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700">
          Browse Products
        </a>
      </div>

    </main>
  );
}