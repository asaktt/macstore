import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 px-4 text-center mt-16 rounded-t-3xl">
             <div className="max-w-6xl mx-auto">
                <p className="mb-2 text-lg font-light">
                    © {new Date().getFullYear()} Macstore Digital. Semua Hak Dilindungi.
                </p>
                <p className="text-xl font-medium mt-4">
                    Kunjungi website resmi kami: <a href="http://macstoredigital.id/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors">macstoredigital.id</a>
                </p>
                <p className="mt-4 text-md text-slate-400">
                    Dukungan & pendaftaran reseller via WhatsApp: <a href="https://api.whatsapp.com/send?phone=6283853289396" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 hover:underline transition-colors font-medium">083853289396</a>
                </p>
            </div>
        </footer>
    );
};