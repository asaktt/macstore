import React, { useState } from 'react';
import { Card } from './Card';
import { ProductItem } from './ProductItem';
import { NoteCard } from './NoteCard';
import { ProductCategoryData } from '../types';

interface ProductCategoryProps {
    category: ProductCategoryData;
    searchQuery: string;
}

export const ProductCategory: React.FC<ProductCategoryProps> = ({ category, searchQuery }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <Card className="!p-0 overflow-hidden">
            <button
                onClick={toggleOpen}
                className="w-full text-left flex items-center justify-between p-6 md:p-8 focus:outline-none transition-colors duration-300 hover:bg-slate-50"
                aria-expanded={isOpen}
                aria-controls={`category-${category.id}`}
            >
                <div className="flex items-center gap-4">
                    <i className={`${category.iconClass} text-2xl text-indigo-500`}></i>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-800">{category.title}</h2>
                </div>
                <i className={`fas fa-chevron-down text-slate-500 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>
            <div
                id={`category-${category.id}`}
                className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'max-h-[5000px]' : 'max-h-0'}`}
            >
                <div className="px-6 md:px-8 pb-8 pt-2">
                    <div className="text-lg md:text-xl font-semibold text-indigo-700 mt-4 mb-6 bg-indigo-100/70 p-4 rounded-lg flex items-center gap-4">
                        <i className={`${category.categoryIconClass}`}></i> {category.categoryTitle}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {category.products.map((product, index) => (
                            <ProductItem key={index} product={product} searchQuery={searchQuery} />
                        ))}
                    </div>
                    {category.note && <NoteCard note={category.note} />}
                </div>
            </div>
        </Card>
    );
};