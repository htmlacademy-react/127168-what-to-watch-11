import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type ExitButtonProps = {
  movieID: string;
};

function ExitButton ({movieID}: ExitButtonProps): JSX.Element {
  return (
    <Link
      type="button"
      className="player__exit"
      style={{'textDecoration': 'none'}}
      to={`${AppRoute.Film}${movieID}`}
    >
      Exit
    </Link>

  );
}

export default ExitButton;
