
import React from 'react';
import { Product } from '../types';
import { WHATSAPP_PHONE_NUMBER, WHATSAPP_RESELLER_GREETING } from '../constants';

interface ProductItemProps {
    product: Product;
    searchQuery?: string;
}

const HighlightedText: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
    if (!highlight.trim()) {
        return <>{text}</>;
    }
    const regex = new RegExp(`(${highlight.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
        <>
            {parts.map((part, i) =>
                regex.test(part) ? (
                    <mark key={i} className="bg-yellow-300/70 px-0.5 rounded-sm">{part}</mark>
                ) : (
                    part
                )
            )}
        </>
    );
};

export const ProductItem: React.FC<ProductItemProps> = ({ product, searchQuery = '' }) => {

    const message = `${WHATSAPP_RESELLER_GREETING}" saya beli produk ${product.name}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_NUMBER}&text=${encodeURIComponent(message)}`;

    return (
        <div className="bg-white rounded-xl overflow-hidden border-2 border-slate-100 transition-all duration-300 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-200/50 hover:-translate-y-1 flex flex-col h-full group">
            {product.image && (
                <div className="aspect-video w-full overflow-hidden">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                        loading="lazy" 
                    />
                </div>
            )}
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex-grow">
                    <h3 className="font-semibold text-slate-800 text-base leading-snug mb-2 uppercase">
                        <HighlightedText text={product.name} highlight={searchQuery} />
                    </h3>
                    <p className="text-slate-500 text-xs">
                        <HighlightedText text={product.description} highlight={searchQuery} />
                    </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold text-red-600 text-lg md:text-xl">{product.price}</span>
                    {product.price.toLowerCase() !== 'hubungi admin' && (
                         <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white text-xs font-bold py-2 px-3 rounded-md flex items-center gap-1.5 transition-all duration-300 hover:bg-green-600 hover:scale-105 shadow-sm hover:shadow-md"
                            aria-label={`Beli ${product.name} via WhatsApp`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <i className="fab fa-whatsapp text-sm"></i>
                            <span>Beli</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};