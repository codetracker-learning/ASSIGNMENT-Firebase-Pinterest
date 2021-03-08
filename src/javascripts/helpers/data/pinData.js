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

export default getBoardsPins;
