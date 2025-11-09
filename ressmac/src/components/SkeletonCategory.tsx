import React from 'react';
import { Card } from './Card';
import { ProductItemSkeleton } from './ProductItemSkeleton';

export const SkeletonCategory: React.FC = () => {
    return (
         <Card className="!p-0 overflow-hidden">
            <div className="p-6 md:p-8">
                 {/* Skeleton for category title button */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 w-full">
                        <div className="w-8 h-8 bg-slate-200 rounded-md animate-pulse"></div>
                        <div className="h-7 bg-slate-200 rounded w-1/3 animate-pulse"></div>
                    </div>
                     <div className="w-6 h-6 bg-slate-200 rounded-full animate-pulse"></div>
                </div>

                {/* Skeleton for content */}
                <div className="pt-2 mt-4">
                     <div className="h-12 bg-slate-200/70 rounded-lg w-2/3 mb-6 animate-pulse"></div>
                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <ProductItemSkeleton />
                        <ProductItemSkeleton />
                        {/* Hide one on mobile for realism */}
                        <ProductItemSkeleton className="hidden md:flex" />
                    </div>
                </div>
            </div>
        </Card>
    );
};