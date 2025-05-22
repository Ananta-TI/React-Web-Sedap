# React Sedap 🍽️ - Vite + Tailwind + Router

Ini adalah proyek React modern dengan Vite yang telah dikonfigurasi menggunakan:

- ⚡️ Vite — build tool super cepat
- 💅 Tailwind CSS — styling utility-first
- 🔁 React Router DOM — routing halaman
- 📦 gh-pages — untuk deployment ke GitHub Pages
- 🧠 Context API — untuk state global seperti breadcrumb
- 🌀 Lazy Loading & Suspense — untuk pemuatan komponen dinamis
- 🛠️ ESLint — untuk menjaga kualitas kode

## 📂 Struktur Proyek

```
src/
├── components/       # Komponen UI global
├── context/          # Context API (contoh: BreadcrumbContext)
├── layouts/          # Layout untuk Auth/Main/Guest
├── pages/            # Semua halaman
├── App.jsx           # Routing utama
└── main.jsx          # Entry point aplikasi
public/
├── Data/             # Berisi data JSON yang digunakan via fetch
```

## 🚀 Jalankan secara lokal

```bash
npm install
npm run dev
```

Akses di browser: [http://localhost:5173](http://localhost:5173)

## 🛠️ Build untuk Production

```bash
npm run build
```

## 🌍 Deploy ke GitHub Pages

```bash
npm run deploy
```

> Pastikan repository GitHub sudah dikonfigurasi dengan benar di `package.json` dan remote git.

## 📋 Scripts

| Perintah        | Deskripsi                         |
|------------------|------------------------------------|
| `npm run dev`    | Jalankan server development        |
| `npm run build`  | Build aplikasi untuk production    |
| `npm run preview`| Preview hasil build secara lokal   |
| `npm run deploy` | Deploy ke GitHub Pages             |
| `npm run lint`   | Jalankan pengecekan linting        |

---

## 📦 Teknologi yang Digunakan

- React 19
- Vite 6
- Tailwind CSS 4
- React Router DOM 7
- Axios, React Icons, Framer Motion, Swiper, dan lainnya

---

## ✨ Kontribusi

Pull request dan saran perbaikan sangat diterima!

---

## 📄 Lisensi

MIT License © 2025 Ananta Firdaus
