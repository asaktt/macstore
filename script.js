document.addEventListener('DOMContentLoaded', () => {
    // Aktifkan Feather Icons
    feather.replace();

    // Set Tahun Sekarang di Footer
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Atur Status Jam Operasional
    const jamOperasionalEl = document.getElementById('jam-operasional');
    if(jamOperasionalEl){
        try {
            const jam = parseInt(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Jakarta', hour12: false, hour: '2-digit' }), 10);
            if (jam >= 8 && jam < 00) {
                jamOperasionalEl.innerHTML = '<span class="status-dot online"></span><span class="font-bold">Sedang Buka</span>&nbsp; (08:00 – 00:00 WIB)';
            } else {
                jamOperasionalEl.innerHTML = '<span class="status-dot offline"></span><span class="font-bold">Sedang Tutup</span>, Buka jam 08:00 WIB';
            }
        } catch(e) {
            jamOperasionalEl.textContent = 'Jam Operasional: 08:00 – 22:00 WIB';
        }
    }

    // Logika Accordion untuk Pricelist & FAQ
    document.querySelectorAll('details.group').forEach((detail) => {
        const content = detail.querySelector('.accordion-content');
        if (!content) return;
        
        if (detail.hasAttribute('open')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
        
        detail.addEventListener('toggle', () => {
            if (detail.open) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // PENAMBAHAN: Logika untuk Slider Testimoni Gambar
    const sliderContainer = document.getElementById('testimonial-slider');
    if (sliderContainer) {
        const images = [
            'testimoni-1.jpeg',
            'testimoni-2.jpeg',
            'testimoni-3.jpeg',
            'testimoni-4.jpeg'
        ];
        let currentIndex = 0;

        // Buat elemen gambar awal
        const imgElement = document.createElement('img');
        imgElement.src = images[0];
        imgElement.alt = `Screenshot testimoni pelanggan ${currentIndex + 1}`;
        imgElement.loading = 'lazy';
        sliderContainer.appendChild(imgElement);

        setInterval(() => {
            // Fade out gambar saat ini
            imgElement.classList.add('fade-out');

            // Tunggu transisi selesai, lalu ganti gambar dan fade in
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;
                imgElement.src = images[currentIndex];
                imgElement.alt = `Screenshot testimoni pelanggan ${currentIndex + 1}`;
                
                // Hapus kelas fade-out untuk memicu fade-in
                imgElement.classList.remove('fade-out');
            }, 500); // Harus cocok dengan durasi transisi di CSS
            
        }, 4000); // Ganti gambar setiap 4 detik
    }

});


