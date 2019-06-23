export const setStorageItem = (key: string, value: string): void => {
  if (window.localStorage) {
    localStorage.setItem(key, value);
  }
};

export const getStorageItem = (key: string): string | null => {
  return window.localStorage ? localStorage.getItem(key) || null : null;
};
