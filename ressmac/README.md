# Macstore Digital - Portal Reseller

Ini adalah kode sumber untuk portal reseller Macstore Digital. Portal ini dibuat untuk menyediakan informasi terbaru mengenai stok produk, harga, dan panduan lengkap bagi para reseller.

## 🚀 Menjalankan Proyek

Proyek ini tidak memerlukan proses *build* atau instalasi dependensi yang rumit. Cukup buka file `index.html` di browser web modern Anda.

1.  *Clone* repositori ini ke komputer Anda.
2.  Buka file `index.html` langsung di browser (contoh: Google Chrome, Firefox).

## 📂 Struktur Folder

Struktur proyek diatur sebagai berikut untuk kemudahan pemeliharaan:

```
/
├── index.html              # Halaman utama aplikasi
├── metadata.json           # Metadata untuk platform
├── README.md               # File yang sedang Anda baca
├── .gitignore              # Mengabaikan file yang tidak perlu di Git
└── src/                    # Berisi semua kode sumber React
    ├── index.tsx           # Titik masuk utama aplikasi React
    ├── App.tsx             # Komponen utama aplikasi
    ├── constants.ts        # Data produk dan konstanta lainnya
    ├── types.ts            # Definisi tipe TypeScript
    └── components/         # Direktori untuk semua komponen UI
        ├── Card.tsx
        ├── Header.tsx
        ├── Footer.tsx
        └── ... (komponen lainnya)
```

## ✨ Teknologi yang Digunakan

-   **React**: Untuk membangun antarmuka pengguna yang interaktif.
-   **TypeScript**: Untuk menambahkan tipe statis ke JavaScript.
-   **Tailwind CSS**: Untuk styling utilitas-pertama (via CDN).
-   **Font Awesome**: Untuk ikon (via CDN).