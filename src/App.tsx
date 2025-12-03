import { useState, useEffect } from 'react';
import {
  Shield,
  Zap,
  MessageCircle,
  Tag,
  ChevronDown,
  ExternalLink,
  Instagram,
  Facebook,
  Video,
  ArrowRight,
  Clock,
  Star,
  Mail,
  HelpCircle,
  Package,
  Sparkles,
  Landmark,
  Flame,
  Palette,
  Brain,
  Play,
  HardDrive,
  GraduationCap,
  Layers,
  X,
  Users,
  Trophy,
  Timer,
  Search,
  ChevronsDown,
  ChevronsUp
} from 'lucide-react';
import productData from '../PRODUCT_LIST.json';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

interface Product {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  image: string;
  whatsappText: string;
  isBestSeller?: boolean;
}

interface Section {
  id: string;
  title: string;
  icon: string;
  products: Product[];
}

function App() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['promo']));
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showFloatingWA, setShowFloatingWA] = useState(false);
  const [showPromoPopup, setShowPromoPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const testimonials = [
    'https://macstoredigital.id/img/testimoni-1.jpeg',
    'https://macstoredigital.id/img/testimoni-2.jpeg',
    'https://macstoredigital.id/img/testimoni-3.jpeg',
    'https://macstoredigital.id/img/testimoni-4.jpeg'
  ];

  const sections: Section[] = productData.sections;

  const toggleSection = (id: string) => {
    setOpenSections(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenSections(new Set(sections.map(s => s.id)));
  };

  const collapseAll = () => {
    setOpenSections(new Set());
  };

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate 1.5 second loading time

    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);

    const scrollHandler = () => {
      setShowFloatingWA(window.scrollY > 300);
    };
    window.addEventListener('scroll', scrollHandler);

    const hasSeenPopup = localStorage.getItem('promoPopupSeen');
    const promoTimer = setTimeout(() => {
      if (!hasSeenPopup) {
        setShowPromoPopup(true);
        localStorage.setItem('promoPopupSeen', 'true');
      }
    }, 30000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      window.removeEventListener('scroll', scrollHandler);
      clearTimeout(promoTimer);
    };
  }, []);

  const isOpen = () => {
    const hour = new Date().getHours();
    return hour >= 8 && hour < 24;
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-50 z-[100]">
        <img
          src="https://macstoredigital.id/img/logo-macstore.png"
          alt="Macstore Digital Loading"
          className="w-24 h-24 mb-4 animate-pulse"
        />
        <div className="loader"></div>
        <p className="text-slate-600 mt-4 text-sm font-medium">Menyiapkan produk terbaik...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 sm:pt-24 sm:pb-12">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="relative inline-block mb-6 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 blur-2xl opacity-40 animate-pulse"></div>
            <img
              src="https://macstoredigital.id/img/logo-macstore.png"
              alt="Macstore Digital"
              className="w-28 h-28 rounded-full mx-auto border-4 border-white shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient-slow">
              Macstore Digital
            </span>
          </h1>

          <p className="text-slate-800 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-semibold">
            Akun Premium Terpercaya • Proses Cepat • Garansi Penuh
          </p>

          {/* Trust Badges - Enhanced */}
          <div className="flex flex-wrap gap-3 justify-center items-center mb-8">
            <div className="glass-card px-5 py-3 flex items-center gap-2 hover:scale-105 transition-transform duration-300 border-green-400/50">
              <Users className="w-5 h-5 text-green-500" />
              <div className="text-left">
                <div className="text-xs text-slate-500 leading-tight">Pelanggan Puas</div>
                <div className="text-sm font-bold text-slate-800">10.000+</div>
              </div>
            </div>

            <div className="glass-card px-5 py-3 flex items-center gap-2 hover:scale-105 transition-transform duration-300 border-blue-400/50">
              <Trophy className="w-5 h-5 text-blue-500" />
              <div className="text-left">
                <div className="text-xs text-slate-500 leading-tight">Rating Toko</div>
                <div className="text-sm font-bold text-slate-800">4.9/5.0 ⭐</div>
              </div>
            </div>

            <div className={`glass-card px-5 py-3 flex items-center gap-2 hover:scale-105 transition-transform duration-300 ${
              isOpen() ? 'border-green-400/50' : 'border-slate-300/50'
            }`}>
              <Clock className={`w-5 h-5 ${isOpen() ? 'text-green-500' : 'text-slate-500'}`} />
              <div className="text-left">
                <div className="text-xs text-slate-500 leading-tight">Jam Operasional</div>
                <div className="text-sm font-bold text-slate-800">
                  {isOpen() ? '🟢 Buka' : '🔴 Tutup'} • 08:00-00:00
                </div>
              </div>
            </div>

            <div className="glass-card px-5 py-3 flex items-center gap-2 hover:scale-105 transition-transform duration-300 border-orange-400/50">
              <Timer className="w-5 h-5 text-orange-500" />
              <div className="text-left">
                <div className="text-xs text-slate-500 leading-tight">Proses</div>
                <div className="text-sm font-bold text-slate-800">&lt; 5 Menit</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://api.whatsapp.com/send/?phone=6283853289396&text=Halo%20Macstore%20Digital,%20saya%20ingin%20bertanya"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white px-6 py-3.5 rounded-full font-bold text-base shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 mb-8 overflow-hidden group animate-pulse hover:animate-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            <WhatsAppIcon className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Chat WhatsApp Sekarang</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center">
            {[
              { icon: WhatsAppIcon, href: 'https://api.whatsapp.com/send/?phone=6283853289396', color: 'from-green-500 to-green-600' },
              { icon: Facebook, href: 'https://www.facebook.com/macstoredigital.id', color: 'from-blue-600 to-blue-700' },
              { icon: Instagram, href: 'https://www.instagram.com/macstoredigital.id/', color: 'from-pink-500 to-pink-600' },
              { icon: Video, href: 'https://www.tiktok.com/@macstoredigital', color: 'from-slate-700 to-slate-900' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative glass-card bg-gradient-to-br ${social.color} p-4 hover:scale-125 hover:-translate-y-2 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-2xl group overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-300"></div>
                <social.icon className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </header>

        {/* How to Order */}
        <div className="glass-card p-6 sm:p-8 mb-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-bold text-slate-800">Cara Order Cepat</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            {[
              { step: '1', title: 'Pilih Produk', desc: 'Pilih paket di pricelist' },
              { step: '2', title: 'Bayar', desc: 'Klik Lynk.id atau WA' },
              { step: '3', title: 'Aktivasi', desc: 'Proses 1-20 menit' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-5 rounded-2xl bg-slate-50/50 hover:bg-white transition-all duration-300 border border-slate-200/50">
                <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 text-sm mb-0.5">{item.title}</h3>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Why Choose Us */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10">
          {[
            { icon: Shield, label: 'Garansi Penuh', desc: 'Ganti baru', color: 'from-emerald-500 to-green-600' },
            { icon: Zap, label: 'Proses Cepat', desc: '1-20 menit', color: 'from-blue-500 to-cyan-600' },
            { icon: MessageCircle, label: 'Admin Responsif', desc: 'Siap bantu', color: 'from-amber-500 to-orange-600' },
            { icon: Tag, label: 'Harga Terbaik', desc: 'Paling murah', color: 'from-rose-500 to-pink-600' }
          ].map((feature, idx) => (
            <div key={idx} className="group glass-card p-6 text-center hover:scale-105 hover:-translate-y-1 transition-all duration-300">
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-slate-800 text-sm mb-0.5">{feature.label}</div>
              <div className="text-xs text-slate-600">{feature.desc}</div>
            </div>
          ))}
        </div>

        {/* Testimonial CTA */}
        <a
          href="https://www.instagram.com/stories/highlights/17898224550282751/"
          target="_blank"
          rel="noopener noreferrer"
          className="block glass-card bg-gradient-to-r from-orange-500/20 to-pink-500/20 hover:from-orange-500/30 hover:to-pink-500/30 p-6 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Instagram className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-slate-800 text-lg mb-0.5">Bukti Kepuasan Pelanggan</div>
              <div className="text-slate-600 text-sm">Cek testimoni di Instagram</div>
            </div>
            <ExternalLink className="w-5 h-5 text-slate-600 flex-shrink-0" />
          </div>
        </a>

        {/* Pricelist */}
        <div className="space-y-5 mb-10">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 glass-card px-6 py-3">
              <Package className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-800">PRICELIST</h2>
            </div>
          </div>

          {/* Search Bar */}
          <div className="glass-card p-4 mb-5">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari produk... (contoh: netflix, canva, capcut)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors text-slate-800 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Expand/Collapse All */}
          <div className="flex gap-3 justify-center mb-5">
            <button
              onClick={expandAll}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold transition-colors text-sm"
            >
              <ChevronsDown className="w-4 h-4" />
              <span>Buka Semua</span>
            </button>
            <button
              onClick={collapseAll}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 font-semibold transition-colors text-sm"
            >
              <ChevronsUp className="w-4 h-4" />
              <span>Tutup Semua</span>
            </button>
          </div>

          {sections.map((section) => {
            const filteredProducts = section.products.filter(product =>
              product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              product.description.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && filteredProducts.length === 0) return null;

            return (
              <PriceSection
                key={section.id}
                id={section.id}
                title={section.title}
                isOpen={searchQuery ? true : openSections.has(section.id)}
                onToggle={() => toggleSection(section.id)}
                highlight={section.id === 'promo'}
                icon={section.icon}
              >
                {filteredProducts.map((product, idx) => (
                  <ProductItem key={idx} product={product} />
                ))}
              </PriceSection>
            );
          })}
        </div>

        {/* Ask for Other Products */}
        <a
          href="https://api.whatsapp.com/send?phone=6283853289396&text=Halo%20Kak%2C%20saya%20mau%20cari%20produk%20%5Bisi%20produknya%5D%2C%20apakah%20ada%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="block glass-card p-5 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-300 mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-slate-800 text-sm">Cari Produk Lain?</div>
                <div className="text-xs text-slate-600">Tanya admin kami</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400" />
          </div>
        </a>

        {/* Testimonial Slider */}
        <div className="glass-card p-6 sm:p-8 mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <h2 className="text-base font-bold text-slate-800">Kata Pelanggan Kami</h2>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-lg mb-3">
            <img
              src={testimonials[currentTestimonial]}
              alt="Testimoni"
              className="w-full h-auto max-h-[280px] sm:max-h-[320px] object-contain mx-auto bg-slate-50"
            />
          </div>
          <div className="flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentTestimonial ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="glass-card p-6 sm:p-8 mb-10">
          <p className="text-center text-slate-600 font-medium text-sm mb-4">Kami menerima pembayaran via:</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white hover:scale-110 transition-all duration-300 rounded-xl p-3 shadow-md hover:shadow-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/QRIS_logo.svg/2560px-QRIS_logo.svg.png" alt="QRIS" className="h-8 w-auto" />
            </div>
            <div className="bg-white hover:scale-110 transition-all duration-300 rounded-xl p-3 shadow-md hover:shadow-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/2560px-Gopay_logo.svg.png" alt="Gopay" className="h-8 w-auto" />
            </div>
            <div className="bg-white hover:scale-110 transition-all duration-300 rounded-xl p-3 shadow-md hover:shadow-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png" alt="OVO" className="h-8 w-auto" />
            </div>
            <div className="bg-white hover:scale-110 transition-all duration-300 rounded-xl p-3 shadow-md hover:shadow-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/2560px-Logo_dana_blue.svg.png" alt="DANA" className="h-8 w-auto" />
            </div>
            <div className="bg-white hover:scale-110 transition-all duration-300 rounded-xl px-4 py-3 shadow-md hover:shadow-lg flex items-center gap-2">
              <Landmark className="w-7 h-7 text-slate-700" />
              <span className="font-semibold text-slate-700 text-sm">Transfer Bank</span>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="glass-card p-6 sm:p-8 mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-5">FAQ</h2>
          <div className="space-y-3">
            {[
              { q: 'Garansi ganti baru berlaku bagaimana?', a: 'Jika akun bermasalah dalam masa aktif, kami akan ganti dengan akun baru. Cukup kirim bukti screenshot kendalanya via WhatsApp.' },
              { q: 'Waktu proses berapa lama?', a: 'Rata-rata proses aktivasi memakan waktu 1–20 menit pada jam operasional kami (08.00–00.00 WIB).' },
              { q: 'Bedanya sharing vs private?', a: 'Akun Sharing berarti 1 akun digunakan bersama beberapa pengguna, sehingga harganya lebih murah. Akun Private berarti 1 akun hanya untuk Anda seorang, lebih stabil dan bisa ganti password.' }
            ].map((faq, idx) => (
              <details key={idx} className="group border border-slate-200 rounded-xl overflow-hidden bg-white/50 hover:bg-white transition-all duration-300">
                <summary className="cursor-pointer p-4 flex items-center justify-between font-semibold text-slate-800 text-sm">
                  {faq.q}
                  <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform duration-300 text-blue-500" />
                </summary>
                <div className="p-4 border-t border-slate-200 text-slate-600 text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="glass-card p-6 sm:p-8 mb-8">
          <div className="text-center mb-5">
            <h2 className="text-xl font-bold text-slate-800 mb-1">Kritik & Saran</h2>
            <p className="text-slate-600 text-sm">Kami senang mendengar dari Anda</p>
          </div>
          <a
            href="mailto:admin@macstoredigital.id"
            className="flex items-center gap-4 bg-slate-100/80 hover:bg-white rounded-2xl p-5 transition-all duration-300 border border-slate-200/50"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-slate-800">Kirim via Email</div>
              <div className="text-slate-600 text-sm">admin@macstoredigital.id</div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400" />
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-3">
            <p className="text-slate-600 text-sm font-medium">
              © {new Date().getFullYear()} Macstore Digital
            </p>
            <div className="flex gap-3 text-xs">
              <a href="https://macstoredigital.id/syarat&ketentuan&kebijakan" className="text-slate-600 hover:text-blue-600 transition-colors">
                Syarat & Ketentuan
              </a>
              <span className="text-slate-300">•</span>
              <a href="https://macstoredigital.id/syarat&ketentuan&kebijakan" className="text-slate-600 hover:text-blue-600 transition-colors">
                Kebijakan Privasi
              </a>
            </div>
          </div>
          <p className="text-slate-500 text-xs">Akun Premium Terpercaya • Proses Cepat • Garansi Penuh</p>
        </footer>
      </div>

      {/* Floating WhatsApp Button */}
      {showFloatingWA && (
        <a
          href="https://api.whatsapp.com/send/?phone=6283853289396&text=Halo%20Macstore%20Digital,%20saya%20ingin%20bertanya"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 animate-bounce group"
        >
          <WhatsAppIcon className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
        </a>
      )}

      {/* Promo Exit Intent Popup */}
      {showPromoPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl animate-bounceIn">
            <button
              onClick={() => setShowPromoPopup(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors bg-slate-100 rounded-full p-1 hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                <Flame className="w-10 h-10" />
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-2">
                Tunggu Dulu! 🎉
              </h3>

              <p className="text-slate-700 mb-5 text-base leading-relaxed">
                Dapatkan <span className="font-bold text-orange-600">3 PREMIUM APPS</span> dengan harga 1!
              </p>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl mb-6 border-2 border-orange-300 shadow-inner">
                <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                  PROMO TERBATAS 🔥
                </div>
                <p className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
                  CapCut Pro
                </p>
                <p className="text-base font-bold text-green-600 mb-3 leading-tight">
                  + GRATIS Canva Pro 12 Bulan & Youtube Premium 1 Bulan!
                </p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg text-slate-400 line-through font-medium">Rp 358.000</span>
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">HEMAT 50%</span>
                </div>
                <p className="text-sm text-slate-600 mb-1">Cuma</p>
                <p className="text-4xl font-black text-orange-600 mb-3">Rp 179.000</p>
                <div className="bg-white/60 rounded-lg px-4 py-2 inline-block">
                  <div className="flex items-center justify-center gap-2 text-sm text-slate-700">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold">Garansi Full</span>
                  </div>
                </div>
              </div>

              <a
                href="https://api.whatsapp.com/send/?phone=6283853289396&text=Halo%20kak%2C%20saya%20mau%20order%20CapCut%20Pro%2012%20Bulan%20%2B%20Gratis%20Canva%20Pro%2012%20Bulan%20%26%20Youtube%20Premium%201%20Bulan%20Rp%20179.000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full justify-center mb-3"
                onClick={() => setShowPromoPopup(false)}
              >
                <WhatsAppIcon className="w-5 h-5" />
                Tanya Promo Sekarang
              </a>

              <button
                onClick={() => setShowPromoPopup(false)}
                className="text-sm text-slate-600 hover:text-slate-800 font-medium underline"
              >
                Nanti saja
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PriceSection({
  title,
  isOpen,
  onToggle,
  children,
  highlight = false,
  icon
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  highlight?: boolean;
  icon: string;
}) {
  const iconMap: { [key: string]: React.ReactNode } = {
    flame: <Flame className="w-5 h-5" />,
    palette: <Palette className="w-5 h-5" />,
    brain: <Brain className="w-5 h-5" />,
    play: <Play className="w-5 h-5" />,
    harddrive: <HardDrive className="w-5 h-5" />,
    graduationcap: <GraduationCap className="w-5 h-5" />,
    layers: <Layers className="w-5 h-5" />
  };

  return (
    <div className={`glass-card overflow-hidden transition-all duration-300 hover:shadow-xl ${
      highlight ? 'border-orange-400/50 shadow-orange-200 animate-bounceIn' : ''
    }`}>
      <button
        onClick={onToggle}
        className={`group w-full p-4 flex items-center justify-between transition-all duration-300 ${
          highlight
            ? 'bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 hover:from-orange-500/30 hover:via-red-500/30 hover:to-pink-500/30'
            : 'hover:bg-slate-50/50'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className={`relative p-2 rounded-xl ${
            highlight
              ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white'
              : 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white'
          } shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 overflow-hidden`}>
            <div className="absolute inset-0 animate-shimmer"></div>
            <div className="relative z-10">{iconMap[icon]}</div>
          </div>
          <span className="font-bold text-slate-800 text-base">{title}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="p-4 sm:p-6 space-y-4 border-t border-slate-200/50 animate-fadeIn">
          <div className="space-y-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function ProductItem({ product }: { product: Product }) {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=6283853289396&text=Halo%20kak%2C%20saya%20mau%20pesan%20${encodeURIComponent(product.whatsappText)}`;

  const isBestSellerProduct = () => {
    const name = product.name.toLowerCase();
    const bestSellerKeywords = [
      'gemini pro',
      'bundle',
      'chatgpt',
      'canva pro',
      'netflix',
      'capcut pro',
      'youtube premium'
    ];
    return bestSellerKeywords.some(keyword => name.includes(keyword));
  };

  return (
    <div className="group flex gap-4 sm:gap-5 items-start p-4 sm:p-5 rounded-xl hover:bg-slate-50/80 transition-all duration-300 border border-transparent hover:border-slate-200/80 hover:shadow-md bg-white/40">
      <div className="relative">
        <img
          src={product.image}
          alt={`${product.name} - Akun Premium Murah Bergaransi | Macstore Digital`}
          title={product.name}
          loading="lazy"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg object-contain flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
        />
        {isBestSellerProduct() && (
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
            <Star className="w-3 h-3 fill-white" />
            <span>Best</span>
          </div>
        )}
      </div>
      <article className="flex-1 min-w-0">
        <h3 className="font-bold text-slate-800 text-base sm:text-lg mb-2 leading-snug">{product.name}</h3>
        <p className="text-sm text-slate-600 mb-3 leading-relaxed">{product.description}</p>
        <div className="flex items-center gap-2 mb-3">
          {product.originalPrice && (
            <p className="text-sm sm:text-base text-slate-400 line-through font-semibold">{product.originalPrice}</p>
          )}
          <p className="font-bold text-xl sm:text-2xl text-blue-600">{product.price}</p>
        </div>
        <div className="flex gap-2 items-center flex-wrap sm:flex-nowrap">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2 flex-shrink-0"
          >
            <WhatsAppIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Pesan</span>
          </a>
          <a
            href="https://lynk.id/asakrisnatara"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-slate-50 flex items-center gap-2 flex-shrink-0"
          >
            <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Lynk</span>
          </a>
          <span className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">Garansi ✓</span>
        </div>
      </article>
    </div>
  );
}

export default App;
