import { showBoards } from '../components/boards';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import { getBoards } from '../helpers/data/boardData';

const startApp = (userObject) => {
  domBuilder();
  navBar();
  domEvents(userObject);
  logoutButton();
  getBoards().then((boards) => showBoards(boards));
};

export default startApp;
