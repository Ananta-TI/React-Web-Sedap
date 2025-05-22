import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
          <div className="text-center max-w-md bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold text-red-600 mb-4">HA!! Nyari Apo?</h1>
            <p className="text-gray-700 mb-6 text-sm">
              Halaman atau komponen yang kamu cari tidak bisa ditampilkan.
            </p>
            <a
              href="/"
              className="inline-block px-6 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition duration-300"
            >
              Kembali ke Beranda
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
