import React from 'react';
import { WHATSAPP_PHONE_NUMBER } from '../constants';

export const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-12 px-4 text-center rounded-b-3xl mb-10 shadow-2xl shadow-indigo-400/30">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-shadow-lg">Selamat Datang Reseller Macstore Digital!</h1>
                <p className="text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed text-indigo-200">
                    Sumber terpercaya Anda untuk update stok, harga, dan panduan lengkap.
                </p>
                <div className="mt-6 inline-block bg-yellow-400/90 text-slate-900 font-bold px-6 py-2 rounded-full text-base shadow-lg">
                    <i className="fas fa-info-circle mr-2"></i> BUDAYAKAN MEMBACA
                </div>
                <div>
                    <a href={`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_NUMBER}&text=Halo Admin Macstore Digital, saya ingin bergabung sebagai reseller. JOIN RESS + Minimal Sekali Order Harga Normal!`} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white py-3 px-8 rounded-lg font-semibold inline-flex items-center gap-3 transition-all duration-300 hover:bg-green-600 hover:-translate-y-0.5 shadow-lg hover:shadow-green-500/40 mt-8 text-lg">
                        <i className="fab fa-whatsapp"></i> Gabung & Support Reseller
                    </a>
                </div>
            </div>
        </header>
    );
};