'use client';

import { useState, useEffect } from 'react';

function useScrollHeight() {
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const newScrollHeight = window.scrollY;
            setScrollHeight(newScrollHeight);
        };

        const initialScrollHeight = window.scrollY;
        setScrollHeight(initialScrollHeight);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollHeight;
}

export default useScrollHeight;