const pinTitle = (boardObj) => {
  document.querySelector('#main-container').innerHTML = `<h1>${boardObj.board_title}</h1>`;
};

export default pinTitle;
