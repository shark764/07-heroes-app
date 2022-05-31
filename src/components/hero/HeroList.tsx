import { useMemo } from 'react';
import type { PublisherType } from '@/data/heroes';
import { getHeroesByPublisher } from '@/selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

interface Props {
  publisher: PublisherType;
}

const HeroList = ({ publisher }: Props) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    // eslint-disable-next-line max-len
    <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__zoomIn">
      {heroes.map((hero) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

export default HeroList;
