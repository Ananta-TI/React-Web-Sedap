export default function Register() {
    return (
      <section>


      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-2 shadow-lg">
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
              Create Your Account ✨
            </h2>
  
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                  placeholder="you@example.com"
                />
              </div>
  
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                  placeholder="********"
                />
              </div>
  
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  required
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                  placeholder="********"
                />
              </div>
  
              <button
                type="submit"
                className="w-full py-2 px-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
              >
                Register
              </button>
            </form>
  
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>
                Already have an account?{' '}
                <a
                  href="/Login"
                  className="text-blue-400 hover:underline transition"
                >
                  Log In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
  