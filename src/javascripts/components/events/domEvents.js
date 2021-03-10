import firebase from 'firebase/app';
import 'firebase/auth';
import { createBoard, getBoards } from '../../helpers/data/boardData';
import deleteBoardPins from '../../helpers/data/boardPinsData';
import {
  getBoardsPins, deletePin, createPin, updatePin, getSinglePin
} from '../../helpers/data/pinData';
import showBoards from '../boards';
import editPinForm from '../forms/editPinForm';
import showPins from '../pins';
import addBoardForm from '../forms/addBoardForm';
import addPinForm from '../forms/addPinForm';

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

    // CLICK EVENT FOR SHOWING ADD-PIN FORM
    if (e.target.id.includes('add-pin')) {
      addPinForm();
    }

    // CLICK EVENT FOR SUBMITTING ADD-PIN FORM
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        title: document.querySelector('#pin-title').value,
        image: document.querySelector('#pin-image').value,
        board_id: document.querySelector('#board').value,
        user,
      };

      createPin(pinObject, user).then((pinsArray) => showPins(pinsArray));
    }

    // CLICK EVENT FOR SHOWING EDIT-PIN FORM
    if (e.target.id.includes('edit-pin-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
    }

    // CLICK EVENT FOR EDITING A PIN
    if (e.target.id.includes('update-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const pinObject = {
        title: document.querySelector('#pin-title').value,
        image: document.querySelector('#pin-image').value,
        board_id: document.querySelector('#board').value,
      };

      updatePin(firebaseKey, pinObject).then((pinsArray) => showPins(pinsArray));
    }
  });
};

export default domEvents;
