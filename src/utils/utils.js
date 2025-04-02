export const debounce = (callbackFnc, delay) => {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callbackFnc(args);
    }, delay);
  };
};
