import {Comments} from '../../types/comments';
import {DescriptionTab} from '../../const';
import {DescriptionTabEnum} from '../../types/description';
import FilmDetails from '../film-information/film-details';
import FilmOverview from '../film-information/film-overview';
import FilmReviews from '../film-information/film-reviews';
import {Movie} from '../../types/movies';
import TabLink from './tab-links';
import {useState} from 'react';

type FilmTabsProps = {
  movie: Movie;
  comments: Comments;
}

function FilmTabs ({movie, comments}: FilmTabsProps): JSX.Element {
  const [currentTab, setCurrentTab] = useState(DescriptionTab.Overview);
  const onClickCurrentTab = (tabStatus: DescriptionTabEnum): void => setCurrentTab(tabStatus);

  const renderFilmInfo = () => {
    switch (currentTab) {
      case DescriptionTab.Overview:
        return <FilmOverview movie={movie}/>;
      case DescriptionTab.Details:
        return <FilmDetails movie={movie}/>;
      case DescriptionTab.Reviews:
        return <FilmReviews comments={comments}/>;
      default:
        <FilmOverview movie={movie}/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            Object.values(DescriptionTab)
              .map((tab) => (
                <TabLink
                  key={tab}
                  currentTab={currentTab}
                  actualTab={tab}
                  changeTab={onClickCurrentTab}
                />
              ))
          }
        </ul>
      </nav>
      {renderFilmInfo()}
    </div>
  );
}

export default FilmTabs;
