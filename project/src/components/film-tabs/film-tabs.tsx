import cn from 'classnames';
import {Comments} from '../../types/comments';
import {DescriptionTab} from '../../const';
import FilmDetails from '../film-information/film-details';
import FilmOverview from '../film-information/film-overview';
import FilmReviews from '../film-information/film-reviews';
import {Link} from 'react-router-dom';
import {Movie} from '../../types/movies';
import {useState} from 'react';


type FilmTabsProps = {
  movie: Movie;
  comments: Comments;
}

function FilmTabs ({movie, comments}: FilmTabsProps): JSX.Element {
  const [currentTab, setCurrentTab] = useState(DescriptionTab.Details);

  const renderFilmInfo = () => {
    switch (currentTab) {
      case DescriptionTab.Overview:
        return <FilmOverview movie={movie}/>;
      case DescriptionTab.Details:
        return <FilmDetails movie={movie}/>;
      case DescriptionTab.Reviews:
        return <FilmReviews/>;
      default:
        <FilmOverview movie={movie}/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li
            className={cn(
              'film-nav__item',
              {'film-nav__item--active': currentTab === DescriptionTab.Overview}
            )}
          >
            <Link to=""
              className="film-nav__link"
              onClick={() => setCurrentTab(DescriptionTab.Overview)}
            >
              {DescriptionTab.Overview}
            </Link>
          </li>
          <li
            className={cn(
              'film-nav__item',
              {'film-nav__item--active': currentTab === DescriptionTab.Details}
            )}
          >
            <Link to=""
              className="film-nav__link"
              onClick={() => setCurrentTab(DescriptionTab.Details)}
            >
              {DescriptionTab.Details}
            </Link>
          </li>
          <li
            className={cn(
              'film-nav__item',
              {'film-nav__item--active': currentTab === DescriptionTab.Reviews}
            )}
          >
            <Link to=""
              className="film-nav__link"
              onClick={() => setCurrentTab(DescriptionTab.Reviews)}
            >
              {DescriptionTab.Reviews}
            </Link>
          </li>
        </ul>
      </nav>
      {renderFilmInfo()}
    </div>
  );
}

export default FilmTabs;
