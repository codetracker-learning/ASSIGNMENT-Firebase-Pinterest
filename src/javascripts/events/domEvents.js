import firebase from 'firebase/app';
import 'firebase/auth';
import showBoards from '../components/showBoards';
import { deletePins, createNewPin } from '../helpers/data/pinData';
import { showPins } from '../components/showPins';
import { deleteBoardPins, boardPinsAll } from '../helpers/data/boardPinData';
import boardTitle from '../components/boardTitle';
import { getBoards, createNewBoard } from '../helpers/data/boardData';
import addBoardForm from '../components/forms/addBoardForm';
import addPinForm from '../components/forms/addPinForm';
import formModal from '../components/forms/formModal';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOARD AND ALL ASSOCIATED PINS
    if (e.target.id.includes('delete-board')) {
      const boardId = e.target.id.split('--')[1];
      deleteBoardPins(boardId).then((boardsArray) => showBoards(boardsArray));
    }

    // CLICK EVENT FOR DELETEING A PIN
    if (e.target.id.includes('delete-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      deletePins(firebaseKey)
        .then(() => getBoards()
          .then((boardsArray) => showBoards(boardsArray)));
    }

    // CLICK EVENT FOR DISPLAYING A SPECIFIC BOARD'S PINS
    if (e.target.id.includes('show-pins')) {
      const firebaseKey = e.target.id.split('--')[1];
      boardPinsAll(firebaseKey).then((boardInfoObject) => {
        boardTitle(boardInfoObject.board);
        showPins(boardInfoObject.boardPins);
      });
    }

    // CLICK EVENT FOR DISPLAYING ADD BOARD FORM
    if (e.target.id.includes('create-new-board')) {
      addBoardForm();
    }

    // CLICK EVEN FOR DISPLAYING ADD PIN FORM
    if (e.target.id.includes('create-new-pin')) {
      addPinForm();
    }

    // ClICK EVENT FOR DISPLAYING FORM MODAL FOR UPDATING PINS
    if (e.target.id.includes('update-pin')) {
      formModal();
    }

    // CLICK EVENT FOR POSTING A NEW BOARD TO FIREBASE
    if (e.target.id.includes('submit-new-board')) {
      e.preventDefault();
      const boardObject = {
        title: document.querySelector('#new-board-title').value,
        image: document.querySelector('#new-board-url').value,
        favorite: document.querySelector('#favorite-board').checked,
        uid: firebase.auth().currentUser.uid,
      };

      createNewBoard(boardObject).then((boardsArray) => showBoards(boardsArray));
    }

    if (e.target.id.includes('submit-new-pin')) {
      e.preventDefault();
      const pinObject = {
        title: document.querySelector('#new-pin-title').value,
        image: document.querySelector('#new-pin-url').value,
        board_id: document.querySelector('#board').value,
        favorite: document.querySelector('#favorite-pin').checked,
        uid: firebase.auth().currentUser.uid,
      };

      createNewPin(pinObject).then((pinsArray) => showPins(pinsArray));
    }
  });
};

export default domEvents;
