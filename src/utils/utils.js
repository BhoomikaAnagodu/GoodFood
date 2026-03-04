export const debounce = (callbackFnc, delay = 300) => {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const ms = Number(delay) || 300;
    timeoutId = setTimeout(() => {
      callbackFnc(...args);
    }, ms);
  };
};

export const scrollToTop = (behavior = "smooth") => {
  // use a standard behavior value; default to smooth scrolling
  window.scrollTo({ top: 0, left: 0, behavior });
};

// Export as a function so callers get a live check on resize instead of
// a boolean evaluated once at module import time.
export const isMobile = () => window.matchMedia("(max-width: 1023px)").matches;

// Return current vertical scroll position with safe fallbacks for different environments
export const getScrollTop = () => {
  if (typeof document === "undefined") return 0;
  return (
    (document.scrollingElement && document.scrollingElement.scrollTop) ||
    document.documentElement.scrollTop ||
    window.pageYOffset ||
    0
  );
};
