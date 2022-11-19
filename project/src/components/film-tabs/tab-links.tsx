import cn from 'classnames';
import {DescriptionTabEnum} from '../../types/description';
import {Link} from 'react-router-dom';

type TabLinkProps = {
  currentTab: DescriptionTabEnum;
  actualTab: DescriptionTabEnum;
  changeTab: (tabStatus: DescriptionTabEnum) => void;
}

function TabLink ({currentTab, actualTab, changeTab}: TabLinkProps): JSX.Element {
  return (
    <li
      className={cn(
        'film-nav__item',
        {'film-nav__item--active': currentTab === actualTab}
      )}
    >
      <Link to=""
        className="film-nav__link"
        onClick={() => changeTab(actualTab)}
      >
        {actualTab}
      </Link>
    </li>
  );
}

export default TabLink;
