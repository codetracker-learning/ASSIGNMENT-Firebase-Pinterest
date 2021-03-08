// import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

// API CALLS FOR BOARDS
const dbUrl = firebaseConfig.databaseURL;

// GET BOARDS
const getBoards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE BOARD
const deleteBoard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${firebaseKey}.json`)
    .then(() => getBoards(uid).then((boardArray) => resolve(boardArray)))
    .catch((error) => reject(error));
});

export { getBoards, deleteBoard };
