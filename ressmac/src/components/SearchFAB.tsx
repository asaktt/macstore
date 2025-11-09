import React, { useState, useEffect } from 'react';

export const SearchFAB: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const searchBar = document.getElementById('search-bar');
            if (searchBar) {
                const searchBarRect = searchBar.getBoundingClientRect();
                 if (searchBarRect.bottom < 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToSearch = () => {
        const searchBar = document.getElementById('search-bar');
        if (searchBar) {
            searchBar.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Focus the input after scrolling
            const input = searchBar.querySelector('input');
            if(input) input.focus();
        }
    };

    return (
        <button
            onClick={scrollToSearch}
            className={`fixed bottom-8 right-8 z-50 w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 ease-in-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
                hover:bg-indigo-700 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-500/50`}
            aria-label="Kembali ke pencarian"
        >
            <i className="fas fa-search text-2xl"></i>
        </button>
    );
};