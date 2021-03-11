import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import logoutButton from '../components/buttons/logoutButton';
import { getBoards } from '../helpers/data/boardData';
import showBoards from '../components/showBoards';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  navBar();
  navigationEvents();
  logoutButton();
  getBoards().then((boards) => showBoards(boards));
};

export default startApp;
