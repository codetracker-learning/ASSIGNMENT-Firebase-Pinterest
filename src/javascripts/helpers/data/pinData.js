import firebase from 'firebase/app';
import 'firebase/auth';
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
      axios.patch(`${dbUrl}/pins/${response.data.name}.json`, body)
        .then(() => {
          getBoardsPins(uid).then((pinsArray) => resolve(pinsArray));
        });
    }).catch((error) => reject(error));
});

// GET SINGLE PIN
const getSinglePin = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// UPDATE PIN
const updatePin = (firebaseKey, pinObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/pins/${firebaseKey}.json`, pinObject)
    .then(() => getBoardsPins(firebase.auth().currentUser.uid))
    .then((pinsArray) => resolve(pinsArray))
    .catch((error) => reject(error));
});

export {
  getBoardsPins, deletePin, createPin, getSinglePin, updatePin
};
