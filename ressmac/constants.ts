import { ProductCategoryData } from './types';

export const WHATSAPP_PHONE_NUMBER = '6283853289396';
export const WHATSAPP_RESELLER_GREETING = 'Hi, Saya Ress Mac';


export const productCategories: ProductCategoryData[] = [
    {
        id: 'promo-spesial',
        title: 'PROMO SPESIAL',
        iconClass: 'fas fa-tags',
        categoryTitle: 'Paket Promo Eksklusif',
        categoryIconClass: 'fas fa-box-open',
        products: [
            { name: 'Paket Bundle Capcut Pro Private 12 Bulan GRATIS Canva Pro 12 Bulan & Youtube Premium 1 Bulan', description: 'Promo Terbatas, jika produk masih tampil berarti masih tersedia! (Garansi 12 Bulan)', price: 'Rp 149.000', image: 'https://macstoredigital.id/img/paket-bundle.png' },
            { name: 'Paket Bundle Capcut Pro Private 6 Bulan GRATIS Canva Pro 6 Bulan & Youtube Premium 1 Bulan', description: 'Promo Terbatas, jika produk masih tampil berarti masih tersedia! (Garansi 6 Bulan)', price: 'Rp 79.000', image: 'https://macstoredigital.id/img/paket-bundle.png' },
            { name: 'Paket Bundle Capcut Pro Private 4 Bulan GRATIS Canva Pro 4 Bulan & Youtube Premium 1 Bulan', description: 'Promo Terbatas, jika produk masih tampil berarti masih tersedia! (Garansi 4 Bulan)', price: 'Rp 49.000', image: 'https://macstoredigital.id/img/paket-bundle.png' },
            { name: 'Paket Bundle CapCut Pro Private 1 Bulan & Canva Pro 1 Bulan', description: 'Promo Terbatas, jika produk masih tampil berarti masih tersedia! (Garansi 1 Bulan)', price: 'Rp 19.000', image: 'https://macstoredigital.id/img/paket-bundle1.png' }
        ],
        note: {
            title: 'Penting untuk Promo Spesial:',
            points: [
                '**Canva:** Kirimkan email, kami akan kirimkan link untuk join tim agar Anda bisa akses Canva Pro.',
                '**CapCut:** Akun disediakan oleh kami dan bisa digunakan sampai **3 device** per akun.',
                '**Youtube:** Pastikan akun Gmail Anda belum pernah mendaftarkan YouTube Premium, atau jika sudah, minimal 12 bulan yang lalu, agar bisa masuk menjadi family dan bisa akses YouTube Premium.'
            ],
            guidesTitle: 'Panduan Lengkap:',
            guideLinks: [
                { text: 'Cara Login CapCut Pro', url: 'https://www.notion.so/Cara-Login-CapCut-Pro-Private-237b68103c0880328218fb5ff80468bf?source=copy_link', type: 'notion' },
                { text: 'Cara Gabung Canva Pro', url: 'https://www.notion.so/Cara-Masuk-Canva-Pro-237b68103c0880879199f036f6eb006c?source=copy_link', type: 'notion' },
                { text: 'Cara Pindahkan Desain Canva', url: 'https://www.youtube.com/watch?v=JSVAIo3a17s', type: 'youtube' }
            ]
        }
    },
    {
        id: 'desain-editing',
        title: 'DESAIN & EDITING',
        iconClass: 'fas fa-pencil-ruler',
        categoryTitle: 'Alat & Aplikasi Desain & Editing',
        categoryIconClass: 'fas fa-magic',
        products: [
            { name: 'CapCut Pro Private 1 Bulan', description: 'Akun Private dari kami & bisa digunakan sampai 3 device (Garansi 1 Bulan)', price: 'Rp 19.000', image: 'https://macstoredigital.id/img/capcut.png' },
            { name: 'Canva Pro 1 Bulan', description: 'Menggunakan akun pembeli (Garansi 1 Bulan)', price: 'Rp 2.000', image: 'https://macstoredigital.id/img/canva.png' },
            { name: 'Canva Pro 12 Bulan', description: 'Menggunakan akun pembeli (Garansi 12 Bulan)', price: 'Rp 19.000', image: 'https://macstoredigital.id/img/canva.png' },
            { name: 'Canva Pro Lifetime (Selamanya)', description: 'Menggunakan akun pembeli (Garansi 2 Tahun)', price: 'Rp 29.000', image: 'https://macstoredigital.id/img/canva.png' },
            { name: 'Gemini Pro Private 1 Tahun', description: 'Menggunakan akun dari pembeli | Benefit: storage 2 TB (Google Drive, Google Foto, dll), Gemini Pro (VEO3), Gemini in (Gmail, Docs, Sheet), Google Meet 24 Jam NonStop, Google Calendar Premium, dll (Garansi 10 Bulan)', price: 'Rp 39.000', image: 'https://macstoredigital.id/img/gemini.png' },
            { name: 'Alight Motion Private 12 Bulan', description: 'Akun Private dari kami & bisa digunakan sampai 3 device (Garansi 1 Tahun)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/alightmotion.png' },
            { name: 'Remini Private (Web Only) 1 Bulan', description: 'Akun Private dari kami (Garansi 28 Hari)', price: 'Rp 15.000', image: 'https://macstoredigital.id/img/remini.png' },
            { name: 'Remini Private (Mobile IOS & Android) 1 Bulan', description: 'Akun Private dari kami (Garansi 1 Tahun)', price: 'Rp 19.000', image: 'https://macstoredigital.id/img/remini.png' },
            { name: 'Adobe Lightroom (Web Only) Sharing 1 Tahun', description: 'Akun Sharing dari kami (Garansi 10 Bulan)', price: 'Rp 19.000', image: 'https://macstoredigital.id/img/adobelightroom.png' },
            { name: 'Adobe Lightroom (Mobile IOS & Android) Sharing 1 Tahun', description: 'Akun Sharing dari kami (Garansi 10 Bulan)', price: 'Rp 29.000', image: 'https://macstoredigital.id/img/adobelightroom.png' },
            { name: 'Figma Pro 24 Bulan', description: 'Akun dari kami (Garansi 12 Bulan)', price: 'Rp 99.000', image: 'https://macstoredigital.id/img/figma.png' },
            { name: 'Picsart Private 1 Bulan', description: 'Akun Private dari kami (Garansi 25 Hari)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/picsart.png' },
            { name: 'Polarr Sharing 12 Bulan', description: 'Akun Sharing dari kami (Garansi 6 Bulan)', price: 'Rp 19.000', image: 'https://macstoredigital.id/img/polarr.png' },
            { name: 'Dazzcam Lifetime (Selamanya) (IOS Only)', description: 'Akun Sharing dari kami (Garansi 6 Bulan)', price: 'Rp 19.000', image: 'https://macstoredigital.id/img/dazzcam.png' },
            { name: 'Oldroll Lifetime (Selamanya) (Android Only)', description: 'Akun Sharing dari kami (Garansi 6 Bulan)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/oldroll.png' },
            { name: 'VSCO Sharing 1 Bulan', description: 'Akun Sharing dari kami (Garansi 25 Hari) (Konfirmasi Device Yang Digunakan ke Admin)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/vsco.png' },
            { name: 'Camscanner 1 Bulan', description: 'Akun Private dari kami (Garansi 25 Hari) (Butuh 12 Bulan? Tanya Admin)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/camscanner.png' },
            { name: 'Meitu Sharing 1 Bulan', description: 'Akun Sharing dari kami (Garansi 25 Hari)', price: 'Rp 18.000', image: 'https://macstoredigital.id/img/meitu.png' },
            { name: 'IBIS PAINT (Android Only) Sharing 1 Bulan', description: 'Akun Sharing dari kami (Garansi 25 Hari)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/ibis.png' }
        ],
        note: {
            title: 'Catatan Penting untuk Desain & Editing:',
            points: [
                '**Canva:** Kirimkan email, kami akan kirimkan link untuk join tim agar bisa akses Canva Pro.',
                '**CapCut:** Akun dari kami dan bisa digunakan sampai 3 device per akun.'
            ],
            guidesTitle: 'Panduan Lengkap:',
            guideLinks: [
                { text: 'Cara Login CapCut Pro', url: 'https://www.notion.so/Cara-Login-CapCut-Pro-Private-237b68103c0880328218fb5ff80468bf?source=copy_link', type: 'notion' },
                { text: 'Cara Gabung Canva Pro', url: 'https://www.notion.so/Cara-Masuk-Canva-Pro-237b68103c0880879199f036f6eb006c?source=copy_link', type: 'notion' },
                { text: 'Cara Pindahkan Desain Canva', url: 'https://www.youtube.com/watch?v=JSVAIo3a17s', type: 'youtube' }
            ]
        }
    },
    {
        id: 'ai-tools',
        title: 'AI TOOLS',
        iconClass: 'fas fa-robot',
        categoryTitle: 'Solusi Kecerdasan Buatan',
        categoryIconClass: 'fas fa-brain',
        products: [
            { name: 'ChatGPT Pro Sharing 1 Bulan', description: 'Menggunakan email pembeli (Garansi 28 Hari)', price: 'Rp 10.000', image: 'https://macstoredigital.id/img/chatgpt.png' },
            { name: 'ChatGPT Pro Private 1 Bulan', description: 'Akun Private dari kami atau bisa menggunakan akun pembeli (Garansi 28 Hari)', price: 'Rp 19.000', image: 'https://macstoredigital.id/img/chatgpt.png' },
            { name: 'ChatGPT Pro Private 3 Bulan', description: 'Menggunakan email pembeli (Garansi 3 Bulan)', price: 'Rp 49.000', image: 'https://macstoredigital.id/img/chatgpt.png' },
            { name: 'ChatGPT Go Private 12 Bulan', description: 'Akun Private dari kami atau bisa menggunakan akun pembeli (Garansi 11 Bulan)', price: 'Rp 59.000', image: 'https://macstoredigital.id/img/chatgpt.png' },
            { name: 'Gemini Pro 1 Tahun', description: 'Menggunakan akun pembeli dengan benefit storage 2 TB, Gemini Pro (VEO3), Gemini in (Gmail, Docs, Sheet). (Garansi 11 Bulan)', price: 'Rp 39.000', image: 'https://macstoredigital.id/img/gemini.png' },
            { name: 'Perplexity Pro Private 1 Bulan', description: 'Akun private dari kami (Garansi 1 Bulan)', price: 'Rp 19.000', image: 'https://macstoredigital.id/img/perplexity.png' },
            { name: 'Jasa Generate SUNO AI Versi 4.5', description: 'Jasa generate SUNO AI v4.5 | Harga persekali generate | Kirimkan lirik lagumu Beserta stylenya via chat | Min Order 10 | Bebas copyright. (No Garansi)', price: 'Rp 6.000', image: 'https://macstoredigital.id/img/suno.png' },
            { name: 'Grammarly Sharing 1 Bulan', description: 'Akun sharing dari kami (Garansi 28 Hari)', price: 'Rp 19.000', image: 'https://macstoredigital.id/img/grammarly.png' },
            { name: 'QuillBot Sharing 1 Bulan', description: 'Akun sharing dari kami (Garansi 28 Hari)', price: 'Rp 18.000', image: 'https://macstoredigital.id/img/quillbot.png' },
            { name: 'DeepL Sharing 1 Bulan', description: 'Akun sharing dari kami (Garansi 28 Hari)', price: 'Rp 18.000', image: 'https://macstoredigital.id/img/deepl.png' },
            { name: 'Jasper AI Sharing 1 Bulan', description: 'Akun sharing dari kami (Garansi 28 Hari)', price: 'Rp 29.000', image: 'https://macstoredigital.id/img/jasper.png' },
            { name: 'Humata AI Sharing 1 Bulan', description: 'Akun sharing dari kami (Garansi 28 Hari)', price: 'Rp 24.000', image: 'https://macstoredigital.id/img/humata.png' },
            { name: 'DeepSeek Sharing 1 Bulan', description: 'Akun sharing dari kami (Garansi 28 Hari)', price: 'Rp 29.000', image: 'https://macstoredigital.id/img/deepseek.png' }
        ]
    },
    {
        id: 'streaming',
        title: 'STREAMING',
        iconClass: 'fas fa-video',
        categoryTitle: 'Hiburan & Media Premium',
        categoryIconClass: 'fas fa-tv',
        products: [
            { name: 'Netflix Sharing 1 Bulan', description: '1 Profile 2 User | hanya untuk 1 device | Wajib Cantumkan Device & Lokasi saat order (Garansi 1 Bulan)', price: 'Rp 19.000', image: 'https://macstoredigital.id/img/netflix.png' },
            { name: 'Netflix Semi Private 1 Bulan', description: '1 Profile 1 User | untuk 2 device | Wajib Cantumkan Device & Lokasi saat order (Garansi 1 Bulan)', price: 'Rp 29.000', image: 'https://macstoredigital.id/img/netflix.png' },
            { name: 'Spotify Premium Private 1 Bulan', description: 'Akun private dari kami (Garansi 28 Hari)', price: 'Rp 24.000', image: 'https://macstoredigital.id/img/spotify.png' },
            { name: 'Spotify Premium Private 2 Bulan', description: 'Akun private dari kami (Garansi 28 Hari)', price: 'Rp 39.000', image: 'https://macstoredigital.id/img/spotify.png' },
            { name: 'Youtube Premium Private 1 Bulan', description: 'Syarat akun gmail belum pernah mendaftarkan youtube premium, jika sudah pernah maksimal 1 tahun yang lalu. (Garansi 25 Hari)', price: 'Rp 3.000', image: 'https://macstoredigital.id/img/youtube.png' },
            { name: 'Youtube Premium Private (Akun Baru) 1 Bulan', description: 'Akun baru dari kami tinggal login gmail & siap pakai (Garansi 25 Hari)', price: 'Rp 8.000', image: 'https://macstoredigital.id/img/youtube.png' },
            { name: 'Youtube Premium Private (Akun Baru) 3 Bulan', description: 'Akun baru dari kami tinggal login gmail & siap pakai (Garansi 85 Hari)', price: 'Rp 25.000', image: 'https://macstoredigital.id/img/youtube.png' },
            { name: 'Vidio Platinum (TV Only) Private 1 Tahun', description: 'Akun private dari kami | Login hanya untuk di TV (Garansi 1 Tahun)', price: 'Rp 29.000', image: 'https://macstoredigital.id/img/vidio.png' },
            { name: 'Vidio Platinum (All Device) Sharing 1 Bulan', description: 'Akun sharing dari kami | Bisa login untuk semua jenis device (Garansi 28 Hari)', price: 'Rp 34.000', image: 'https://macstoredigital.id/img/vidio.png' },
            { name: 'Vidio Platinum (Mobile Only) Sharing 1 Bulan', description: 'Akun sharing dari kami | Login hanya untuk Mobile / HaPe (Garansi 28 Hari)', price: 'Rp 29.000', image: 'https://macstoredigital.id/img/vidio.png' },
            { name: 'Disney+ Hotstar Sharing 1 Bulan', description: 'Akun sharing dari kami | Login via OTP nomor dari kami (Garansi 28 Hari)', price: 'Rp 24.000', image: 'https://macstoredigital.id/img/disney.png' },
            { name: 'Viu Premium Private 12 Bulan', description: 'Akun private dari kami (Garansi 10 Bulan)', price: 'Rp 10.000', image: 'https://macstoredigital.id/img/viu.png' },
            { name: 'Bstation Premium Sharing 12 Bulan', description: 'Akun Sharing dari kami (Garansi 10 Bulan)', price: 'Rp 19.000', image: 'https://macstoredigital.id/img/bstation.png' },
            { name: 'Crunchyroll Premium Sharing 12 Bulan', description: 'Akun Sharing dari kami (Garansi 10 Bulan)', price: 'Rp 19.000', image: 'https://macstoredigital.id/img/crunchyroll.png' },
            { name: 'Amazon Prime Video Sharing 1 Bulan', description: 'Akun sharing dari kami (Garansi 28 Hari)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/amazon.png' },
            { name: 'WeTV VIP Sharing 1 Bulan', description: 'Akun sharing dari kami | Wajib Cantumkan Device & Lokasi saat order (Garansi 28 Hari)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/wetv.png' },
            { name: 'iQIYI VIP Premium Sharing 1 Bulan', description: 'Akun sharing dari kami (Garansi 28 Hari)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/iqiyi.png' },
            { name: 'Drakor ID Premium Sharing 1 Bulan', description: 'Akun sharing dari kami (Garansi 28 Hari)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/drakor.png' },
            { name: 'YOUKU VIP Sharing 1 Bulan', description: 'Akun sharing dari kami (Garansi 28 Hari)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/youku.png' },
            { name: 'LOKLOK Premium Sharing 1 Bulan', description: 'Akun sharing dari kami (Garansi 28 Hari)', price: 'Rp 19.000', image: 'https://macstoredigital.id/img/loklok.png' },
            { name: 'DramaBox Premium Sharing 1 Bulan', description: 'Akun sharing dari kami (Garansi 28 Hari)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/dramabox.png' },
            { name: 'HBO Max Ultimate Sharing 1 Bulan', description: 'Akun sharing dari kami (Garansi 28 Hari)', price: 'Rp 19.000', image: 'https://macstoredigital.id/img/hbo.png' },
        ],
        note: {
            title: 'Catatan Penting untuk Streaming:',
            points: [],
            guidesTitle: 'Panduan Wajib Netflix:',
            guideLinks: [
                { text: 'Pengguna Netflix Pemula WAJIB Baca', url: 'https://www.notion.so/PENGGUNA-AWAM-WAJIB-BACA-INI-265b68103c0880a39649dabcfbec77b2?source=copy_link', type: 'generic' },
                { text: 'Tutorial Jika Netflix Incorrect Password', url: 'https://www.notion.so/TUTORIAL-LOGIN-NETFLIX-INCORECT-PASSWORD-LIMIT-LOGIN-237b68103c08804abd0cf022b382e1b1?source=copy_link', type: 'generic' }
            ],
            footerText: 'Budayakan mandiri sebelum tanya admin 🙏'
        }
    },
    {
        id: 'storage',
        title: 'PAKET STORAGE',
        iconClass: 'fas fa-hdd',
        categoryTitle: 'Penyimpanan Digital Aman & Luas',
        categoryIconClass: 'fas fa-cloud',
        products: [
            { name: 'Google Drive 1TB Private Lifetime (Selamanya)', description: 'Akun private dari kami | Tinggal digunakan saja dengan bijak', price: 'Rp 79.000', image: 'https://macstoredigital.id/img/google-drive.png' },
            { name: 'Google Storage 2TB 1 Tahun', description: 'Menggunakan akun dari pembeli | Benefit: storage 2 TB (Google Drive, Google Foto, dll), Gemini Pro (VEO3), Gemini in (Gmail, Docs, Sheet), Google Meet 24 Jam NonStop, Google Calendar Premium, dll (Garansi 10 Bulan)', price: 'Rp 39.000', image: 'https://macstoredigital.id/img/google-drive.png' },
            { name: 'Google AI Pro Private 12 Bulan', description: 'Akun dari kami Kredit AI 1000 Perbulan ( Benefit: storage 2 TB (Google Drive, Google Foto, dll), Gemini Pro (VEO3), Gemini in (Gmail, Docs, Sheet), Google Meet 24 Jam NonStop, Google Calendar Premium, dll (Garansi 10 Bulan)', price: 'Rp 69.000', image: 'https://macstoredigital.id/img/google-drive.png' }
        ]
    },
    {
        id: 'ecourse',
        title: 'ECOURSE',
        iconClass: 'fas fa-graduation-cap',
        categoryTitle: 'Materi Pembelajaran Digital',
        categoryIconClass: 'fas fa-book-open',
        products: [
            { name: 'Complete Financial Freedom & Invest - Ternak Uang Original Episode 1 - 29', description: 'BONUS: Sekolah Jalanan By Timothy Ronald - Rahasia Jualan Untuk Omset Terbaik.', price: 'Rp 9.500', image: 'https://macstoredigital.id/img/ebook1.png' },
            { name: 'Kelas Jago Capcut - Belajar Mahir Editing Video dengan Aplikasi Capcut Terlengkap', description: 'BONUS: JAGO CANVA DALAM 5 HARI - Mahir Buat Konten Apapun Menggunakan Canva', price: 'Rp 4.000', image: 'https://macstoredigital.id/img/ebook2.png' },
            { name: 'TIKTOK AFFILIATE UNTUK PEMULA TANPA JUTAAN FOLLOWER', description: 'BONUS: Cara Mudah Fyp Tiktok', price: 'Rp 6.000', image: 'https://macstoredigital.id/img/ebook3.png' },
            { name: 'ECOURSE - KELAS MASTER TT ADS Cuan Berlipat Ganda Hingga Jutaan Dari Ngiklan (Materi Video Pembelajaran)', description: 'Ada 11 Materi yang dijelaskan berupa video', price: 'Rp 5.000', image: 'https://macstoredigital.id/img/ebook4.png' },
            { name: '1000+ GPT Prompt - Mengungkap Rahasia Kekuatan AI untuk Para Konten Kreator', description: 'Miliki kekuatan 1000+ prompt ChatGPT yang membuat anda bekerja lebih cepat, lebih cerdas, dan 10x lebih efisien.', price: 'Rp 2.000', image: 'https://macstoredigital.id/img/ebooks.png' }
        ],
        note: {
            title: 'Catatan Ecourse:',
            points: [
                'Produk berupa video pembelajaran, kecuali "1000+ GPT Prompt" yang berupa teks.',
                'Sekali beli, bisa dijual berkali-kali! Peluang tak terbatas untuk reseller.'
            ]
        }
    },
    {
        id: 'lain-lain',
        title: 'LAIN-LAIN',
        iconClass: 'fas fa-ellipsis-h',
        categoryTitle: 'Layanan Digital Lainnya',
        categoryIconClass: 'fas fa-globe',
        products: [
            { name: 'TURNITIN Private 7 Hari', description: 'Max upload 3x/24 jam (Garansi 7 Hari)', price: 'Rp 19.000', image: 'https://macstoredigital.id/img/turnitin.png' },
            { name: 'SCRIBD Private 1 Bulan', description: 'Akun private dari kami (Garansi 1 Bulan)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/scribd.png' },
            { name: 'GetContact Premium Private 1 Bulan', description: 'Proses Menggunakan Nomor WhatsApp | Wajib standby untuk proses orderan (Garansi 20 Hari)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/getcontact.png' },
            { name: 'Kahoot Sharing 1 Bulan', description: 'Akun sharing dari kami (Garansi 28 Hari)', price: 'Rp 29.000', image: 'https://macstoredigital.id/img/kahoot.png' },
            { name: 'Duolingo Private 1 Bulan', description: 'Akun private dari kami (Garansi 28 Hari)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/duolingo.png' },
            { name: 'Zoom Pro Private 14 Hari', description: 'Akun private dari kami | 100 Peserta (Garansi 14 Hari)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/zoom.png' },
            { name: 'Wattpad Sharing 12 Bulan', description: 'Akun sharing dari kami (Garansi 11 Bulan)', price: 'Rp 19.000', image: 'https://macstoredigital.id/img/wattpad.png' },
            { name: 'Microsoft 365 Private 12 Bulan', description: 'Akun private dari kami | Full akses Original: Word, Excel, Power Point, One Note, Outlook, Publisher, Access (Garansi 6 Bulan)', price: 'Rp 49.000', image: 'https://macstoredigital.id/img/office365.png' },
            { name: 'Fizzo Sharing 1 Bulan', description: 'Akun sharing dari kami (Garansi 28 Hari)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/fizzo.png' },
            { name: 'Surfshark VPN Private 3 Bulan', description: 'Akun private dari kami (Garansi 3 Bulan)', price: 'Rp 29.000', image: 'https://macstoredigital.id/img/surfshark.png' },
            { name: 'ExpressVPN Private 1 Bulan', description: 'Akun private dari kami (Garansi 28 Hari)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/express.png' },
            { name: 'HMA VPN Private 1 Bulan', description: 'Akun private dari kami (Garansi 28 Hari)', price: 'Rp 14.000', image: 'https://macstoredigital.id/img/hma.png' },
            { name: 'Open Bypass iPhone Lock iCloud Or Passcode (Not For Robber)', description: 'Hubungi admin untuk detail lebih lanjut mengenai layanan ini.', price: 'Hubungi Admin', image: 'https://macstoredigital.id/img/bypass.png' }
        ]
    }
];