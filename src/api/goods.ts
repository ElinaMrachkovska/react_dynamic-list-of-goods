import debounce from 'lodash.debounce';
// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export type Good = {
  id: number;
  name: string;
  color: string;
};
export async function getAll(): Promise<Good[]> {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Error loading all goods: ${error}`);

    return [];
  }
}

export const get5First = async (): Promise<Good[]> => {
  try {
    const allGoods = await getAll();

    // sort goods alphabetically by name to match expected UI order
    const sorted = allGoods
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));

    return sorted.slice(0, 5);
  } catch (error) {
    throw new Error(`Error loading 5 first goods: ${error}`);
  }
};

export const getRed = async (): Promise<Good[]> => {
  try {
    const allGoods = await getAll();

    return allGoods.filter(good => good.color === 'red');
  } catch (error) {
    throw new Error(`Error loading red goods: ${error}`);
  }
};

export const debouncedLoadAllGoods = debounce(getAll, 300);
