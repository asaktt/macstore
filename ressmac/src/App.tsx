import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Card } from './components/Card';
import { ProductCategory } from './components/ProductCategory';
import { SkeletonCategory } from './components/SkeletonCategory';
import { SearchFAB } from './components/SearchFAB';
import { productCategories, WHATSAPP_PHONE_NUMBER } from './constants';

const App: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // 1.5 second delay to showcase skeleton loaders

        return () => clearTimeout(timer);
    }, []);

    const filteredCategories = useMemo(() => {
        if (!searchQuery.trim()) {
            return productCategories;
        }

        const lowerCaseQuery = searchQuery.toLowerCase();

        return productCategories.map(category => {
            const filteredProducts = category.products.filter(product =>
                product.name.toLowerCase().includes(lowerCaseQuery) ||
                product.description.toLowerCase().includes(lowerCaseQuery)
            );
            return { ...category, products: filteredProducts };
        }).filter(category => category.products.length > 0);

    }, [searchQuery]);

    return (
        <>
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 w-full">
                <div className="flex flex-col gap-8">
                    <Card>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 text-center flex items-center justify-center gap-3">
                            <i className="fas fa-file-contract text-indigo-500"></i> Syarat & Ketentuan
                        </h2>
                        <ul className="list-none pl-2 space-y-3 text-base text-slate-600 leading-relaxed">
                            <li><i className="fas fa-check-circle text-indigo-500 mr-2"></i>Penjelasan detail setiap produk tersedia di website ini.</li>
                            <li><i className="fas fa-check-circle text-indigo-500 mr-2"></i>Update harga akan selalu tersedia secara berkala.</li>
                            <li><i className="fas fa-check-circle text-indigo-500 mr-2"></i><strong>Bulk Order</strong> minimal Rp 170.000,- akan mendapatkan <strong>diskon 5%</strong>.</li>
                            <li><i className="fas fa-check-circle text-indigo-500 mr-2"></i>Mohon tidak melakukan <strong>Rush Order</strong>. Admin adalah manusia, bukan robot, jadi harap bersabar 🙏.</li>
                            <li><i className="fas fa-check-circle text-indigo-500 mr-2"></i>Jika stok habis, uang Anda akan kami <strong>refund 100%</strong>.</li>
                            <li><i className="fas fa-check-circle text-indigo-500 mr-2"></i><strong className="text-red-600">PENTING UNTUK RESELLER:</strong> Saat melakukan order, <strong>wajib</strong> gunakan format: <i>"Hi, Saya Ress Mac"</i> untuk memastikan Anda mendapatkan harga spesial reseller.</li>
                        </ul>
                        <p className="mt-8 text-base italic text-center text-slate-500 font-medium">
                            "📦 Kami memberikan peluang emas bagi yang mengerti untuk mengambil kesempatan ini."
                        </p>
                        <div className="text-center mt-6">
                            <a href="http://macstoredigital.id/" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300 hover:bg-indigo-700 hover:-translate-y-0.5 shadow-lg shadow-indigo-500/30">
                                Kunjungi Website Utama
                            </a>
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 text-center flex items-center justify-center gap-3">
                            <i className="fas fa-shield-alt text-indigo-500"></i> Syarat & Ketentuan Lengkap & Kebijakan Privasi
                        </h2>
                        <p className="text-center text-slate-600 leading-relaxed mb-6">
                            Dengan menjadi reseller atau pelanggan Macstore Digital, Anda dianggap telah membaca, memahami, dan menyetujui semua syarat, ketentuan, serta kebijakan privasi yang berlaku.
                        </p>
                        <div className="text-center">
                            <a href="https://macstoredigital.id/syarat&ketentuan&kebijakan/" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300 hover:bg-indigo-700 hover:-translate-y-0.5 shadow-lg shadow-indigo-500/30">
                                Baca Selengkapnya Di Sini
                            </a>
                        </div>
                    </Card>
                    
                    <div className="my-8" id="search-bar">
                        <div className="relative w-full max-w-2xl mx-auto">
                            <input
                                type="text"
                                placeholder="Cari produk apa saja... (misal: Canva, Netflix)"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-6 pr-14 py-4 text-lg bg-white text-slate-800 placeholder-slate-400 border-2 border-slate-200 rounded-full focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 shadow-lg shadow-slate-300/30"
                                aria-label="Cari Produk"
                            />
                            <i className="fas fa-search absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 text-xl"></i>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {isLoading ? (
                             <>
                                <SkeletonCategory />
                                <SkeletonCategory />
                                <SkeletonCategory />
                             </>
                        ) : filteredCategories.length > 0 ? (
                            filteredCategories.map(category => (
                                <ProductCategory key={category.id} category={category} searchQuery={searchQuery} />
                            ))
                        ) : (
                            <Card className="text-center">
                                <div className="flex flex-col items-center justify-center p-8">
                                    <i className="fas fa-box-open text-5xl text-slate-400 mb-4"></i>
                                    <p className="text-2xl font-semibold text-slate-700">
                                        Produk tidak ditemukan
                                    </p>
                                    <p className="text-slate-500 mt-2">
                                        Tidak ada produk yang cocok dengan "<strong>{searchQuery}</strong>".
                                    </p>
                                </div>
                            </Card>
                        )}
                    </div>

                    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center shadow-2xl p-10 md:p-12 rounded-2xl mt-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center flex items-center justify-center gap-3">
                            <i className="fas fa-search-plus"></i> Tidak Menemukan Produk?
                        </h2>
                        <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto font-light text-indigo-200">
                            Hubungi admin untuk menanyakan ketersediaan produk yang kamu cari. Kami siap membantu!
                        </p>
                        <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_NUMBER}&text=Halo%20Kak%2C%20saya%20mau%20cari%20produk%20%5Bisi%20produknya%5D%2C%20apakah%20ada%3F`} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-indigo-600 font-bold text-lg py-3 px-8 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-yellow-300">
                            <i className="fab fa-whatsapp mr-2"></i> Tanyakan di Sini
                        </a>
                    </section>
                </div>
            </main>

            <Footer />
            <SearchFAB />
        </>
    );
};

export default App;