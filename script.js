document.addEventListener('DOMContentLoaded', () => {
  // Feather Icons (aman jika feather belum ada)
  if (window.feather && typeof feather.replace === 'function') feather.replace();

  // Tahun sekarang di Footer
  const currentYearEl = document.getElementById('current-year');
  if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

  // Jam Operasional: Buka 08:00, Tutup 00:00 (WIB)
  const jamOperasionalEl = document.getElementById('jam-operasional');
  if (jamOperasionalEl) {
    try {
      // Ambil waktu Asia/Jakarta dengan akurat
      const nowJakarta = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
      const menitSekarang = nowJakarta.getHours() * 60 + nowJakarta.getMinutes();

      const bukaMenit = 8 * 60;   // 08:00
      const tutupMenit = 24 * 60; // 00:00 ke hari berikutnya
      const sedangBuka = menitSekarang >= bukaMenit && menitSekarang < tutupMenit; // 00:00 sudah tutup

      if (sedangBuka) {
        jamOperasionalEl.innerHTML =
          '<span class="status-dot online"></span><span class="font-bold">Sedang Buka</span>&nbsp; (08:00 – 00:00 WIB)';
      } else {
        jamOperasionalEl.innerHTML =
          '<span class="status-dot offline"></span><span class="font-bold">Sedang Tutup</span>, Buka jam 08:00 WIB';
      }
    } catch (e) {
      jamOperasionalEl.textContent = 'Jam Operasional: 08:00 – 00:00 WIB';
    }
  }

  // Accordion Pricelist & FAQ
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

  // Slider Testimoni Gambar
  const sliderContainer = document.getElementById('testimonial-slider');
  if (sliderContainer) {
    const images = ['testimoni-1.jpeg', 'testimoni-2.jpeg', 'testimoni-3.jpeg', 'testimoni-4.jpeg'];
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
      }, 500); // samakan dengan durasi transisi di CSS
    }, 4000);
  }
});
