export const disableScroll = (preventDefault, overflow = false) => {
    if (overflow) {
        document.body.style.overflow = 'hidden';
    }
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', preventDefault, {
            passive: false,
        });
        window.addEventListener('mousewheel', preventDefault, { passive: false });
        window.addEventListener('wheel', preventDefault, { passive: false });
        window.addEventListener('touchmove', preventDefault, { passive: false });
        window.addEventListener('keydown', preventDefault, { passive: false });
    }
    else {
        window.onwheel = preventDefault;
        document.onmousewheel = preventDefault;
        window.ontouchmove = preventDefault;
    }
};
export const enableScroll = (preventDefault, overflow = false) => {
    if (overflow) {
        document.body.style.removeProperty('overflow');
    }
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', preventDefault);
        window.removeEventListener('mousewheel', preventDefault);
        window.removeEventListener('wheel', preventDefault);
        window.removeEventListener('touchmove', preventDefault);
    }
    else {
        document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
    }
};
//# sourceMappingURL=scroll.js.map