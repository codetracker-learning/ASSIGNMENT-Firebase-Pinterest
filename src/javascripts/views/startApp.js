import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import logoutButton from '../components/buttons/logoutButton';
import { getBoards } from '../helpers/data/boardData';
import showBoards from '../components/showBoards';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  navBar(user);
  navigationEvents(user.uid);
  logoutButton();
  getBoards(user.uid).then((boards) => showBoards(boards));
};

export default startApp;
