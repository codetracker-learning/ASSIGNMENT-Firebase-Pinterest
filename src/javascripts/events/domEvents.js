import firebase from 'firebase/app';
import 'firebase/auth';
import { showBoards, noBoards } from '../components/boards';
import addBoardForm from '../components/forms/addBoard';
import {
  getBoards, createBoard,
} from '../helpers/data/boardData';
import {
  getPins, deletePins, getSinglePin, createPin, updatePin, getBoardPins
} from '../helpers/data/pinData';
import { showPins, noPins } from '../components/pins';
import addPinForm from '../components/forms/addPin';
import formModal from '../components/forms/formModal';
import editPinForm from '../components/forms/editPin';
import deleteBoardPins from '../helpers/data/boardPins';

const domEvents = (uid) => {
  document.querySelector('#showCreatePinButton').addEventListener('click', () => {
    getPins(uid).then((pinsArray) => {
      if (pinsArray.length) {
        showPins(pinsArray);
      } else {
        noPins();
      }
    });
  });

  document.querySelector('#showCreateBoardButton').addEventListener('click', () => {
    getBoards(uid).then((pinsArray) => {
      if (pinsArray.length) {
        showBoards(pinsArray);
      } else {
        noBoards();
      }
    });
  });

  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('add-board-btn')) {
      addBoardForm();
    }

    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        title: document.querySelector('#boardTitle').value,
        image: document.querySelector('#boardImage').value,
        uid: firebase.auth().currentUser.uid
      };
      createBoard(boardObject, uid).then((boardArray) => showBoards(boardArray));
    }

    if (e.target.id.includes('view-pins-btn')) {
      const boardId = e.target.id.split('--')[1];
      getBoardPins(boardId).then((pinsArray) => showPins(pinsArray));
    }

    if (e.target.id.includes('delete-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      deletePins(firebaseKey, uid).then((pinsArray) => showPins(pinsArray));
    }

    if (e.target.id.includes('delete-board')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteBoardPins(firebaseKey, uid).then((boardsArray) => showBoards(boardsArray));
    }

    if (e.target.id.includes('add-pin-btn')) {
      addPinForm();
    }

    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        title: document.querySelector('#pinTitle').value,
        image: document.querySelector('#pinImage').value,
        boardId: document.querySelector('#board').value,
        uid: firebase.auth().currentUser.uid
      };
      createPin(pinObject, uid).then((pinsArray) => showPins(pinsArray));
    }

    if (e.target.id.includes('update-pins-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Update Pin');
      getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
    }

    if (e.target.id.includes('submit-update-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const pinTitle = document.querySelector('#editPinTitle').value;
      const pinObject = {
        title: pinTitle,
        image: document.querySelector('#editPinImage').value,
        boardId: document.querySelector('#board').value,
        uid: firebase.auth().currentUser.uid
      };
      updatePin(firebaseKey, pinObject, uid).then((pinsArray) => showPins(pinsArray));

      $('#formModal').modal('toggle');
    }
  });
};

export default domEvents;
