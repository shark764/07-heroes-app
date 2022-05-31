import { heroes, PublisherType } from '@/data/heroes';

export const getHeroesByPublisher = (publisher: PublisherType) =>
  heroes.filter((hero) => hero.publisher === publisher);
