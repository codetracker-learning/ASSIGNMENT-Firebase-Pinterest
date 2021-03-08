import { getBoards } from '../../helpers/data/boardData';
import deleteBoardPins from '../../helpers/data/boardPins';
import { getBoardsPins, deletePin } from '../../helpers/data/pinData';
import showBoards from '../boards';
import showPins from '../pins';

const domEvents = (user) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // ADD CLICK EVENT FOR VIEWING A BOARD'S PINS
    if (e.target.id.includes('view-board-btn')) {
      const boardId = e.target.id.split('--')[1];
      getBoardsPins(boardId).then((pinsArray) => showPins(pinsArray));
    }

    // ADD CLICK EVENT FOR GOING BACK TO ALL BOARDS
    if (e.target.id.includes('back-to-boards')) {
      getBoards(user).then((boards) => showBoards(boards));
    }

    // CLICK EVENT FOR DELETING A BOARD
    if (e.target.id.includes('delete-board')) {
      const boardId = e.target.id.split('--')[1];
      deleteBoardPins(boardId, user).then((boardsArray) => showBoards(boardsArray));
    }

    // CLICK EVENT FOR DELETING A PIN
    if (e.target.id.includes('delete-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      deletePin(firebaseKey).then((pinsArray) => showPins(pinsArray));
      // deletePin(firebaseKey).then((pinsArray) => showPins(pinsArray));
    }
  });
};

export default domEvents;
