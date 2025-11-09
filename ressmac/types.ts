import React from 'react';

export interface Product {
    name: string;
    description: string;
    price: string;
    image?: string;
}

export interface LinkInfo {
    text: string;
    url: string;
    type: 'notion' | 'youtube' | 'generic';
}

export interface Note {
    title: string;
    points: string[];
    guidesTitle?: string;
    guideLinks?: LinkInfo[];
    footerText?: string;
}

export interface ProductCategoryData {
    id: string;
    title: string;
    iconClass: string;
    categoryTitle: string;
    categoryIconClass: string;
    products: Product[];
    note?: Note;
}