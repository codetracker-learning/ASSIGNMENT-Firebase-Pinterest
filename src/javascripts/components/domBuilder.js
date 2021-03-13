const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="navigation"></div>
      <div id="main-container" class="py-5">
        <div id="board-title"></div>
        <div id="cards" class="row row-cols-1 row-cols-md-3 g-4 mx-3"></div>
      </div>
  `;
};

export default domBuilder;
