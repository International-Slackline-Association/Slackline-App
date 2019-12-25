export const setStorageItem = (key: string, value: string): void => {
  if (window.localStorage) {
    localStorage.setItem(key, value);
  }
};

export const removeStorageItem = (key: string): void => {
  if (window.localStorage) {
    localStorage.removeItem(key);
  }
};

export const getStorageItem = (key: string): string | null => {
  return window.localStorage ? localStorage.getItem(key) || null : null;
};
