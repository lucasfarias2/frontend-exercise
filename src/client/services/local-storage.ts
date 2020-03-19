const getLocalStorageItem = (item: string): any => {
  if (typeof window !== undefined && localStorage) {
    return JSON.parse(localStorage.getItem(item));
  }
};

const setLocalStorageItem = (item: string, value: any) => {
  if (typeof window !== undefined && localStorage) {
    localStorage.setItem(item, JSON.stringify(value));
  }
};

export default { getLocalStorageItem, setLocalStorageItem };
