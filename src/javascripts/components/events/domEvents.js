import firebase from 'firebase/app';
import 'firebase/auth';
import { createBoard, getBoards } from '../../helpers/data/boardData';
import deleteBoardPins from '../../helpers/data/boardPinsData';
import { getBoardsPins, deletePin } from '../../helpers/data/pinData';
import showBoards from '../boards';
import showPins from '../pins';
import addBoardForm from './forms/addBoardForm';

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

    // CLICK EVENT FOR SHOWING ADD-BOARD FORM
    if (e.target.id.includes('add-board')) {
      addBoardForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOARD
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        title: document.querySelector('#board-title').value,
        time: new Date(),
        image: document.querySelector('#board-image').value,
        uid: firebase.auth().currentUser.uid,
      };

      createBoard(boardObject).then((boardArray) => showBoards(boardArray));
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
