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
            
            // Logika diubah ke jam < 24 (artinya buka sampai jam 23:59)
            if (jam >= 8 && jam < 24) { 
                // Teks diubah ke 00:00 WIB
                jamOperasionalEl.innerHTML = '<span class="status-dot online"></span><span class="font-bold">Sedang Buka</span>&nbsp; (08:00 – 00:00 WIB)';
            } else {
                jamOperasionalEl.innerHTML = '<span class="status-dot offline"></span><span class="font-bold">Sedang Tutup</span>, Buka jam 08:00 WIB';
            }
        } catch(e) {
            // Teks fallback juga diubah
            jamOperasionalEl.textContent = 'Jam Operasional: 08:00 – 00:00 WIB';
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

    // Logika untuk Slider Testimoni Gambar
    const sliderContainer = document.getElementById('testimonial-slider');
    if (sliderContainer) {
        const images = [
            'https://macstoredigital.id/img/testimoni-1.jpeg',
            'https://macstoredigital.id/img/testimoni-2.jpeg',
            'https://macstoredigital.id/img/testimoni-3.jpeg',
            'https://macstoredigital.id/img/testimoni-4.jpeg'
        ];
        let currentIndex = 0;

        const imgElement = document.createElement('img');
        imgElement.src = images[0];
        imgElement.alt = `Screenshot testimoni pelanggan ${currentIndex + 1}`;
        imgElement.loading = 'lazy';
        sliderContainer.appendChild(imgElement);

        setInterval(() => {
            imgElement.classList.add('fade-out');

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;
                imgElement.src = images[currentIndex];
                imgElement.alt = `Screenshot testimoni pelanggan ${currentIndex + 1}`;
                imgElement.classList.remove('fade-out');
            }, 500);
            
        }, 4000);
    }
});