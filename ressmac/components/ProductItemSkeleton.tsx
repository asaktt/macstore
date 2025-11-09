
import React from 'react';

// Fix: Add props interface to accept className, and apply it to the root element.
interface ProductItemSkeletonProps {
    className?: string;
}

export const ProductItemSkeleton: React.FC<ProductItemSkeletonProps> = ({ className = '' }) => {
    return (
        <div className={`bg-white rounded-xl overflow-hidden border-2 border-slate-100 flex flex-col h-full ${className}`}>
            <div className="aspect-video w-full bg-slate-200 animate-pulse"></div>
            <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                    <div className="h-4 bg-slate-200 rounded w-3/4 mb-3 animate-pulse"></div>
                    <div className="h-4 bg-slate-200 rounded w-1/2 mb-4 animate-pulse"></div>
                    <div className="space-y-2">
                        <div className="h-3 bg-slate-200 rounded w-full animate-pulse"></div>
                        <div className="h-3 bg-slate-200 rounded w-5/6 animate-pulse"></div>
                    </div>
                </div>
                <div className="h-6 bg-slate-200 rounded w-1/3 mt-4 animate-pulse"></div>
            </div>
        </div>
    );
};
