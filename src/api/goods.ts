import { Good } from '../types/Good';
import debounce from 'lodash.debounce';
// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
   try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading all goods:', error);
    return [];
  }
};

export const get5First = async (): Promise<Good[]> => {
    try {
      const allGoods = await getAll();
      return allGoods.slice(0, 5);
    } catch (error) {
      console.error('Error loading 5 first goods:', error);
      return [];
    }
  };

export const getRed= async (): Promise<Good[]> => {
    try {
      const allGoods = await getAll();
      return allGoods.filter(good => good.color === 'red');
    } catch (error) {
      console.error('Error loading red goods:', error);
      return [];
    }
  };

export const debouncedLoadAllGoods = debounce(getAll, 300);
