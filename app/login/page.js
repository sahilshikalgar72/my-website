export default function Login() {
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

      {/* Login Form */}
      <div className="flex items-center justify-center py-16">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">

          {/* Logo */}
          <div className="text-center mb-8">
            <span className="text-5xl">🥇</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">Welcome Back</h2>
            <p className="text-gray-500 mt-1">Login to your BullionShop account</p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-gray-700 font-medium mb-1 block">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium mb-1 block">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <button className="w-full bg-yellow-700 text-white py-3 rounded-lg font-bold text-lg hover:bg-yellow-800 mt-2">
              Login
            </button>
          </div>

          {/* Signup Link */}
          <p className="text-center text-gray-500 mt-6">
            Don't have an account?{" "}
            <a href="/signup" className="text-yellow-700 font-bold hover:underline">
              Sign Up
            </a>
          </p>

        </div>
      </div>
    </main>
  );
}
