import firebase from 'firebase/app';
import 'firebase/auth';
import { getBoards } from '../../helpers/data/boardData';

const selectBoard = (pinObject = {}) => {
  let domString = `<label for="board">Select Board</label>
    <select class="form-control" id="board" required>
    <option value="">Select Board</option>`;

  getBoards(firebase.auth().currentUser.uid).then((boardsArray) => {
    boardsArray.forEach((board) => {
      if (board.firebaseKey === pinObject.boardId) {
        domString += `<option selected value="${board.firebaseKey}">${board.title}</option>`;
      } else {
        domString += `<option value="${board.firebaseKey}">${board.title}</option>`;
      }
    });

    domString += '</select>';

    document.querySelector('#select-board').innerHTML = domString;
  });
};

export default selectBoard;
