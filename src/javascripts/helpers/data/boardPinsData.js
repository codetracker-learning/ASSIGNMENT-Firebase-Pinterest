import { deleteBoard } from './boardData';
import { deletePin, getBoardsPins } from './pinData';

// DELETE BOARD AND ALL OF ITS PINS
const deleteBoardPins = (boardId, uid) => new Promise((resolve, reject) => {
  getBoardsPins(boardId).then((boardPinsArray) => {
    const deletePins = boardPinsArray.map((pin) => deletePin(pin.firebaseKey));
    Promise.all(deletePins).then(() => resolve(deleteBoard(boardId, uid)));
  }).catch((error) => reject(error));
});

export default deleteBoardPins;
