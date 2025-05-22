import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ImSpinner2 } from 'react-icons/im';
import { BsFillExclamationDiamondFill } from 'react-icons/bs';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post('https://dummyjson.com/user/login', {
        username: formData.email,
        password: formData.password,
      });

      if (res.status === 200) {
        navigate('/');
      } else {
        setError('Login gagal. Cek kembali email & password.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Terjadi kesalahan saat login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-2 shadow-lg">
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
              Welcome Back 👋
            </h2>

            {error && (
              <div className="flex items-center text-red-500 text-sm bg-red-100 rounded p-3 mb-4">
                <BsFillExclamationDiamondFill className="mr-2" />
                {error}
              </div>
            )}

            {loading && (
              <div className="flex items-center text-blue-500 text-sm bg-blue-100 rounded p-3 mb-4">
                <ImSpinner2 className="mr-2 animate-spin" />
                Memproses login...
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                  placeholder="********"
                />
              </div>

              <div className="text-right">
                <Link
                  to="/forgot"
                  className="text-sm text-blue-400 hover:underline transition"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg"
              >
                {loading ? 'Loading...' : 'Log In'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="text-blue-400 hover:underline transition"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
