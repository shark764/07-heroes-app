import { heroes } from '@/data/heroes';

export const getHeroesByName = (search = '') => {
  if (search.trim().length === 0) {
    return [];
  }
  const lowerCaseSearch = search.toLowerCase();
  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(lowerCaseSearch)
  );
};
