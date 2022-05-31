import { Link } from 'react-router-dom';
import type { HeroType } from '@/data/heroes';

const HeroCard = ({
  id,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  alter_ego,
  characters,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  first_appearance,
  superhero,
}: HeroType) => {
  const imagePath = `/assets/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={imagePath} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {alter_ego !== characters && (
                <p className="text-muted">{characters}</p>
              )}

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
