const boardTitle = (boardObject) => {
  document.querySelector('#board-title').innerHTML += `<h1>${boardObject.title}</h1>`;
};

export default boardTitle;
