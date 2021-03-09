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
const createPin = (pinObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/pins.json`, pinObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.path(`${dbUrl}/pins/${response.data.name}.json`, body)
        .then(() => {
          getBoardsPins(uid).then((pinsArray) => resolve(pinsArray));
        });
    }).catch((error) => reject(error));
});

export { getBoardsPins, deletePin, createPin };
