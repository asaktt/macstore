import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <section className={`bg-white rounded-xl shadow-lg shadow-slate-200/60 p-6 md:p-10 ${className}`}>
            {children}
        </section>
    );
};
