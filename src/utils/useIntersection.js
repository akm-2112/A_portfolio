import { useState, useEffect, useRef } from "react";

export const useIntersection = (options = { threshold: 0.2 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollDir, setScrollDir] = useState("down");
    const lastScrollY = useRef(0);
    const elementRef = useRef(null);

    useEffect(() => {
        // 1. Track Direction
        const updateDirection = () => {
            const currentY = window.scrollY;
            setScrollDir(currentY > lastScrollY.current ? "down" : "up");
            lastScrollY.current = currentY;
        };

        // 2. Track Visibility
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, options);

        if (elementRef.current) observer.observe(elementRef.current);
        window.addEventListener("scroll", updateDirection);

        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
            window.removeEventListener("scroll", updateDirection);
        };
    }, [options]);

    return { elementRef, isVisible, scrollDir };
};