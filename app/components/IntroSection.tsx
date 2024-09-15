'use client'

import { useEffect, useRef } from 'react';

export default function IntroSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            if (section) {
                const scrollPosition = window.scrollY;
                const sectionHeight = section.offsetHeight;
                const opacity = 1 - Math.min(scrollPosition / sectionHeight, 1);
                section.style.opacity = opacity.toString();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8">
            <div className="max-w-3xl text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Hyungjin, Ahn (안형진)</h1>
                <p className="text-xl md:text-2xl mb-8">An enthusiastic Researcher, Developer.</p>
                <p className="text-lg md:text-xl mb-4">Love to learn and create</p>
                <p className="text-sm absolute bottom-4 left-1/2 transform -translate-x-1/2">Tribute to Richard Feynman</p>
                <p className="text-lg md:text-xl">Scroll down to see my projects and articles!</p>
            </div>
        </section>
    );
}