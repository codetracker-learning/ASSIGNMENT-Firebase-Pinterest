import { deleteBoards, getSingleBoard } from './boardData';
import { getBoardPins, deletePins } from './pinData';

const deleteBoardPins = (boardId) => new Promise((resolve, reject) => {
  getBoardPins(boardId).then((boardPinsArray) => {
    const deleteAllPins = boardPinsArray.map((pin) => deletePins(pin.firebaseKey));

    Promise.all(deleteAllPins).then(() => resolve(deleteBoards(boardId)));
  }).catch((error) => reject(error));
});

const boardPinsAll = (boardId) => new Promise((resolve, reject) => {
  const board = getSingleBoard(boardId);
  const boardPins = getBoardPins(boardId);

  Promise.all([board, boardPins])
    .then(([boardResponse, boardPinResponse]) => resolve(
      { board: boardResponse, boardPins: boardPinResponse }
    ))
    .catch((error) => reject(error));
});

export { deleteBoardPins, boardPinsAll };
