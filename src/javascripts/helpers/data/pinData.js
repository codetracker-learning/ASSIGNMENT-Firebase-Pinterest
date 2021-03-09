import axios from 'axios';
import firebaseConfig from '../apiKeys';

// API CALLS FOR PINS
const dbUrl = firebaseConfig.databaseURL;

// GET ALL BOARD'S PINS
const getBoardsPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="board_id"&equalTo="${boardId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE PINS
const deletePin = (firebaseKey, boardId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${firebaseKey}.json`)
    .then(() => getBoardsPins(boardId).then((pinsArray) => resolve(pinsArray)))
    .catch((error) => reject(error));
});

// CREATE PIN

export { getBoardsPins, deletePin };
