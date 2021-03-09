import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getBoards } from './boardsData';

const dbUrl = firebaseConfig.databaseURL;
// GET PINS
const getPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="board_ID"&equalTo="${boardId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// DELETE PINS
const deletePins = (pinId, boardId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${pinId}.json`)
    .then(() => getPins(boardId).then((array) => resolve(array)))
    .catch((error) => reject(error));
});
// DELETE ALL PINS ASSOCIATED WITH A BOARD
const deleteAllPins = (boardId, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${boardId}.json`)
    .then(() => getBoards(uid).then((array) => resolve(array)))
    .catch((error) => reject(error));
});
const getBoardPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="board_ID"&equalTo="${boardId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// GET SINGLE PIN
const getSinglePin = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
const getPublicPins = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="public"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  deletePins, getPins, deleteAllPins, getBoardPins, getSinglePin, getPublicPins
};
