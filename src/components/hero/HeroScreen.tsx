import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '@/selectors/getHeroById';

const HeroScreen = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(heroId ?? ''), [heroId]);

  if (hero === undefined) {
    return <Navigate to="/" />;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id, superhero, alter_ego, characters, first_appearance, publisher } =
    hero;
  const imagePath = `/assets/${id}.jpg`;

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={imagePath}
          alt={superhero}
          className="img-thumbnail animate__animated animate__bounceInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button
          type="button"
          className="btn btn-outline-info"
          onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
