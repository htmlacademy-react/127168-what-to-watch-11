import {DescriptionTab} from '../../const';
import {DescriptionTabEnum} from '../../types/description';
import FilmDetails from '../film-information/film-details';
import FilmOverview from '../film-information/film-overview';
import FilmReviews from '../film-information/film-reviews';
import {getCurrentComments, getCurrentMovie} from '../../store/current-movie-data/selectors';
import TabLink from './tab-links';
import {useAppSelector} from '../../hooks';
import {useState} from 'react';

function FilmTabs (): JSX.Element {
  const movie = useAppSelector(getCurrentMovie);
  const comments = useAppSelector(getCurrentComments);

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
