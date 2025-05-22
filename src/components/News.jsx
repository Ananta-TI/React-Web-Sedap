import { useState } from "react";
import customers from "../Data/customers.json"; // sesuaikan path jika berbeda
const getBadgeColor = (loyalty) => {
  switch (loyalty) {
    case "Master":
      return "bg-red-500 text-gray-900";
    case "Gold":
      return "bg-yellow-500 text-yellow-900";
    case "Silver":
      return "bg-gray-400 text-gray-800";
    case "Bronze":
      return "bg-amber-600 text-white";
    default:
      return "bg-gray-200 text-black";
  }
};
const MembershipCheckSection = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const validateEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  };
  const handleCheck = () => {
    setError("");
    setResult(null);
    if (!email.trim()) {
      setError("Email tidak boleh kosong.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Format email tidak valid.");
      return;
    }
    const found = customers.find(
      (customer) => customer.Email.toLowerCase() === email.toLowerCase()
    );
    if (found) {
      setResult({
        found: true,
        name: found["Customer Name"],
        loyalty: found.Loyalty,
      });
    } else {
      setResult({ found: false });
    }
  };

  return (
    <section id="member" className="relative bg-[#0f0e13] text-white py-16 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/bg/noise.gif')",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
          opacity: 0.08,
        }}/>
      <div className="bg-transparent py-16 px-6 md:px-60 border-8 border-zinc-900 rounded-xl z-10 max-w-4xl mx-auto text-center shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Cek Keanggotaan
        </h3>
        <p className="text-gray-400 mb-6">
          Masukkan email Anda untuk mengetahui status member Anda
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
          <input
            type="email"
            placeholder="Email Anda"
            className="w-full sm:flex-1 px-4 py-3 z-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500 dark:bg-gray-900 dark:border-zinc-800 dark:text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <button
            onClick={handleCheck}
            className="w-full sm:w-auto z-10 bg-zinc-700 hover:bg-lime-500 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
            Cek
          </button>
        </div>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        {result && result.found && (
          <div
            className={`mt-4 p-4 rounded-lg font-semibold text-center ${getBadgeColor(result.loyalty)}`}>
            🧾 Selamat datang, {result.name}! Anda adalah member{" "}
            <span className="underline">{result.loyalty}</span>.
          </div>
        )}
        {result && !result.found && (
          <div className="mt-4 p-4 rounded-lg bg-red-500 text-white font-semibold">
            ❌ Email tidak terdaftar sebagai member.
          </div>
        )}
      </div>
    </section>
  );
};
export default MembershipCheckSection;
