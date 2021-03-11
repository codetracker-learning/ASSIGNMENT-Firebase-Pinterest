const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
                                                <div id="main-container">
                                                  <div id="board-title"></div>
                                                  <div id="cards" class="d-flex justify-content-center flex-wrap"></div>
                                                </div>`;
};

export default domBuilder;
