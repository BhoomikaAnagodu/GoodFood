export const debounce = (callbackFnc, delay) => {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callbackFnc(...args);
    }, delay);
  };
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
};

export const isMobile = window.innerWidth < 1024;
