import selectBoard from './selectBoard';

const editPinForm = (pinObject) => {
  document.querySelector('#app').innerHTML = `
  <div id="user-container" class="row justify-content-center"></div>`;

  document.querySelector('#user-container').innerHTML = `
  <form id="pin-form" class="my-4">
    <div class="form-group">
      <label for="pin-title">Pin Title</label>
      <input type="text" class="form-control" id="pin-title" placeholder="Pin Title" value="${pinObject.title}" required>
    </div>
    <div class="form-group">
      <label for="pin-image">Pin Image</label>
      <input type="text" class="form-control" id="pin-image" placeholder="Pin Url" value="${pinObject.image}" required>
    </div>
    <div class="form-group" id="select-board"></div>
    <button type="submit" id="update-pin--${pinObject.firebaseKey}" class="btn btn-primary">Update Pin</button>
  </form>`;

  selectBoard(pinObject);
};

export default editPinForm;
