import Lenis from "@studio-freight/lenis";

export function initLenis() {
    const lenis = new Lenis({
        smooth: true,
        lerp: 0.06,
        wheelMultiplier: 0.6,
        touchMultiplier: 1,
        smoothTouch: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return lenis;
}
