const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id=navigation></div>
    <div id="mainContainer">
      <div id="profileContainer"></div>
      <h6></h6>
      <div id="add-button"></div>
      <div id="boardTitleForPins"></div>
      <div id="formContainer"></div>
      <div id="content"></div>
    </div>`;
};

export default domBuilder;
