export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-600">
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="Error Illustration"
        className="w-64 mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">400 - Bad Request</h1>
      <p className="text-lg text-center mb-6">
        Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>
      <a
        href="/"
        className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
      >
        Kembali ke Beranda
      </a>
    </div>
  );
}
