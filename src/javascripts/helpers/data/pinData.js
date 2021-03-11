import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GETS ALL PINS
const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json`)
    .then((response) => {
      if (response.data) {
        const pinsArray = Object.values(response.data);
        resolve(pinsArray);
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// DELETES PINS
const deletePins = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${firebaseKey}.json`)
    .then(() => getPins().then((pinArray) => resolve(pinArray)))
    .catch((error) => reject(error));
});

// GETS PINS FOR SPECIFIC BOARD
const getBoardPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="board_id"&equalTo="${boardId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// CREATE PIN
const createNewPin = (pinObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/pins.json`, pinObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/pins/${response.data.name}.json`, body)
        .then(() => {
          getPins().then((pinsArray) => resolve(pinsArray));
        });
    }).catch((error) => reject(error));
});

// UPDATE PIN
const updatePin = (firebaseKey, pinObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/pins/${firebaseKey}/.json`, pinObject)
    .then(() => getPins().then((pinsArray) => resolve(pinsArray)))
    .catch((error) => reject(error));
});

export {
  getPins,
  deletePins,
  getBoardPins,
  createNewPin,
  updatePin,
};
