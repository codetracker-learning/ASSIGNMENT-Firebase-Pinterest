import signMeOut from '../components/buttons/logoutButton';
import showBoards from '../components/showBoards';
import { showPins } from '../components/showPins';
import { getBoards } from '../helpers/data/boardData';
import { getPins } from '../helpers/data/pinData';

const navigationEvents = (uid) => {
  document.querySelector('#logout-button').addEventListener('click', signMeOut);

  document.querySelector('#boards-page').addEventListener('click', () => {
    getBoards(uid).then((boardsArray) => showBoards(boardsArray));
    document.querySelector('#board-title').innerHTML = '';
  });

  document.querySelector('#corner-logo').addEventListener('click', () => {
    getBoards(uid).then((boardsArray) => showBoards(boardsArray));
    document.querySelector('#board-title').innerHTML = '';
  });

  document.querySelector('#pins-page').addEventListener('click', () => {
    getPins(uid).then((pinsArray) => showPins(pinsArray));
    document.querySelector('#board-title').innerHTML = '';
  });
};

export default navigationEvents;
