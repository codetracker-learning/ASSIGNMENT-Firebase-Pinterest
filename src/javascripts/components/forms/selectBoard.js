import firebase from 'firebase/app';
import 'firebase/auth';
import { getBoards } from '../../helpers/data/boardData';

const selectBoard = (pinObject = {}) => {
  let formString = `<label for="board">Choose a Board</label>
                      <select class="form-control" id="board" required>
                        <option value="">Select a Board</option>`;

  getBoards(firebase.auth().currentUser.uid).then((boardsArray) => {
    boardsArray.forEach((board) => {
      if (board.firebaseKey === pinObject.board_id) {
        formString += `<option value="${board.firebaseKey}">${board.title}</option>`;
      } else {
        formString += `<option value="${board.firebaseKey}">${board.title}</option>`;
      }
    });

    formString += '</select>';

    document.querySelector('#select-board').innerHTML = formString;
  });
};

export default selectBoard;
